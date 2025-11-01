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

test('type exports', () => {
  expectTypeOf(walletConnect).toBeFunction()
  expectTypeOf(walletConnect).parameter(0).toMatchTypeOf<{
    projectId: string
    showQrModal?: boolean
    metadata?: {
      name: string
      description: string
      url: string
      icons: string[]
    }
  }>()
})

