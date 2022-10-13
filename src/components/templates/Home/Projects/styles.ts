import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

import { motion } from 'framer-motion'

export const Header = styled('header', {
  flexCenter: 'row',

  px: '$16',
  py: '$20',

  '@xl': {
    mx: 'auto',
    maxWidth: '$2xl'
  }
})

export const Style = styled(motion.main, {
  position: 'relative',
  zIndex: 2,

  pb: '$10',
  minHeight: '100vh',
  color: '$white',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)',
  background: hexToRgba(theme.colors.black.value, 0.5)
})
