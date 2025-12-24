/**
 * Strata Game Engine - Mock Implementation for Educational Purposes
 * Provides the classes and interfaces referenced in the TypeScript lessons.
 */

export class Vector2 {
  constructor(public x: number = 0, public y: number = 0) {}

  add(v: Vector2): Vector2 {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  scale(s: number): Vector2 {
    this.x *= s;
    this.y *= s;
    return this;
  }

  normalize(): Vector2 {
    const len = Math.sqrt(this.x * this.x + this.y * this.y);
    if (len > 0) {
      this.x /= len;
      this.y /= len;
    }
    return this;
  }

  distanceTo(v: Vector2): number {
    return Math.sqrt((this.x - v.x) ** 2 + (this.y - v.y) ** 2);
  }

  angleTo(v: Vector2): number {
    return Math.atan2(v.y - this.y, v.x - this.x);
  }
}

export interface SpriteConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  color?: string;
  texture?: string;
}

export class Sprite {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public color: string;
  public texture?: string;
  public components: any[] = [];

  constructor(config: SpriteConfig = {}) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 32;
    this.height = config.height || 32;
    this.color = config.color || '#ff00ff';
    this.texture = config.texture;
  }

  addComponent(component: any): void {
    this.components.push(component);
  }

  collidesWith(other: Sprite): boolean {
    return (
      this.x < other.x + other.width &&
      this.x + this.width > other.x &&
      this.y < other.y + other.height &&
      this.y + this.height > other.y
    );
  }

  takeDamage(amount: number): void {
    console.log(`Sprite took ${amount} damage`);
  }
}

export interface GameConfig {
  width: number;
  height: number;
  title?: string;
  backgroundColor?: string;
}

export class Game {
  public width: number;
  public height: number;
  public title: string;
  public backgroundColor: string;
  private updateCallbacks: ((dt: number) => void)[] = [];
  private renderCallbacks: ((ctx: CanvasRenderingContext2D) => void)[] = [];
  private keysDown: Set<string> = new Set();

  constructor(config: GameConfig) {
    this.width = config.width;
    this.height = config.height;
    this.title = config.title || 'Strata Game';
    this.backgroundColor = config.backgroundColor || '#000000';

    // Mock keyboard listeners
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => this.keysDown.add(e.key));
      window.addEventListener('keyup', (e) => this.keysDown.delete(e.key));
    }
  }

  onUpdate(callback: (dt: number) => void): void {
    this.updateCallbacks.push(callback);
  }

  onRender(callback: (ctx: CanvasRenderingContext2D) => void): void {
    this.renderCallbacks.push(callback);
  }

  isKeyDown(key: string): boolean {
    return this.keysDown.has(key);
  }

  addSprite(sprite: Sprite): void {
    console.log('Sprite added to game');
  }

  removeSprite(sprite: Sprite): void {
    console.log('Sprite removed from game');
  }

  start(): void {
    console.log(`Game "${this.title}" started!`);
  }

  gameOver(): void {
    console.log('Game Over!');
  }
}

// Components
export class Gravity {
  constructor(public config: { strength: number; terminal: number }) {}
}

export class PlatformerMovement {
  constructor(public config: { speed: number; jumpPower: number; keys: any }) {}
}

export class TopDownMovement {
  constructor(public config: { speed: number; keys: any }) {}
}

export class Health {
  constructor(public config: { max: number; current: number; onDeath: () => void }) {}
}

// Audio
export class Sound {
  constructor(public path: string) {}
  play(config?: { volume: number }): void {
    console.log(`Playing sound: ${this.path}`);
  }
}

export class Music {
  constructor(public path: string) {}
  play(config?: { loop: boolean; volume: number }): void {
    console.log(`Playing music: ${this.path}`);
  }
  pause(): void {}
  resume(): void {}
  stop(): void {}
}

// Scene Management
export class Scene {
  public manager!: SceneManager;
  onEnter(): void {}
  onUpdate(dt: number): void {}
  onExit(): void {}
}

export class SceneManager {
  private scenes: Map<string, Scene> = new Map();
  private currentScene: Scene | null = null;

  constructor(public game: Game) {}

  register(name: string, scene: Scene): void {
    scene.manager = this;
    this.scenes.set(name, scene);
  }

  switchTo(name: string): void {
    const scene = this.scenes.get(name);
    if (scene) {
      if (this.currentScene) this.currentScene.onExit();
      this.currentScene = scene;
      this.currentScene.onEnter();
      console.log(`Switched to scene: ${name}`);
    }
  }
}
