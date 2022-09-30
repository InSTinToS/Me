import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

import { motion } from 'framer-motion'

export const Progress = styled('hr', {
  width: '100%',

  mt: '$4',
  radius: '$2',
  borderWidth: '$1',
  borderStyle: 'solid',

  variants: {
    progress: {
      low: { borderColor: '$error' },
      high: { borderColor: '$success' },
      medium: { borderColor: '$warning' }
    }
  }
})

export const Image = styled('img', {
  mx: 'auto',
  height: '$11'
})

export const Name = styled('div', {
  flexCenter: 'row',
  flex: 1,
  textAlign: 'center',

  mx: 'auto',
  height: '$11',

  color: '$white'
})

export const Style = styled(motion.li, {
  flexWrap: 'wrap',
  flexCenter: 'row',

  m: '$4',
  p: '$4',
  width: '$55',
  radius: '$4',
  height: '$25',
  maxWidth: '$55',

  variants: {
    color: {
      white: { background: hexToRgba(theme.colors.white.value, 0.3) },
      black: { background: hexToRgba(theme.colors.black.value, 0.3) }
    }
  }
})
