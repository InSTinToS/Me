import { styled } from '@app/styles'

import { motion } from 'framer-motion'

export const Image = styled('img', {
  mx: 'auto',
  height: '$11'
})

export const Progress = styled('hr', {
  width: '100%',

  mt: '$4',
  radius: '$2',
  borderWidth: '$1',
  borderStyle: 'solid',

  variants: {
    progress: {
      low: { borderColor: '$error' },
      medium: { borderColor: '$warning' },
      high: { borderColor: '$success' }
    }
  }
})

export const Name = styled('div', {
  flexCenter: 'row',
  flex: 1,

  mx: 'auto',
  height: '$11',

  textAlign: 'center',

  color: '#ffffff'
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

  background: 'rgba(255,255,255,0.2)'
})
