import { styled } from '@app/styles'

export const Style = styled('li', {
  flexCenter: 'row',

  '& + li': { ml: '$6' },

  'button > *': { size: '$7' }
})
