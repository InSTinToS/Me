import { styled } from '@app/styles'

import {
  Arrow as RadixArrow,
  Content as RadixContent,
  Trigger as RadixTrigger
} from '@radix-ui/react-tooltip'

export const Arrow = styled(RadixArrow, {
  variants: {
    variant: {
      error: { fill: '$error' },
      default: { fill: '$info' },
      success: { fill: '$success' }
    }
  }
})

export const Content = styled(RadixContent, {
  position: 'relative',
  zIndex: 3,

  p: '$2',
  borderRadius: '$3',

  color: '$secondary',

  variants: {
    variant: {
      error: { bg: '$error' },
      default: { bg: '$info' },
      success: { bg: '$success' }
    }
  }
})

export const Trigger = styled(RadixTrigger, {})

export const Styles = styled('div', {})
