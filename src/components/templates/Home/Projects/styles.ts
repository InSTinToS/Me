import { styled } from '@app/styles'

export const Header = styled('header', {
  flexCenter: 'row',

  px: '$4',
  py: '$10'
})

export const Style = styled('main', {
  position: 'relative',
  zIndex: 2,

  minHeight: '100vh',

  color: '#ffffff',
  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
