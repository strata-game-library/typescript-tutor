# Quick Start

Build your first TypeScript project in minutes!

## Your First TypeScript Code

Let's start with the basics—declaring typed variables:

```typescript
// TypeScript adds types to JavaScript
const playerName: string = "Hero";
const health: number = 100;
const isAlive: boolean = true;

console.log(`${playerName} has ${health} HP`);
```

Notice how each variable has a type annotation (`: string`, `: number`, `: boolean`). TypeScript uses these to catch errors before your code runs!

## Creating a Simple Class

Classes are blueprints for creating objects:

```typescript
class Player {
  name: string;
  health: number;
  
  constructor(name: string) {
    this.name = name;
    this.health = 100;
  }
  
  takeDamage(amount: number): void {
    this.health -= amount;
    console.log(`${this.name} took ${amount} damage!`);
  }
  
  isAlive(): boolean {
    return this.health > 0;
  }
}

const hero = new Player("Hero");
hero.takeDamage(25);
console.log(`Health: ${hero.health}`); // 75
```

## Working with Interfaces

Interfaces define the shape of objects:

```typescript
interface Position {
  x: number;
  y: number;
}

interface Entity {
  id: string;
  name: string;
  position: Position;
  move(dx: number, dy: number): void;
}

const enemy: Entity = {
  id: "enemy-1",
  name: "Goblin",
  position: { x: 0, y: 0 },
  move(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
  }
};
```

## Building with Strata

The Strata library makes 3D graphics easy. Here's a simple terrain:

```typescript
import { Canvas } from '@react-three/fiber';
import { Terrain, Water, Sky } from '@jbcom/strata/components';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 50, 100] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      
      {/* Procedural terrain */}
      <Terrain
        size={200}
        resolution={128}
        maxHeight={20}
        seed={42}
      />
      
      {/* Water plane */}
      <Water
        size={200}
        position={[0, 5, 0]}
      />
      
      {/* Dynamic sky */}
      <Sky
        turbidity={10}
        rayleigh={2}
      />
    </Canvas>
  );
}

export default Scene;
```

## Using Generics

Generics let you write reusable code:

```typescript
// A generic container that works with any type
class Container<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  getAll(): T[] {
    return [...this.items];
  }
  
  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}

// Use with different types
const inventory = new Container<string>();
inventory.add("Sword");
inventory.add("Shield");

const scores = new Container<number>();
scores.add(100);
scores.add(250);
```

## Async/Await with TypeScript

Handle asynchronous operations cleanly:

```typescript
interface UserData {
  id: string;
  name: string;
  level: number;
}

async function loadUser(userId: string): Promise<UserData> {
  const response = await fetch(`/api/users/${userId}`);
  
  if (!response.ok) {
    throw new Error(`Failed to load user: ${response.statusText}`);
  }
  
  return response.json();
}

// Usage
async function main() {
  try {
    const user = await loadUser("user-123");
    console.log(`Welcome back, ${user.name}!`);
  } catch (error) {
    console.error("Could not load user:", error);
  }
}
```

## Next Steps

Now that you've seen the basics, try:

1. **Start the interactive lessons** - Launch the tutor and follow Pixel through the curriculum
2. **Experiment in the playground** - Try modifying the examples above
3. **Build a project** - Apply what you've learned to create something unique

### Recommended Learning Path

1. **Lesson 1**: TypeScript Basics - Variables, types, and expressions
2. **Lesson 2**: Functions - Parameters, return types, and arrow functions
3. **Lesson 3**: Arrays - Collections and iteration
4. **Lesson 4**: Classes - Object-oriented programming
5. **Lesson 5**: Building Projects - Put it all together

Happy coding! 🚀
