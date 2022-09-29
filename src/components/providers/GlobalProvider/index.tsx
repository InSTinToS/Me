import { RadixProvider } from '../Radix'
import { ThemeProvider } from '../ThemeProvider'

import { store } from '@app/store'

import { reactQueryClient } from '@app/services/api'

import { IChildrenProps } from '@app/types/react.types'

// import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClientProvider } from 'react-query/react'
import { Provider as ReduxProvider } from 'react-redux'

export const GlobalProvider = ({ children }: IChildrenProps) => (
  <QueryClientProvider client={reactQueryClient}>
    <ReduxProvider store={store}>
      <ThemeProvider>
        {/* <ReactQueryDevtools /> */}
        <RadixProvider>{children}</RadixProvider>
      </ThemeProvider>
    </ReduxProvider>
  </QueryClientProvider>
)
