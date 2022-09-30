import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

export const Header = styled('header', {
  flexCenter: 'row',

  px: '$8',
  py: '$10',

  '@xl': {
    mx: 'auto',
    maxWidth: '$2xl'
  }
})

export const Style = styled('main', {
  position: 'relative',
  zIndex: 2,

  pb: '$10',

  color: '$white',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)',
  background: hexToRgba(theme.colors.black.value, 0.5)
})
