import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

const handlers = [
  http.get('https://relay.walletconnect.com', () =>
    HttpResponse.json(
      {
        topic: '222781e3-3fad-4184-acde-077796bf0d3d',
        type: 'sub',
        payload: '',
        silent: true,
      },
      { status: 200 },
    ),
  ),
]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'warn',
  })

  const matchMedia = vi.fn().mockImplementation((query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }
  })
  vi.stubGlobal('matchMedia', matchMedia)
})

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
