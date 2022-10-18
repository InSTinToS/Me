import { styled } from '@app/styles'

export const Style = styled('a', {
  textDecoration: 'underline',

  '&:hover': {
    '&, > *': {
      color: '$info',

      transition: 'color 0.3s ease-in-out'
    }
  }
})
