# Strata TypeScript Tutor

> **Part of the [Strata](https://github.com/jbcom/strata) ecosystem**

## Overview

Strata TypeScript Tutor is a conversational, mascot-driven React application that teaches TypeScript game development through interactive guided experiences. The platform features "Pixel," a friendly cyberpunk mascot who guides users through organic conversational experiences with natural A/B choices, offering both a guided wizard flow for beginners and a professional code editor for advanced users.

The guided mode provides continuous linear progression where Pixel leads users through pre-built game components for Title Screen → Gameplay → End Credits, with game-type-specific content that adapts to the selected genre (platformer, RPG, dungeon crawler, racing, puzzle, space shooter).

## Educational Philosophy

- **Learn by Doing**: Build real games while learning TypeScript concepts
- **Type Safety First**: Understand why types matter through practical examples
- **Progressive Complexity**: Start simple, unlock advanced features naturally
- **Strata Integration**: Learn to leverage the Strata game engine for rapid development
- **No Gatekeeping**: All lessons available immediately - learn at your own pace

## User Experience

- **Communication Style**: Friendly, encouraging language without condescension
- **Visual Design**: Warm, soft colors with dark mode support
- **Accessibility**: Keyboard navigation, screen reader support
- **Layout**: Efficient use of space with responsive design

## System Architecture

### Frontend Architecture

The frontend is a React single-page application using TypeScript:

- **React Router**: Uses `wouter` for lightweight client-side routing
- **State Management**: React Query (`@tanstack/react-query`) for server state, local state for UI
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Code Editor**: Monaco Editor for TypeScript editing with full IntelliSense
- **Build System**: Vite for fast development and optimized production builds

### Backend Architecture

The server follows a REST API pattern with Express.js:

- **Framework**: Express.js with TypeScript
- **Data Storage**: In-memory storage with interface abstraction for easy database migration
- **API Design**: RESTful endpoints for lessons and user progress
- **Static Files**: Serves lessons, dialogue, and game assets

### Code Execution System

TypeScript code runs directly in the browser:

- **Native Execution**: TypeScript compiles to JavaScript and runs in the browser
- **Live Preview**: Real-time game canvas rendering
- **Strata Engine**: Full game development capabilities
- **Safety**: Client-side execution with sandboxed canvas

### Data Model

- **Users**: Basic user preferences and progress
- **Lessons**: Structured content with steps, code examples, and solutions
- **UserProgress**: Tracks completion status, current step, and user code

### Component Architecture

- **Layout Components**: Header, sidebar navigation, responsive layouts
- **Interactive Components**: Code editor, game canvas, feedback system
- **UI Components**: Comprehensive shadcn/ui component library
- **Wizard Components**: Dialogue engine, option handlers, avatar display

## Tech Stack

### Core Framework
- **React 18**: Modern hooks and concurrent features
- **Express.js**: Backend web framework
- **TypeScript**: Full type safety throughout

### UI and Styling
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Accessible component library
- **Radix UI**: Headless UI primitives
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Build tool with HMR
- **Monaco Editor**: VS Code's editor in the browser
- **ESLint + Prettier**: Code quality

### State Management
- **TanStack Query**: Server state with caching
- **React Hook Form**: Form management
- **Zod**: Runtime type validation

## What Makes This Special

### TypeScript-First Learning

Unlike tutorials that teach "JavaScript with types bolted on," we teach TypeScript as a first-class language, emphasizing:

- Type inference and when to annotate
- Interfaces and type aliases
- Generics for flexible, reusable code
- Union types and discriminated unions

### Strata Engine Integration

Students learn to use the Strata game engine for:

- **Sprites & Animation**: Character and object management
- **Physics**: Gravity, collision, velocity
- **Input**: Keyboard, mouse, gamepad support
- **Audio**: Sound effects and music
- **Scenes**: Game state management

### Game Types Supported

1. **Platformer**: Jump physics, platforms, collectibles
2. **RPG**: Stats, inventory, turn-based combat
3. **Dungeon Crawler**: Procedural generation, fog of war
4. **Racing**: Vehicle physics, tracks, checkpoints
5. **Puzzle**: Match-3, Tetris-style, logic puzzles
6. **Space Shooter**: Asteroids-style action, waves, powerups

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run check

# Build for production
npm run build
```

## Project Structure

```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities and game logic
│   │   └── pages/        # Page components
├── server/           # Express backend
├── public/           # Static assets
│   ├── api/static/   # Lesson data
│   ├── dialogue/     # Pixel dialogue files
│   └── assets/       # Game sprites and sounds
├── docs/             # Documentation
└── tests/            # Test files
```

## Contributing

See [CONTRIBUTING.md](docs/development/contributing.md) for guidelines.

## License

MIT License - Part of the Strata project by Jon Bogaty.
