import { styled } from '@app/styles'

export const ColorPicker = styled('input', {
  "&[type='color']": {
    size: '$12',
    borderWidth: '1px',
    borderStyle: 'solid',

    bg: 'transparent'
  }
})

export const Main = styled('main', {
  flexCenter: 'row',

  windowSize: 100,

  color: '$secondary',

  '@lg': { flexDirection: 'row' }
})
