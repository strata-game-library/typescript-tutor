# Contributing

Thank you for your interest in contributing to Strata TypeScript Tutor!

## Development Setup

### Prerequisites

- Node.js 20.x or later
- pnpm 9.x or later

### Getting Started

```bash
# Clone the repository
git clone https://github.com/jbcom/strata.git
cd strata/typescript-tutor

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Code Standards

### TypeScript

We use strict TypeScript. Follow these guidelines:

```typescript
// ✅ Good: Use explicit types for function parameters
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// ✅ Good: Use interfaces for object shapes
interface User {
  id: string;
  name: string;
  email?: string;
}

// ✅ Good: Use unknown instead of any
function processData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  }
}

// ❌ Bad: Avoid any
function badExample(data: any): any {
  return data;
}
```

### Linting & Formatting

We use **Biome** (not ESLint/Prettier):

```bash
# Check for issues
pnpm lint

# Auto-fix issues
pnpm lint:fix

# Format code
pnpm format
```

### Testing

We use **Vitest** for unit tests and **Playwright** for E2E tests:

```bash
# Run unit tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e
```

## Project Structure

```
├── client/src/
│   ├── components/     # React components
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities
│   ├── pages/          # Route pages
│   └── types/          # Type definitions
├── server/             # Express backend
├── shared/             # Shared types
├── public/
│   ├── api/static/     # Lesson data
│   └── dialogue/       # Yarn dialogue
└── tests/              # Test files
```

## Adding New Lessons

Lessons are defined in `public/api/static/lessons.json`:

```json
{
  "id": "lesson-6",
  "title": "Advanced Types",
  "description": "Master TypeScript's type system",
  "order": 6,
  "content": {
    "introduction": "Let's explore advanced type features...",
    "steps": [
      {
        "id": "step-1",
        "title": "Union Types",
        "description": "Combine multiple types",
        "initialCode": "// Your starting code",
        "solution": "// The solution",
        "hints": ["Hint 1", "Hint 2"]
      }
    ]
  }
}
```

### Lesson Guidelines

1. **Progressive Complexity**: Start simple, build up
2. **Working Examples**: All code must compile
3. **Clear Explanations**: Avoid jargon
4. **Practical Applications**: Show real-world usage

## Updating Dialogue

Dialogue files use [Yarn Spinner](https://yarnspinner.dev/) format:

```yarn
title: Welcome
---
Pixel: Welcome to TypeScript Tutor! 🎮
Pixel: I'm Pixel, your guide on this journey.
-> Start learning!
    <<jump FirstLesson>>
-> Tell me more about TypeScript
    <<jump AboutTypeScript>>
===
```

### Dialogue Guidelines

1. Keep Pixel friendly and encouraging
2. Use TypeScript/Strata terminology
3. Avoid Python/Pygame references
4. Test dialogue flow thoroughly

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Feature
git commit -m "feat(lessons): add generics tutorial"

# Bug fix
git commit -m "fix(wizard): handle null game type"

# Documentation
git commit -m "docs: update API reference"

# Refactor
git commit -m "refactor(components): simplify wizard logic"
```

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes
4. Run all checks: `pnpm check && pnpm lint && pnpm test`
5. Commit with conventional commit message
6. Push and create a Pull Request

### PR Checklist

- [ ] TypeScript compiles (`pnpm check`)
- [ ] Biome passes (`pnpm lint`)
- [ ] Tests pass (`pnpm test`)
- [ ] Documentation updated if needed
- [ ] No console.log statements
- [ ] No `any` types

## Getting Help

- **Issues**: [GitHub Issues](https://github.com/jbcom/strata/issues)
- **Discussions**: [GitHub Discussions](https://github.com/jbcom/strata/discussions)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
