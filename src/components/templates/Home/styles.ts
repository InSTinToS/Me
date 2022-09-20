import { styled } from '@app/styles'

export const ColorPicker = styled('input', {
  bg: 'transparent',

  padding: 0,
  margin: 0,
  size: '$12',
  border: 'solid red 1px'
})

export const Main = styled('main', {
  flexCenter: 'row',

  windowSize: 100,

  color: '$secondary',

  '@lg': { flexDirection: 'row' }
})
