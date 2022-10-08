import { styled } from '@app/styles'

import {
  Arrow as RadixArrow,
  Content as RadixContent,
  Trigger as RadixTrigger
} from '@radix-ui/react-tooltip'

export const Arrow = styled(RadixArrow, {
  fill: '$white'
})

export const Content = styled(RadixContent, {
  p: '$2',
  bg: '$white',
  color: '$primary',
  borderRadius: '$3',

  position: 'relative',
  zIndex: 3
})

export const Trigger = styled(RadixTrigger, {})

export const Styles = styled('div', {})
