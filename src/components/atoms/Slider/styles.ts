import { styled } from '@app/styles'

import * as Slider from '@radix-ui/react-slider'

export const Range = styled(Slider.Range, {})

export const Track = styled(Slider.Track, {
  position: 'relative',

  flexGrow: 1,

  height: '$px',

  bg: '#ffffff'
})

export const Thumb = styled(Slider.Thumb, {
  display: 'block',

  radius: '50%',
  outline: 'none',

  bg: 'transparent',
  border: 'solid 2px #ffffff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',

  '&:hover': { cursor: 'ew-resize' },

  '&:focus': { cursor: 'e-resize' }
})

export const Style = styled(Slider.Root, {
  position: 'relative',

  flexCenter: 'row',

  height: 20,
  width: '100%',
  userSelect: 'none',
  touchAction: 'none'
})
