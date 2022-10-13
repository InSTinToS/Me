import { styled, theme } from '@app/styles'

import { Social as OriginalSocial } from '@app/components/molecules/Social'

import { hexToRgba } from '@app/utils/colors'

export const Social = styled(OriginalSocial, {
  display: 'none',

  '@md': {
    display: 'flex',

    mr: 'auto'
  }
})

export const NavbarList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  ml: 'auto',
  width: '100%',
  maxWidth: `calc(${theme.sizes['2xl'].value} - ${theme.sizes['44'].value} - ${theme.sizes['16'].value}  - ${theme.sizes['16'].value}) `,

  '@md': { justifyContent: 'flex-start' }
})

export const Style = styled('nav', {
  position: 'relative',
  zIndex: 3,

  py: '$4',
  px: '$8',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',

  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)',
  background: hexToRgba(theme.colors.black.value, 0.5)
})
