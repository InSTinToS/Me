import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

import * as Slider from '@radix-ui/react-slider'

export const Name = styled('span', {
  position: 'absolute',
  left: 0,

  display: 'none',

  transform: 'translate(-50%,-200%)',

  '@sm': {
    display: 'block'
  }
})

export const Thumb = styled(Slider.Thumb, {
  display: 'block',

  radius: '50%',
  outline: 'none',

  bg: 'transparent',
  border: 'solid 2px $white',
  boxShadow: `0 2px 10px ${hexToRgba(theme.colors.black.value, 0.5)}`,

  '&:hover': { cursor: 'ew-resize' },

  '&:focus': { cursor: 'e-resize' }
})

export const Range = styled(Slider.Range, {})

export const Track = styled(Slider.Track, {
  position: 'relative',

  flexGrow: 1,

  height: '$px',

  bg: '$white'
})

export const Style = styled(Slider.Root, {
  position: 'relative',

  flexCenter: 'row',

  height: 20,
  width: '100%',
  userSelect: 'none',
  touchAction: 'none'
})
