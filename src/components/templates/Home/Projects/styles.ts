import { styled } from '@app/styles'

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

  color: '#ffffff',
  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
