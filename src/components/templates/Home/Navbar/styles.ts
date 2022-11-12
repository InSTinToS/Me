import { styled, theme } from '@app/styles'

import { Social as OriginalSocial } from '@app/components/molecules/Social'

import { hexToRgba } from '@app/utils/colors'

export const Social = styled(OriginalSocial, {})

export const NavbarList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  px: '$8',
  width: '100%',
  maxWidth: '$2xl',

  '> li:last-child': {
    display: 'none'
  },

  '@md': {
    justifyContent: 'flex-start',

    '> li:last-child': {
      display: 'flex',

      ml: 'auto'
    }
  }
})

export const Style = styled('nav', {
  position: 'relative',
  zIndex: 3,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  py: '$4',

  width: '100%',

  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)',
  background: hexToRgba(theme.colors.black.value, 0.5)
})
