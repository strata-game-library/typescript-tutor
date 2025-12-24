# Installation

Get started with Strata TypeScript Tutor in just a few minutes.

## Prerequisites

- **Node.js** 20.x or later
- **pnpm** 9.x or later (recommended)

### Installing pnpm

```bash
npm install -g pnpm
```

## Quick Start (Online)

Visit [typescript-tutor.strata.dev](https://typescript-tutor.strata.dev) to start learning immediately—no installation required!

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/jbcom/strata.git
cd strata/typescript-tutor
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start the Development Server

```bash
pnpm dev
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

## Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm start` | Run production server |
| `pnpm check` | TypeScript type checking |
| `pnpm lint` | Run Biome linter |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm format` | Format code with Biome |
| `pnpm test` | Run unit tests |
| `pnpm test:e2e` | Run end-to-end tests |

## Project Structure

```
typescript-tutor/
├── client/               # React frontend
│   └── src/
│       ├── components/   # UI components
│       ├── hooks/        # Custom hooks
│       ├── lib/          # Utilities
│       └── pages/        # Page components
├── server/               # Express backend
├── shared/               # Shared types
├── public/               # Static assets
│   ├── api/static/       # Lesson data
│   ├── dialogue/         # Mascot dialogue
│   └── assets/           # Sprites and sounds
├── tests/                # Test files
└── docs/                 # Documentation
```

## What's Included

### Monaco Editor
The same code editor that powers VS Code, with full TypeScript support including:
- Syntax highlighting
- Autocomplete
- Error detection
- IntelliSense

### Strata Integration
The [@jbcom/strata](https://www.npmjs.com/package/@jbcom/strata) library provides:
- Procedural terrain generation
- Water and reflection effects
- Vegetation systems
- Atmospheric effects

### Interactive Lessons
Five progressive lessons covering:
1. TypeScript Basics
2. Functions & Logic
3. Arrays & Collections
4. Classes & Objects
5. Building Complete Projects

## Next Steps

- Continue to the [Quick Start Guide](./quickstart.md) to build your first project
- Explore the [API Reference](../api/) for detailed documentation
