# Installation

Get started with Strata TypeScript Tutor in minutes!

## Requirements

- Node.js 18+ (recommended: 20 LTS)
- npm 9+ or pnpm 8+
- A modern web browser (Chrome, Firefox, Safari, Edge)

## Quick Start (Recommended)

The easiest way to start learning is to visit the hosted version:

**[Start Learning TypeScript Now →](https://typescript-tutor.strata.dev)**

## Local Development

Want to run it locally or contribute?

### Using npm

```bash
# Clone the repository
git clone https://github.com/jbcom/strata.git
cd strata/typescript-tutor

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Using pnpm (Preferred)

```bash
# Clone the repository
git clone https://github.com/jbcom/strata.git
cd strata/typescript-tutor

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

### Open in Browser

Once the server starts, open [http://localhost:5000](http://localhost:5000) in your browser.

## What's Included

The Strata TypeScript Tutor includes:

- **Interactive Lessons** - Learn TypeScript fundamentals through game development
- **Live Code Editor** - Monaco editor with TypeScript support
- **Instant Preview** - See your games run in real-time
- **Pixel Mascot** - Your friendly guide through the learning journey
- **Strata Engine** - Full access to the Strata game development library

## System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Node.js | 18.x | 20.x LTS |
| RAM | 4 GB | 8 GB |
| Browser | Chrome 90+ | Latest Chrome/Firefox |
| Screen | 1280x720 | 1920x1080 |

## Troubleshooting

### Port Already in Use

```bash
# Use a different port
PORT=3000 npm run dev
```

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check for type errors
npm run check
```

## Next Steps

- Read the [Quickstart Guide](./quickstart.md) to create your first game
- Explore the [API Reference](../api/index.rst) for Strata engine details
- Join our community and share what you build!
