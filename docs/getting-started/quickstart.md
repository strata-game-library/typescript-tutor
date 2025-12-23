# Quickstart

Create your first TypeScript game in 5 minutes!

## Your First Game: Bouncing Ball

Let's create a simple bouncing ball game to learn the basics.

### Step 1: Start the Tutorial

Launch the Strata TypeScript Tutor and meet Pixel, your guide. Pixel will walk you through the interface and help you choose what to build.

### Step 2: Understand the Code

Here's a simple bouncing ball in TypeScript with Strata:

```typescript
// Import Strata game engine
import { Game, Sprite, Vector2 } from '@strata/engine';

// Create a new game
const game = new Game({
  width: 800,
  height: 600,
  title: 'My First Game'
});

// Create a ball sprite
const ball = new Sprite({
  x: 400,
  y: 300,
  radius: 20,
  color: '#FF6B6B'
});

// Ball velocity
let velocity = new Vector2(5, 3);

// Game update loop
game.onUpdate(() => {
  // Move the ball
  ball.x += velocity.x;
  ball.y += velocity.y;
  
  // Bounce off walls
  if (ball.x <= 20 || ball.x >= 780) {
    velocity.x *= -1;
  }
  if (ball.y <= 20 || ball.y >= 580) {
    velocity.y *= -1;
  }
});

// Start the game!
game.start();
```

### Step 3: Key Concepts Learned

From this simple example, you've learned:

- **Variables**: `velocity` stores the ball's direction and speed
- **Types**: TypeScript knows `velocity` is a `Vector2`
- **Functions**: `game.onUpdate()` runs every frame
- **Conditionals**: `if` statements detect wall collisions

## Building Different Game Types

### Platformer Basics

```typescript
// Player with gravity and jumping
const player = new Player({
  x: 100,
  y: 400,
  controls: 'wasd' // Built-in keyboard support
});

// Add gravity
player.addComponent(new Gravity({ strength: 0.5 }));

// Add jump ability
player.addComponent(new Jump({ 
  power: 12,
  key: 'space'
}));
```

### RPG Character

```typescript
// Create an RPG character with stats
const hero = new Character({
  name: 'Adventurer',
  sprite: 'hero_idle',
  stats: {
    health: 100,
    mana: 50,
    attack: 15,
    defense: 10
  }
});

// Add movement
hero.addComponent(new TopDownMovement({ speed: 200 }));
```

### Space Shooter

```typescript
// Spaceship with shooting
const ship = new Ship({
  x: 400,
  y: 500,
  sprite: 'spaceship'
});

// Shooting on spacebar
game.onKeyPress('space', () => {
  const bullet = new Bullet({
    x: ship.x,
    y: ship.y - 20,
    velocity: new Vector2(0, -10)
  });
  game.addSprite(bullet);
});
```

## TypeScript Features You'll Learn

### 1. Type Annotations

```typescript
// TypeScript knows these types
let score: number = 0;
let playerName: string = 'Hero';
let isPlaying: boolean = true;
```

### 2. Interfaces

```typescript
// Define the shape of game objects
interface Enemy {
  x: number;
  y: number;
  health: number;
  attack(): void;
}
```

### 3. Classes

```typescript
// Object-oriented game entities
class Player extends Sprite {
  health: number = 100;
  
  takeDamage(amount: number) {
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }
}
```

### 4. Generics

```typescript
// Flexible, type-safe collections
const inventory = new Inventory<Item>();
inventory.add(new Sword());
inventory.add(new Potion());
```

## What's Next?

1. **Explore Lessons**: Work through the interactive lessons with Pixel
2. **Build Projects**: Create complete games using templates
3. **Customize**: Make games unique with your own sprites and logic
4. **Share**: Export and share your creations

## Resources

- [Strata Engine API](../api/index.rst) - Full API reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Official TypeScript docs
- [Contributing](../development/contributing.md) - Help improve the tutor

Happy coding! 🎮
