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

  width: '100%',

  '@md': {
    justifyContent: 'flex-start'
  }
})

export const Style = styled('nav', {
  zIndex: 3,
  position: 'relative',

  py: '$4',
  px: '$8',
  width: '100%',

  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
