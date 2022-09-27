import { styled } from '@app/styles'

export const NavbarList = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%'
})

export const Style = styled('nav', {
  zIndex: 3,

  py: '$4',
  px: '$8',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
