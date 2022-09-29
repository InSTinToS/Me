import { styled } from '@app/styles'

import { Social as OriginalSocial } from '@app/components/molecules/Social'

export const Social = styled(OriginalSocial, {
  display: 'none',

  '@md': {
    display: 'flex',

    ml: 'auto'
  }
})

export const NavbarList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  py: '$4',
  px: '$8',
  mx: 'auto',
  width: '100%',
  maxWidth: '$2xl',

  '@md': { justifyContent: 'flex-start' }
})

export const Style = styled('nav', {
  position: 'relative',
  zIndex: 3,

  width: '100%',

  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
