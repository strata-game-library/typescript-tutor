// PyGame Pong Template
import { GameTemplate } from './pygame-template-types';

export const pongTemplate: GameTemplate = {
  id: 'pong',
  name: 'Pong',
  description: 'Classic two-paddle game with bouncing ball and score tracking',
  wizardDescription: 'The classic Pong game! Two paddles hit a ball back and forth. First to 5 points wins! A great way to learn about ball physics and AI opponents.',
  difficulty: 'beginner',
  settings: {
    screenWidth: 800,
    screenHeight: 600,
    backgroundColor: '#000000',
    fps: 60,
    title: 'Pong Game'
  },
  components: [
    {
      type: 'paddle',
      id: 'player1',
      properties: {
        x: 50,
        y: 250,
        width: 15,
        height: 100,
        speed: 7,
        color: '#FFFFFF',
        playerControlled: true,
        controls: 'wasd'
      }
    },
    {
      type: 'paddle',
      id: 'player2',
      properties: {
        x: 735,
        y: 250,
        width: 15,
        height: 100,
        speed: 7,
        color: '#FFFFFF',
        playerControlled: true,
        controls: 'arrows'
      }
    },
    {
      type: 'ball',
      id: 'ball',
      properties: {
        x: 400,
        y: 300,
        radius: 10,
        velocityX: 5,
        velocityY: 3,
        color: '#FFFFFF',
        gravity: 0,
        bounciness: 1.05
      }
    },
    {
      type: 'scoreText',
      id: 'score1',
      properties: {
        text: '0',
        x: 350,
        y: 50,
        fontSize: 48,
        color: '#FFFFFF'
      }
    },
    {
      type: 'scoreText',
      id: 'score2',
      properties: {
        text: '0',
        x: 430,
        y: 50,
        fontSize: 48,
        color: '#FFFFFF'
      }
    }
  ],
  preview: (ctx: CanvasRenderingContext2D) => {
    // Black background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Center line
    ctx.strokeStyle = '#FFFFFF';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Paddles
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(40, 200, 12, 80);
    ctx.fillRect(ctx.canvas.width - 52, 200, 12, 80);
    
    // Ball
    ctx.beginPath();
    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // Scores
    ctx.font = '36px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('0', ctx.canvas.width / 2 - 50, 50);
    ctx.fillText('0', ctx.canvas.width / 2 + 50, 50);
  },
  generateCode: () => `import { strata } from 'strata';

// Initialize Strata
strata.init();

// Game settings
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const FPS = 60;
const PADDLE_SPEED = 7;
const BALL_SPEED = 5;
const WINNING_SCORE = 5;

// Colors
const BLACK = [0, 0, 0];
const WHITE = [255, 255, 255];

// Create the screen
const screen = strata.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
strata.display.setCaption('Pong Game');
const clock = new strata.time.Clock();

class Paddle {
    constructor(x, y, controls = 'arrows') {
        this.width = 15;
        this.height = 100;
        this.speed = PADDLE_SPEED;
        this.rect = new strata.Rect(x, y, this.width, this.height);
        this.controls = controls;
        this.score = 0;
    }
    
    update(keys) {
        if (this.controls === 'wasd') {
            if (keys[strata.K_w] && this.rect.top > 0) {
                this.rect.y -= this.speed;
            }
            if (keys[strata.K_s] && this.rect.bottom < SCREEN_HEIGHT) {
                this.rect.y += this.speed;
            }
        } else if (this.controls === 'arrows') {
            if (keys[strata.K_UP] && this.rect.top > 0) {
                this.rect.y -= this.speed;
            }
            if (keys[strata.K_DOWN] && this.rect.bottom < SCREEN_HEIGHT) {
                this.rect.y += this.speed;
            }
        }
    }
    
    draw(screen) {
        strata.draw.rect(screen, WHITE, this.rect);
    }
}

class Ball {
    constructor() {
        this.reset();
    }
    
    reset() {
        const x = SCREEN_WIDTH / 2;
        const y = SCREEN_HEIGHT / 2;
        this.radius = 10;
        this.velocityX = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
        this.velocityY = BALL_SPEED * (Math.random() > 0.5 ? 1 : -1);
        this.rect = new strata.Rect(x - this.radius, y - this.radius, this.radius * 2, this.radius * 2);
    }
    
    update(paddle1, paddle2) {
        // Move ball
        this.rect.x += this.velocityX;
        this.rect.y += this.velocityY;
        
        // Bounce off top and bottom walls
        if (this.rect.top <= 0 || this.rect.bottom >= SCREEN_HEIGHT) {
            this.velocityY *= -1;
        }
        
        // Check paddle collisions
        if (this.rect.colliderect(paddle1.rect) && this.velocityX < 0) {
            this.velocityX *= -1.05; // Speed up slightly on hit
        } else if (this.rect.colliderect(paddle2.rect) && this.velocityX > 0) {
            this.velocityX *= -1.05;
        }
        
        // Score points
        if (this.rect.left <= 0) {
            paddle2.score++;
            this.reset();
            return 'score2';
        } else if (this.rect.right >= SCREEN_WIDTH) {
            paddle1.score++;
            this.reset();
            return 'score1';
        }
        
        return null;
    }
    
    draw(screen) {
        strata.draw.circle(screen, WHITE, [Math.floor(this.rect.centerx), Math.floor(this.rect.centery)], this.radius);
    }
}

// Create game objects
const paddle1 = new Paddle(50, SCREEN_HEIGHT / 2 - 50, 'wasd');
const paddle2 = new Paddle(SCREEN_WIDTH - 65, SCREEN_HEIGHT / 2 - 50, 'arrows');
const ball = new Ball();

// Game state
let isRunning = true;
let isGameOver = false;
let winner = null;

// Main game loop
while (isRunning) {
    const events = strata.event.get();
    for (let event of events) {
        if (event.type === strata.QUIT) isRunning = false;
    }
    
    // Update
    if (!isGameOver) {
        const keys = strata.key.getPressed();
        paddle1.update(keys);
        paddle2.update(keys);
        
        ball.update(paddle1, paddle2);
        
        // Check for winner
        if (paddle1.score >= WINNING_SCORE) {
            isGameOver = true;
            winner = "Player 1";
        } else if (paddle2.score >= WINNING_SCORE) {
            isGameOver = true;
            winner = "Player 2";
        }
    }
    
    // Draw
    screen.fill(BLACK);
    
    // Draw center line
    for (let y = 0; y < SCREEN_HEIGHT; y += 20) {
        strata.draw.rect(screen, WHITE, [SCREEN_WIDTH / 2 - 2, y, 4, 10]);
    }
    
    // Draw game objects
    paddle1.draw(screen);
    paddle2.draw(screen);
    ball.draw(screen);
    
    strata.display.flip();
    clock.tick(FPS);
}`
};