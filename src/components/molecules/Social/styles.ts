import { styled } from '@app/styles'

import { BlackPDF as BlackPDFIcon } from '@app/components/atoms/Icon/icons/BlackPDF'
import { ColoredPDF as ColoredPDFIcon } from '@app/components/atoms/Icon/icons/ColoredPDF'
import { Gmail as GmailIcon } from '@app/components/atoms/Icon/icons/Gmail'

export const BlackPDF = styled(BlackPDFIcon, {
  size: '$8',
  flexCenter: 'row'
})

export const ColoredPDF = styled(ColoredPDFIcon, {
  size: '$8',
  flexCenter: 'row'
})

export const Gmail = styled(GmailIcon, {
  radius: '$full',

  '&:active': { path: '$success' }
})

export const Style = styled('ul', {
  display: 'flex',
  alignItems: 'center',

  button: { size: '$8' },

  li: {
    size: '$8',

    '& + li': { ml: '$3' }
  },

  '@sm': { li: { '& + li': { ml: '$4' } } },

  variants: {
    visible: {
      smallerMd: {
        '@md': { opacity: 0, size: 0 }
      },
      biggerMd: {
        opacity: 0,
        size: 0,
        '@md': { opacity: 1, size: 'auto' }
      }
    }
  }
})
