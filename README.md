# @walletconnect/wagmi-connector

[![npm version](https://img.shields.io/npm/v/@walletconnect/wagmi-connector.svg)](https://www.npmjs.com/package/@walletconnect/wagmi-connector)
[![CI](https://github.com/walletconnect/wagmi-connector/actions/workflows/pr_checks.yml/badge.svg)](https://github.com/walletconnect/wagmi-connector/actions/workflows/pr_checks.yml)
[![License](https://img.shields.io/badge/License-WalletConnect-blue.svg)](LICENSE.md)

Official WalletConnect connector for [wagmi](https://github.com/wevm/wagmi).

## Installation

```bash
# Using pnpm
pnpm add @walletconnect/wagmi-connector

# Using npm
npm install @walletconnect/wagmi-connector

# Using yarn
yarn add @walletconnect/wagmi-connector

# Using bun
bun add @walletconnect/wagmi-connector
```

## Usage

### Basic Setup

```typescript
import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { walletConnect } from '@walletconnect/wagmi-connector'

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    walletConnect({ 
      projectId: 'YOUR_WALLETCONNECT_PROJECT_ID' // dashboard.reown.com
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
})
```

### Configuration Options

```typescript
walletConnect({
  projectId: string              // Required: Your WalletConnect project ID
  showQrModal?: boolean          // Optional: Show QR modal (default: true)
  isNewChainsStale?: boolean     // Optional: Treat new chains as stale (default: true)
  metadata?: {                   // Optional: App metadata
    name: string
    description: string
    url: string
    icons: string[]
  }
  qrModalOptions?: {             // Optional: QR modal configuration
    enableMobileFullScreen?: boolean
  }
})
```

### Migration from wagmi/connectors

If you're migrating from the built-in wagmi connector:

**Before:**
```typescript
import { walletConnect } from 'wagmi/connectors'
```

**After:**
```typescript
import { walletConnect } from '@walletconnect/wagmi-connector'
```

That's it! The API is exactly the same.

## Local Development & Testing

### Building the Package

```bash
# Install dependencies
pnpm install

# Build the package
pnpm build

# Clean build artifacts
pnpm clean
```

### Testing Locally with pnpm link

1. **In the connector package directory** (`~/Code/wagmi-connector`):
   ```bash
   # Build the package
   pnpm build
   
   # Link it globally
   pnpm link --global
   ```

2. **In your test application**:
   ```bash
   # Link the connector
   pnpm link --global @walletconnect/wagmi-connector
   ```

3. **Update your imports**:
   ```typescript
   // Replace wagmi/connectors import
   import { walletConnect } from '@walletconnect/wagmi-connector'
   ```

4. **Test the functionality**:
   - Run your dev server
   - Test WalletConnect connection
   - Verify all features work correctly

### Unlinking After Testing

```bash
# In your test app
pnpm unlink @walletconnect/wagmi-connector

# In the connector package
pnpm unlink --global
```

## Requirements

- **wagmi**: ^2.0.0
- **viem**: ^2.0.0
- **@wagmi/core**: ^2.22.0
- **TypeScript**: >=5.0.4 (optional)

## TypeScript

This package is built with TypeScript and includes type definitions. All types are exported from the main entry point:

```typescript
import { walletConnect, type WalletConnectParameters } from '@walletconnect/wagmi-connector'
```

## API Reference

### `walletConnect(parameters)`

Creates a WalletConnect connector instance.

#### Parameters

- `projectId` (required): Your WalletConnect Cloud project ID. Get one at [cloud.walletconnect.com](https://cloud.walletconnect.com)
- `showQrModal` (optional): Whether to show the QR modal for connection. Default: `true`
- `isNewChainsStale` (optional): How to handle newly added chains. Default: `true`
  - `true`: Disconnect and require reconnection when new chains are added
  - `false`: Attempt to continue connection (may error if wallet doesn't support dynamic chains)
- `metadata` (optional): Application metadata shown in wallet during connection
- `qrModalOptions` (optional): Configuration options for the QR modal
  - `enableMobileFullScreen`: Enable full-screen mode on mobile devices

#### Returns

A wagmi connector instance that can be used in `createConfig`.

## Examples

### With Custom Metadata

```typescript
walletConnect({
  projectId: 'YOUR_PROJECT_ID',
  metadata: {
    name: 'My DApp',
    description: 'My awesome decentralized app',
    url: 'https://myapp.com',
    icons: ['https://myapp.com/icon.png']
  }
})
```

### Without QR Modal

```typescript
walletConnect({
  projectId: 'YOUR_PROJECT_ID',
  showQrModal: false
})
```

### Handling Dynamic Chains

```typescript
walletConnect({
  projectId: 'YOUR_PROJECT_ID',
  isNewChainsStale: false  // Allow dynamic chain additions
})
```

### With QR Modal Options

```typescript
walletConnect({
  projectId: 'YOUR_PROJECT_ID',
  qrModalOptions: {
    enableMobileFullScreen: true  // Enable full-screen on mobile
  }
})
```

## Troubleshooting

### "ProviderNotFoundError"

Make sure you've installed `@walletconnect/ethereum-provider`:
```bash
pnpm add @walletconnect/ethereum-provider
```

### TypeScript Errors

Ensure you have the correct peer dependencies installed:
```bash
pnpm add wagmi viem @wagmi/core
```

### Connection Issues

1. Verify your WalletConnect project ID is correct
2. Check that your chains are properly configured in wagmi
3. Ensure your RPC endpoints are accessible

## License

See [LICENSE.md](LICENSE.md) for details. This project is licensed under the WalletConnect Community License Agreement.

### Acknowledgments

Portions © 2025 Reown, Inc. All Rights Reserved

This project includes code derived from [wagmi](https://github.com/wevm/wagmi), which is licensed under the MIT License. See [NOTICE](NOTICE) for full attribution details.

## Links

- [WalletConnect Documentation](https://docs.walletconnect.com/)
- [wagmi Documentation](https://wagmi.sh/)
- [Get a Project ID](https://dashboard.reown.com/)

## Contributing

This package is maintained by WalletConnect. We welcome contributions! Please follow these guidelines:

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/walletconnect/wagmi-connector.git
   cd wagmi-connector
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build the package:
   ```bash
   pnpm build
   ```

### Running Tests

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Code Quality

Before submitting a PR, ensure your code passes all checks:

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Format code
pnpm format

# Check formatting
pnpm prettier:check
```

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run all tests and linting checks
5. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/)
6. Push to your fork and submit a Pull Request

### Release Process

This project uses [Changesets](https://github.com/changesets/changesets) for version management.

1. Make your changes
2. Add a changeset:
   ```bash
   pnpm changeset
   ```
3. Commit the changeset file
4. When merged to main, a PR will be automatically created to bump versions and update the changelog
5. Merging the version PR will automatically publish to npm

### CI/CD

The repository uses GitHub Actions for continuous integration:

- **PR Checks**: Runs on all pull requests, testing build, linting, type checking, and tests on Node.js 18.x and 20.x
- **Publish**: Automatically publishes to npm when version PRs are merged to main
- **Canary Releases**: Manual workflow for publishing canary versions

### Issues and Feature Requests

Please open an issue in the repository to report bugs or request features.


