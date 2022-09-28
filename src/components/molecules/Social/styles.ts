import { styled } from '@app/styles'

import { Gmail as GmailIcon } from '@app/components/atoms/Icon/icons/Gmail'

export const Gmail = styled(GmailIcon, {
  radius: '$full',

  bg: '#ffffff'
})

export const Style = styled('ul', {
  gridArea: 'social',

  display: 'flex',
  alignItems: 'center',

  width: '100%',

  li: {
    size: '$8',

    '& + li': { ml: '$4' }
  },

  '@md': {
    display: 'none'
  }
})
