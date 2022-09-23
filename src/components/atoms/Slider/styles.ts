import { styled } from '@app/styles'

import * as Slider from '@radix-ui/react-slider'

export const Range = styled(Slider.Range, {})

export const Track = styled(Slider.Track, {
  position: 'relative',

  flexGrow: 1,

  height: '$px',

  bg: '#ffffff',

  div: {
    position: 'absolute',

    opacity: 0.5,
    radius: '50%',

    bg: '#ffffff'
  }
})

export const Thumb = styled(Slider.Thumb, {
  display: 'block',

  radius: '50%',

  bg: 'transparent',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',

  '&:hover': { cursor: 'ew-resize' },

  '&:focus': { cursor: 'e-resize' }
})

export const Style = styled(Slider.Root, {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  userSelect: 'none',
  touchAction: 'none',

  height: 20,
  width: '100%'
})
