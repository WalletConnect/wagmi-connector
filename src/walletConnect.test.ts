import { expect, expectTypeOf, test } from 'vitest'
import { config, walletConnectProjectId } from './__tests__/config.js'
import { walletConnect } from './walletConnect.js'

test('setup', () => {
  const connectorFn = walletConnect({ projectId: walletConnectProjectId })
  const connector = config._internal.connectors.setup(connectorFn)
  expect(connector.name).toEqual('WalletConnect')

  type ConnectFnParameters = NonNullable<
    Parameters<(typeof connector)['connect']>[0]
  >
  expectTypeOf<ConnectFnParameters['pairingTopic']>().toMatchTypeOf<
    string | undefined
  >()
})

test('setup with showQrModal option', () => {
  const connectorFn = walletConnect({
    projectId: walletConnectProjectId,
    showQrModal: false,
  })
  const connector = config._internal.connectors.setup(connectorFn)
  expect(connector.name).toEqual('WalletConnect')
})

test('setup with isNewChainsStale option', () => {
  const connectorFn = walletConnect({
    projectId: walletConnectProjectId,
    isNewChainsStale: false,
  })
  const connector = config._internal.connectors.setup(connectorFn)
  expect(connector.name).toEqual('WalletConnect')
})

test('setup with metadata', () => {
  const connectorFn = walletConnect({
    projectId: walletConnectProjectId,
    metadata: {
      name: 'Test App',
      description: 'Test application for WalletConnect',
      url: 'https://test.com',
      icons: ['https://test.com/icon.png'],
    },
  })
  const connector = config._internal.connectors.setup(connectorFn)
  expect(connector.name).toEqual('WalletConnect')
})

test('setup with qrModalOptions', () => {
  const connectorFn = walletConnect({
    projectId: walletConnectProjectId,
    qrModalOptions: {
      enableMobileFullScreen: true,
    },
  })
  const connector = config._internal.connectors.setup(connectorFn)
  expect(connector.name).toEqual('WalletConnect')
})

test('setup with all options', () => {
  const connectorFn = walletConnect({
    projectId: walletConnectProjectId,
    showQrModal: true,
    isNewChainsStale: true,
    metadata: {
      name: 'Complete Test App',
      description: 'Testing all WalletConnect options',
      url: 'https://complete-test.com',
      icons: ['https://complete-test.com/icon.png'],
    },
    qrModalOptions: {
      enableMobileFullScreen: true,
    },
  })
  const connector = config._internal.connectors.setup(connectorFn)
  expect(connector.name).toEqual('WalletConnect')
})

test('type exports', () => {
  expectTypeOf(walletConnect).toBeFunction()
  expectTypeOf(walletConnect).parameter(0).toMatchTypeOf<{
    projectId: string
    showQrModal?: boolean
    isNewChainsStale?: boolean
    metadata?: {
      name: string
      description: string
      url: string
      icons: string[]
    }
    qrModalOptions?: {
      enableMobileFullScreen?: boolean
    }
  }>()
})

