import { styled } from '@app/styles'

import { Gmail as GmailIcon } from '@app/components/atoms/Icon/icons/Gmail'

export const Gmail = styled(GmailIcon, {
  radius: '$full',

  bg: '#ffffff',

  '&:active': {
    bg: '$success'
  }
})

export const Style = styled('ul', {
  display: 'flex',
  alignItems: 'center',

  button: { size: '$8' },

  li: {
    size: '$8',

    '& + li': { ml: '$3' }
  },

  '@sm': {
    li: {
      '& + li': { ml: '$4' }
    }
  }
})
