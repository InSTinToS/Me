import { theme } from '@app/styles'

import { TInputProps } from '@app/types/react.types'

import { blackOrWhiteByContrast } from '@app/utils/colors'

import { useState } from 'react'

export const useHome = () => {
  const initialColor = theme.colors.primary.value

  const [customTheme, setCustomTheme] = useState({
    bg: initialColor,
    color: blackOrWhiteByContrast(initialColor)
  })

  const onColorChange: TInputProps['onChange'] = e => {
    const newColor = e.currentTarget.value

    setCustomTheme({
      bg: newColor,
      color: blackOrWhiteByContrast(newColor)
    })
  }

  return { onColorChange, customTheme }
}
