import { styled } from '@app/styles'

export const Style = styled('ul', {
  display: 'flex',
  alignItems: 'center',

  li: {
    img: { size: '$8' },

    '& + li': {
      ml: '$4'
    }
  },

  button: { size: '$8' }
})
