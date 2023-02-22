import { styled, theme } from '@app/styles'

import { hexToRgba } from '@app/utils/colors'

import { motion } from 'framer-motion'

export const Progress = styled('div', {
  width: '100%',

  mt: 'auto',

  borderWidth: '$1',
  borderStyle: 'solid',

  borderBottomLeftRadius: '$2',
  borderBottomRightRadius: '$2',

  mb: 0,
  variants: {
    progress: {
      low: { borderColor: '$error', mr: '75%' },
      high: { borderColor: '$success' },
      medium: { borderColor: '$warning', mr: '50%' }
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
  height: '100%'
})

export const Style = styled(motion.li, {
  flexWrap: 'wrap',
  flexCenter: 'row',

  m: '$4',

  width: '$55',
  height: '$25',
  maxWidth: '$55',

  borderTopLeftRadius: '$4',
  borderTopRightRadius: '$4'
})
