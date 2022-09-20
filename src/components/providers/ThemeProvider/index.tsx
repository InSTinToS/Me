import { globalStyles, theme } from '@app/styles'

import { IChildrenProps } from '@app/types/react.types'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { useEffect } from 'react'

export const ThemeProvider = ({ children }: IChildrenProps) => {
  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <NextThemeProvider
      attribute='class'
      storageKey='@MyHair-theme'
      themes={[theme.className]}
      defaultTheme={theme.className}
      value={{ default_theme: theme.className }}
    >
      {children}
    </NextThemeProvider>
  )
}
