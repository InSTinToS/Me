import { styled } from '@app/styles'

export const Style = styled('section', {
  flexCenter: 'row',

  windowSize: 100,

  color: '$secondary',

  '@lg': { flexDirection: 'row' }
})
