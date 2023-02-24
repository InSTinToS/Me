import { styled } from '@app/styles'

import { Reset as ResetIcon } from '@app/components/atoms/Icon/icons/Reset'

export const ColorPicker = styled('input', {
  "&[type='color']": {
    size: '$8',
    minSize: '$8',
    radius: '$full',
    borderWidth: '$2',
    overflow: 'hidden',

    bg: 'transparent',
    border: 'solid $white'
  }
})

export const Reset = styled(ResetIcon, {
  size: '$6',

  fill: '$primary',

  variants: {
    color: {
      white: { 'path + path': { fill: '$white' } },
      black: { 'path + path': { fill: '$black' } }
    }
  }
})

export const ResetButton = styled('button', {
  flexCenter: 'row',
  mt: '$2',

  '@md': {
    mt: '$0',
    mr: '$2'
  }
})

export const Style = styled('form', {
  height: '$8'
})
