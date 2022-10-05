import { RadixProvider } from '../Radix'
import { ThemeProvider } from '../ThemeProvider'

import { store } from '@app/store'

import { IChildrenProps } from '@app/types/react.types'

import { Provider as ReduxProvider } from 'react-redux'

export const GlobalProvider = ({ children }: IChildrenProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <RadixProvider>{children}</RadixProvider>
    </ThemeProvider>
  </ReduxProvider>
)
