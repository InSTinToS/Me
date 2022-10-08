import { GlobalProvider } from '../src/components/providers/GlobalProvider'

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } }
}

export const decorators = [Story => <GlobalProvider>{Story()}</GlobalProvider>]
