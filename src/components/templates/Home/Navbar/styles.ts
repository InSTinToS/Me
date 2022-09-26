import { styled } from '@app/styles'

export const NavbarList = styled('ul', {
  flexCenter: 'row',

  width: '100%',

  '#phone': { ml: 'auto' }
})

export const Style = styled('nav', {
  zIndex: 3,

  py: '$4',
  px: '$8',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
