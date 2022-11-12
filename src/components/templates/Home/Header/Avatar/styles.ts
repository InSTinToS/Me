import { styled } from '@app/styles'

import { motion } from 'framer-motion'

export const Style = styled(motion.button, {
  position: 'relative',

  size: '$64',
  radius: '$full',
  border: 'solid 2px $white',

  img: {
    position: 'absolute',
    top: 0,
    left: 0,

    size: '100%',
    userSelect: 'none'
  }
})
