import { styled } from '@app/styles'

import { Reset as ResetIcon } from '@app/components/atoms/Icon/icons/Reset'

export const ColorPicker = styled('input', {
  "&[type='color']": {
    ml: 'auto',
    size: '$8',
    radius: '$full',
    borderWidth: '$2',
    overflow: 'hidden',

    bg: 'transparent',
    border: 'solid $white',

    '@md': {
      alignSelf: 'flex-start'
    }
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
  mr: '$1',

  '@md': {
    alignSelf: 'flex-start',

    mt: '$1',
    mr: '$3'
  }
})

export const Style = styled('form', {
  gridArea: 'color',

  flexCenter: 'row',

  ml: 'auto'
})
