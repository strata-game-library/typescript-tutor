# AGENTS.md

Comprehensive instructions for AI agents working with the Strata TypeScript Tutor repository.

## Project Overview

**Strata TypeScript Tutor** is an interactive educational platform that teaches TypeScript through building creative projects with the [@jbcom/strata](https://www.npmjs.com/package/@jbcom/strata) 3D graphics library.

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: shadcn/ui + Radix UI + Tailwind CSS
- **Backend**: Express.js + TypeScript
- **Code Editor**: Monaco Editor
- **Testing**: Vitest + Playwright
- **Linting**: Biome
- **Package Manager**: pnpm

## Agent Types

| Agent | Best For | Context File |
|-------|----------|--------------|
| **Claude** | Complex reasoning, architecture, cross-repo work | `CLAUDE.md` |
| **Copilot** | Issue kickoffs, targeted fixes, code generation | `.github/copilot-instructions.md` |
| **Cursor** | IDE-integrated development | `.cursor/rules/*.mdc` |

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type checking
pnpm check

# Linting and formatting
pnpm lint
pnpm lint:fix
pnpm format

# Testing
pnpm test
pnpm test:watch
pnpm test:coverage
pnpm test:e2e

# Build for production
pnpm build
```

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and game logic
│   │   ├── pages/          # Page components
│   │   └── types/          # TypeScript type definitions
├── server/                 # Express backend
├── shared/                 # Shared types and schemas
├── public/                 # Static assets
│   ├── api/static/         # Lesson data (lessons.json)
│   ├── dialogue/           # Yarn Spinner dialogue files
│   └── assets/             # Game sprites and sounds
├── tests/                  # Test files
│   ├── e2e/                # Playwright E2E tests
│   └── *.test.ts           # Unit tests
├── docs/                   # Documentation
├── biome.json              # Biome configuration
└── package.json            # Project configuration
```

## Before Starting Any Task

### 1. Check Context
```bash
# Current focus and recent decisions
cat memory-bank/activeContext.md 2>/dev/null || echo "No memory bank"

# Recent commits show coding patterns
git log --oneline -10
```

### 2. Understand the Request
- Read the issue/PR description completely
- Check for linked issues or PRs
- Look for acceptance criteria

### 3. Verify Clean State
```bash
pnpm check   # TypeScript compiles
pnpm lint    # Biome passes
pnpm test    # Tests pass
```

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- `feat`: New feature (minor version bump)
- `fix`: Bug fix (patch version bump)
- `docs`: Documentation only
- `style`: Formatting, no code change
- `refactor`: Code restructure, no behavior change
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

### Examples
```bash
git commit -m "feat(lessons): add TypeScript generics lesson"
git commit -m "fix(wizard): handle null game type correctly"
git commit -m "docs: update API reference for Strata components"
```

## Code Style Guidelines

### TypeScript
- Use strict mode (`strict: true` in tsconfig)
- Prefer `interface` over `type` for object shapes
- Use `unknown` instead of `any` where possible
- Prefer named exports over default exports

### React
- Use functional components with hooks
- Prefer composition over inheritance
- Use proper TypeScript types for props and state

### Imports (Biome handles this)
```typescript
// Types first with 'type' keyword
import type { ComponentProps, ReactNode } from 'react';

// External packages
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Internal absolute imports
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Relative imports last
import { helper } from './utils';
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `public/api/static/lessons.json` | Educational lesson content |
| `public/dialogue/pixel/*.yarn` | Mascot dialogue files |
| `client/src/components/wizard-*.tsx` | Wizard flow components |
| `client/src/lib/persistence.ts` | State persistence |
| `shared/schema.ts` | Shared TypeScript types |

## What NOT To Do

- ❌ Don't use npm (use pnpm)
- ❌ Don't use ESLint/Prettier (use Biome)
- ❌ Don't make unrelated changes
- ❌ Don't skip type checking
- ❌ Don't commit without meaningful message
- ❌ Don't push directly to main (use PRs)
- ❌ Don't add dependencies without justification
- ❌ Don't use `any` type unless absolutely necessary

## Strata Library Integration

The [@jbcom/strata](https://www.npmjs.com/package/@jbcom/strata) library provides:

- **Terrain Generation**: Procedural landscapes with GPU-accelerated rendering
- **Water Effects**: Realistic water with reflections and refractions
- **Vegetation**: Procedural grass, trees, and foliage
- **Sky/Atmosphere**: Dynamic sky systems
- **Volumetrics**: Fog, clouds, and atmospheric effects
- **Character Animation**: Procedural character systems

Lessons should teach TypeScript concepts through building projects with these features.

## Repository-Specific Instructions

### Updating Lessons
1. Edit `public/api/static/lessons.json`
2. Ensure code examples use TypeScript with proper types
3. Include working code that compiles
4. Test in the Monaco editor environment

### Updating Dialogue
1. Edit `.yarn` files in `public/dialogue/pixel/`
2. Follow Yarn Spinner syntax
3. Use TypeScript/Strata terminology (not Python/Pygame)
4. Test dialogue flow in the wizard

### Adding New Features
1. Create TypeScript files with proper types
2. Add unit tests in `*.test.ts` files
3. Update relevant documentation
4. Ensure all checks pass before committing
