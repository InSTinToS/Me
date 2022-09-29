import { styled } from '@app/styles'

import { Gmail as GmailIcon } from '@app/components/atoms/Icon/icons/Gmail'

export const Gmail = styled(GmailIcon, {
  radius: '$full',

  bg: '#ffffff'
})

export const Style = styled('ul', {
  display: 'flex',
  alignItems: 'center',

  li: {
    size: '$8',

    '& + li': {
      ml: '$4'
    }
  }
})
