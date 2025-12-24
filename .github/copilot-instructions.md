# Strata TypeScript Tutor - Copilot Instructions

## Project Overview

This is an educational platform teaching TypeScript through interactive projects using the [@jbcom/strata](https://www.npmjs.com/package/@jbcom/strata) 3D graphics library.

## Quick Reference

### Package Manager: pnpm
```bash
# Install dependencies
pnpm install

# Add a new dependency
pnpm add <package>

# Add dev dependency
pnpm add -D <package>
```

### Linting: Biome (NOT ESLint/Prettier)
```bash
# Check for issues
pnpm lint

# Fix issues automatically
pnpm lint:fix

# Format code
pnpm format
```

### TypeScript
```bash
# Type check
pnpm check

# Build
pnpm build
```

### Testing
```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

## Code Patterns

### TypeScript Best Practices

```typescript
// Use interfaces for object types
interface UserProgress {
  readonly id: string;
  lessonId: string;
  completed: boolean;
  currentStep: number;
}

// Use type for unions/aliases
type LessonStatus = 'pending' | 'in_progress' | 'completed';

// Prefer unknown over any
function processData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  }
}

// Use const assertions for literals
const GAME_TYPES = ['platformer', 'rpg', 'puzzle'] as const;
type GameType = (typeof GAME_TYPES)[number];
```

### React Component Pattern

```typescript
import type { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={cn('btn', variant === 'primary' && 'btn-primary')}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Async Pattern

```typescript
// Prefer async/await
async function fetchLesson(id: string): Promise<Lesson | undefined> {
  try {
    const response = await fetch(`/api/lessons/${id}`);
    if (!response.ok) {
      return undefined;
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch lesson:', error);
    return undefined;
  }
}
```

### Testing Pattern

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('LessonManager', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should load lesson by id', async () => {
    const lesson = await lessonManager.getLesson('lesson-1');
    expect(lesson).toBeDefined();
    expect(lesson?.id).toBe('lesson-1');
  });
});
```

## Project Structure

```
├── client/src/
│   ├── components/     # React components (shadcn/ui based)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Route pages
│   └── types/          # TypeScript declarations
├── server/             # Express.js backend
├── shared/             # Shared schemas/types
├── public/
│   ├── api/static/     # lessons.json
│   └── dialogue/       # Yarn Spinner files
└── tests/              # Test files
```

## Key Configuration Files

| File | Purpose |
|------|---------|
| `biome.json` | Linting and formatting |
| `tsconfig.json` | TypeScript configuration |
| `vite.config.ts` | Vite build configuration |
| `vitest.config.ts` | Test configuration |

## Strata Library (@jbcom/strata)

The Strata library is a procedural 3D graphics library for React Three Fiber.

### Key Exports

```typescript
// Main components
import { Terrain, Water, Vegetation, Sky } from '@jbcom/strata/components';

// Shader utilities
import { noise, gradient } from '@jbcom/strata/shaders';

// Helper utilities
import { createTerrainMesh } from '@jbcom/strata/utils';

// Preset configurations
import { forestPreset, desertPreset } from '@jbcom/strata/presets';
```

### Usage in Lessons

Lessons teach TypeScript through building 3D scenes:

```typescript
import { Canvas } from '@react-three/fiber';
import { Terrain, Water } from '@jbcom/strata/components';

function Scene() {
  return (
    <Canvas>
      <Terrain 
        size={100}
        resolution={128}
        maxHeight={10}
      />
      <Water 
        position={[0, 2, 0]}
        size={100}
      />
    </Canvas>
  );
}
```

## Common Tasks

### Adding a New Lesson

1. Edit `public/api/static/lessons.json`
2. Add lesson object with steps
3. Ensure code examples use TypeScript
4. Test in the editor

### Updating Dialogue

1. Edit files in `public/dialogue/pixel/`
2. Use Yarn Spinner syntax
3. Reference TypeScript/Strata concepts

### Adding Components

1. Create in `client/src/components/`
2. Use shadcn/ui patterns
3. Add proper TypeScript types
4. Export from index if needed

## Don't Do

- ❌ Use npm (use pnpm)
- ❌ Use ESLint/Prettier (use Biome)  
- ❌ Use `any` type (use `unknown`)
- ❌ Skip type checking
- ❌ Reference Python/Pygame (use TypeScript/Strata)
