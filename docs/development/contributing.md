# Contributing

Thank you for your interest in contributing to Strata TypeScript Tutor!

## Development Setup

```bash
# Clone the repository
git clone https://github.com/jbcom/strata.git
cd strata/typescript-tutor

# Install dependencies (pnpm preferred)
pnpm install

# Start development server
pnpm dev
```

## Project Structure

```
typescript-tutor/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility libraries
│   │   └── pages/          # Page components
│   └── public/             # Static assets
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage
├── shared/                 # Shared types
├── public/
│   ├── api/static/        # Static API data
│   │   └── lessons.json   # Lesson content
│   └── dialogue/pixel/    # Pixel dialogue files
├── docs/                   # Documentation
└── tests/                  # Test files
```

## Running Tests

```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test --coverage

# Run specific test file
pnpm test client/src/lib/__tests__/specific.test.ts

# Type checking
pnpm check
```

## Code Style

This project uses:

- **ESLint** for linting
- **Prettier** for formatting
- **TypeScript** strict mode

```bash
# Check linting
pnpm lint

# Auto-fix issues
pnpm lint --fix

# Format code
npx prettier --write .
```

## Making Changes

### 1. Create a Branch

```bash
git checkout -b feat/your-feature-name
```

### 2. Make Your Changes

Follow these guidelines:

- Write TypeScript with strict types
- Add tests for new functionality
- Update documentation as needed
- Keep commits focused and atomic

### 3. Test Your Changes

```bash
# Run type checker
pnpm check

# Run linter
pnpm lint

# Run tests
pnpm test
```

### 4. Commit Your Changes

Use conventional commits:

```bash
# Features
git commit -m "feat(lessons): add async/await lesson"

# Bug fixes
git commit -m "fix(editor): resolve syntax highlighting issue"

# Documentation
git commit -m "docs: update quickstart guide"

# Refactoring
git commit -m "refactor(wizard): simplify dialogue engine"

# Tests
git commit -m "test(grading): add edge case coverage"
```

### 5. Submit Pull Request

1. Push your branch
2. Create a PR against `main`
3. Fill out the PR template
4. Wait for CI checks to pass
5. An AI agent or maintainer will review

## Adding New Lessons

Lessons are defined in `public/api/static/lessons.json`:

```json
{
  "id": "lesson-new",
  "title": "Lesson Title",
  "description": "Brief description",
  "order": 10,
  "intro": "Welcome message from Pixel",
  "learningObjectives": [
    "Objective 1",
    "Objective 2"
  ],
  "goalDescription": "What students will achieve",
  "content": {
    "introduction": "Lesson intro text",
    "steps": [
      {
        "id": "step-1",
        "title": "Step Title",
        "description": "What to do",
        "initialCode": "// Starting code",
        "solution": "// Solution code",
        "hints": ["Hint 1", "Hint 2"],
        "tests": [/* test cases */]
      }
    ]
  },
  "prerequisites": ["lesson-1"],
  "difficulty": "Beginner",
  "estimatedTime": 20
}
```

## Updating Dialogue

Dialogue files use Yarn Spinner format in `public/dialogue/pixel/`:

```yarn
title: MyDialogue
---
Pixel: Welcome to this lesson! 🎮
Pixel: Ready to learn TypeScript?
-> Let's do it!
    <<jump StartLearning>>
-> Tell me more
    Pixel: TypeScript adds types to JavaScript...
    <<jump StartLearning>>
===
```

## Architecture Overview

### Frontend (React + Vite)

- **UniversalWizard**: Main wizard component with Pixel
- **WizardDialogueEngine**: Processes Yarn dialogue
- **MonacoEditor**: TypeScript code editing
- **GameCanvas**: Live game preview

### Backend (Express)

- Serves static files and API
- Manages user progress
- No database required (localStorage)

### Strata Integration

Games use the Strata engine for:

- Canvas rendering
- Input handling
- Game loop management
- Sprite/animation systems

## Pull Request Guidelines

- PRs should focus on one concern
- Include tests for new features
- Update relevant documentation
- Follow existing code patterns
- Ensure CI passes

## Getting Help

- Check existing issues first
- Use discussions for questions
- Tag issues appropriately
- Include reproduction steps for bugs

## Recognition

All contributors are recognized in our CONTRIBUTORS.md file. Thank you for helping make TypeScript learning fun! 🎉
