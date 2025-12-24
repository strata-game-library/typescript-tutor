// PyGame Simple Platformer Template
import { GameTemplate } from './pygame-template-types';

export const platformerTemplate: GameTemplate = {
  id: 'simple-platformer',
  name: 'Simple Platformer',
  description: 'A basic platform game with jumping, gravity, and a goal',
  wizardDescription: 'Create a fun jumping game where you hop across platforms to reach the goal! Perfect for beginners who want to learn about gravity and collision detection.',
  difficulty: 'beginner',
  settings: {
    screenWidth: 800,
    screenHeight: 600,
    backgroundColor: '#87CEEB',
    fps: 60,
    title: 'My Platform Adventure'
  },
  components: [
    {
      type: 'sprite',
      id: 'player',
      properties: {
        x: 50,
        y: 400,
        velocityX: 0,
        velocityY: 0,
        width: 40,
        height: 40,
        color: '#4F46E5'
      }
    },
    {
      type: 'platform',
      id: 'ground',
      properties: {
        x: 0,
        y: 500,
        width: 800,
        height: 100,
        color: '#10B981'
      }
    },
    {
      type: 'platform',
      id: 'platform1',
      properties: {
        x: 200,
        y: 400,
        width: 100,
        height: 20,
        color: '#10B981'
      }
    },
    {
      type: 'platform',
      id: 'platform2',
      properties: {
        x: 400,
        y: 320,
        width: 100,
        height: 20,
        color: '#10B981'
      }
    },
    {
      type: 'platform',
      id: 'platform3',
      properties: {
        x: 600,
        y: 240,
        width: 100,
        height: 20,
        color: '#10B981'
      }
    },
    {
      type: 'collectible',
      id: 'goal',
      properties: {
        x: 640,
        y: 200,
        type: 'key',
        value: 100,
        size: 30,
        color: '#FBBF24'
      }
    },
    {
      type: 'scoreText',
      id: 'instructions',
      properties: {
        text: 'Use Arrow Keys to Move and Space to Jump!',
        x: 200,
        y: 50,
        fontSize: 20,
        color: '#000000'
      }
    }
  ],
  preview: (ctx: CanvasRenderingContext2D) => {
    // Draw simplified platformer preview
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Ground
    ctx.fillStyle = '#10B981';
    ctx.fillRect(0, 400, ctx.canvas.width, 200);
    
    // Platforms
    ctx.fillRect(150, 350, 80, 15);
    ctx.fillRect(300, 300, 80, 15);
    ctx.fillRect(450, 250, 80, 15);
    
    // Player
    ctx.fillStyle = '#4F46E5';
    ctx.fillRect(50, 365, 30, 30);
    
    // Goal
    ctx.fillStyle = '#FBBF24';
    ctx.beginPath();
    ctx.arc(490, 230, 15, 0, Math.PI * 2);
    ctx.fill();
  },
  generateCode: () => `import { strata } from 'strata';

// Initialize Strata
strata.init();

// Game settings
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const FPS = 60;
const GRAVITY = 0.8;
const JUMP_STRENGTH = -15;

// Colors
const BLACK = [0, 0, 0];
const WHITE = [255, 255, 255];
const BLUE = [79, 70, 229];
const GREEN = [16, 185, 129];
const YELLOW = [251, 191, 36];
const SKY_BLUE = [135, 206, 235];

// Create the screen
const screen = strata.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
strata.display.setCaption('My Platform Adventure');
const clock = new strata.time.Clock();

class Player {
    constructor() {
        this.width = 40;
        this.height = 40;
        this.rect = new strata.Rect(50, 400, this.width, this.height);
        this.velocityX = 0;
        this.velocityY = 0;
        this.onGround = false;
    }
    
    update(platforms) {
        // Apply gravity
        if (!this.onGround) {
            this.velocityY += GRAVITY;
        }
        
        // Move horizontally
        this.rect.x += this.velocityX;
        
        // Check horizontal collisions
        for (let platform of platforms) {
            if (this.rect.colliderect(platform.rect)) {
                if (this.velocityX > 0) {
                    this.rect.right = platform.rect.left;
                } else if (this.velocityX < 0) {
                    this.rect.left = platform.rect.right;
                }
            }
        }
        
        // Move vertically
        this.rect.y += this.velocityY;
        
        // Check vertical collisions
        this.onGround = false;
        for (let platform of platforms) {
            if (this.rect.colliderect(platform.rect)) {
                if (this.velocityY > 0) {
                    this.rect.bottom = platform.rect.top;
                    this.velocityY = 0;
                    this.onGround = true;
                } else if (this.velocityY < 0) {
                    this.rect.top = platform.rect.bottom;
                    this.velocityY = 0;
                }
            }
        }
    }
    
    jump() {
        if (this.onGround) {
            this.velocityY = JUMP_STRENGTH;
        }
    }
    
    draw(screen) {
        strata.draw.rect(screen, BLUE, this.rect);
    }
}

class Platform {
    constructor(x, y, width, height) {
        this.rect = new strata.Rect(x, y, width, height);
    }
    
    draw(screen) {
        strata.draw.rect(screen, GREEN, this.rect);
    }
}

class Goal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 30;
        this.rect = new strata.Rect(x - this.size / 2, y - this.size / 2, this.size, this.size);
        this.collected = false;
    }
    
    checkCollision(player) {
        if (!this.collected && this.rect.colliderect(player.rect)) {
            this.collected = true;
            return true;
        }
        return false;
    }
    
    draw(screen) {
        if (!this.collected) {
            strata.draw.circle(screen, YELLOW, [Math.floor(this.x), Math.floor(this.y)], this.size / 2);
        }
    }
}

// Create game objects
const player = new Player();
const platforms = [
    new Platform(0, 500, 800, 100),  // Ground
    new Platform(200, 400, 100, 20), // Platform 1
    new Platform(400, 320, 100, 20), // Platform 2
    new Platform(600, 240, 100, 20)  // Platform 3
];
const goal = new Goal(640, 200);

// Game state
let isRunning = true;
let isGameWon = false;

// Main game loop
while (isRunning) {
    const events = strata.event.get();
    for (let event of events) {
        if (event.type === strata.QUIT) isRunning = false;
        if (event.type === strata.KEYDOWN && event.key === strata.K_SPACE) {
            player.jump();
        }
    }
    
    // Handle continuous input
    const keys = strata.key.getPressed();
    player.velocityX = 0;
    if (keys[strata.K_LEFT]) player.velocityX = -5;
    if (keys[strata.K_RIGHT]) player.velocityX = 5;
    
    // Update
    if (!isGameWon) {
        player.update(platforms);
        if (goal.checkCollision(player)) {
            isGameWon = true;
        }
    }
    
    // Draw
    screen.fill(SKY_BLUE);
    for (let platform of platforms) platform.draw(screen);
    goal.draw(screen);
    player.draw(screen);
    
    strata.display.flip();
    clock.tick(FPS);
}`
};