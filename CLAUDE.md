# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

> **See also:** `AGENTS.md` for comprehensive agent instructions.

## Project: Strata TypeScript Tutor

An interactive educational platform teaching TypeScript through building projects with the [@jbcom/strata](https://www.npmjs.com/package/@jbcom/strata) 3D graphics library.

## Quick Start

```bash
# Install dependencies (use pnpm, NOT npm)
pnpm install

# Start development server
pnpm dev

# Verify code quality
pnpm check   # TypeScript
pnpm lint    # Biome
pnpm test    # Vitest
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Package Manager | **pnpm** |
| Linting/Formatting | **Biome** (NOT ESLint/Prettier) |
| Frontend | React 18 + TypeScript + Vite |
| UI Components | shadcn/ui + Radix UI + Tailwind CSS |
| Backend | Express.js + TypeScript |
| Code Editor | Monaco Editor |
| Testing | Vitest (unit) + Playwright (e2e) |

## Development Workflow

### Before Making Changes
1. Verify clean state: `pnpm check && pnpm lint`
2. Read relevant files before editing
3. Check recent commits for patterns

### Making Changes
1. Create focused, minimal changes
2. Use TypeScript strict mode patterns
3. Add/update tests for new functionality
4. Ensure all checks pass

### Committing
```bash
# Use conventional commits
git commit -m "feat(lessons): add generics tutorial"
git commit -m "fix(wizard): handle edge case in navigation"
git commit -m "docs: update API reference"
```

## Code Quality Checklist

Before considering work complete:
- [ ] `pnpm check` passes (TypeScript)
- [ ] `pnpm lint` passes (Biome)
- [ ] `pnpm test` passes (Vitest)
- [ ] No new warnings introduced
- [ ] Documentation updated if needed
- [ ] Commit messages follow conventional format

## Key Files

| File | Purpose |
|------|---------|
| `public/api/static/lessons.json` | Lesson content and code examples |
| `public/dialogue/pixel/*.yarn` | Mascot dialogue (Yarn Spinner) |
| `client/src/components/wizard-*.tsx` | Wizard flow UI |
| `shared/schema.ts` | Shared TypeScript types |
| `biome.json` | Linting/formatting config |

## Strata Library

The [@jbcom/strata](https://www.npmjs.com/package/@jbcom/strata) library provides:
- Procedural terrain generation
- Water effects and reflections
- Vegetation systems
- Sky and atmosphere
- Volumetric effects

Lessons teach TypeScript fundamentals through building 3D graphics projects.

## Important Notes

- **Use pnpm**, not npm
- **Use Biome**, not ESLint/Prettier
- Use TypeScript strict mode
- Prefer `unknown` over `any`
- All code examples should be TypeScript (not Python)
- Reference Strata library (not Pygame)
