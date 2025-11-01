# Contributing to @walletconnect/wagmi-connector

Thank you for your interest in contributing to the WalletConnect wagmi connector! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and considerate in all interactions. We're building this together!

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/wagmi-connector.git
   cd wagmi-connector
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Building

```bash
pnpm build
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Type Checking

```bash
pnpm typecheck
```

### Linting and Formatting

```bash
# Check for linting issues
pnpm lint

# Fix linting issues automatically
pnpm lint:fix

# Check code formatting
pnpm prettier:check

# Format code
pnpm prettier:write

# Format and fix all issues
pnpm format
```

## Making Changes

1. Make your changes in your feature branch
2. Add tests for any new functionality
3. Ensure all tests pass: `pnpm test`
4. Ensure code is properly formatted: `pnpm format`
5. Run type checking: `pnpm typecheck`
6. Build the package: `pnpm build`

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `test:` - Test updates
- `refactor:` - Code refactoring

Example:
```
feat: add support for custom metadata
```

## Adding a Changeset

Before submitting your PR, add a changeset to document your changes:

```bash
pnpm changeset
```

Follow the prompts to:
1. Select the type of change (patch, minor, major)
2. Describe your changes

This will create a file in `.changeset/` that will be used to generate the changelog and determine the next version.

## Pull Request Process

1. Push your changes to your fork
2. Open a Pull Request against the `main` branch
3. Fill out the PR template with:
   - Description of changes
   - Related issues
   - Testing performed
4. Wait for CI checks to pass
5. Address any review feedback
6. Once approved, a maintainer will merge your PR

## CI/CD

All PRs must pass the following checks:

- **Build**: Successfully builds on Node.js 18.x and 20.x
- **Lint**: No linting errors
- **Format**: Code is properly formatted with Prettier
- **Type Check**: No TypeScript errors
- **Tests**: All tests pass

## Testing Guidelines

- Write tests for all new features
- Update tests when modifying existing functionality
- Aim for high test coverage
- Use meaningful test descriptions
- Mock external dependencies appropriately

## Questions?

If you have questions or need help, feel free to:
- Open an issue for discussion
- Ask in your Pull Request
- Reach out to the maintainers

Thank you for contributing! 🎉

