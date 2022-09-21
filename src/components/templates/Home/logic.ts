import { ICustomThemeState } from './types'

import { theme } from '@app/styles'

import { TButtonProps, TInputProps } from '@app/types/react.types'

import { blackOrWhiteByContrast, hexToRgba } from '@app/utils/colors'

import { useState } from 'react'

export const useHome = () => {
  const initialColor = theme.colors.primary.value

  const [customTheme, setCustomTheme] = useState<ICustomThemeState>({
    color: initialColor,
    contrast: blackOrWhiteByContrast(initialColor)
  })

  const onColorChange: TInputProps['onChange'] = e => {
    const newColor = e.currentTarget.value

    setCustomTheme({
      color: newColor,
      contrast: blackOrWhiteByContrast(newColor)
    })
  }

  const onResetClick: TButtonProps['onClick'] = () => {
    setCustomTheme({
      color: initialColor,
      contrast: blackOrWhiteByContrast(initialColor)
    })
  }

  const bgGradient = `
    linear-gradient(32.87deg, ${customTheme.color} 20%, 
    ${hexToRgba(customTheme.color, 0.7)} 80%,
    ${hexToRgba(customTheme.color, 0.5)} 100%);
  `

  return { onColorChange, customTheme, bgGradient, onResetClick }
}
