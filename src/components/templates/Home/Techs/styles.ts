import { styled, theme } from '@app/styles'
import { scrollbar } from '@app/styles/utils/scrollbar'

import { motion } from 'framer-motion'

export const TechsList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',

  mt: '$8',
  maxHeight: '80vh',
  overflowY: 'scroll',

  variants: {
    color: {
      white: {
        ...scrollbar({
          track: { display: 'none' },
          thumb: { radius: '$5', width: '$1', color: '$white' }
        })
      },
      black: {
        ...scrollbar({
          track: { display: 'none' },
          thumb: { radius: '$5', width: '$1', color: '$black' }
        })
      }
    }
  }
})

export const Content = styled('div', {
  position: 'relative',
  zIndex: 2,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  px: '$8',
  pb: '$12',
  mx: 'auto',
  maxWidth: '$2xl',
  minHeight: '100vh',
  pt: `calc(${theme.sizes[16].value} + ${theme.sizes[8].value})`,

  '@sm': {
    px: '$16'
  },

  '@md': {
    px: '$20'
  }
})

export const Bg = styled('div', {
  position: 'absolute',
  top: 0,
  opacity: 0.2,
  zIndex: 1,
  backgroundColor: '#000',
  width: '100%',
  height: '100%'
})

export const Style = styled(motion.section, {
  position: 'relative',
  zIndex: 2
})
