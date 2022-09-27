import { styled } from '@app/styles'

import { motion } from 'framer-motion'

export const ListItem = styled(motion.li, {
  position: 'absolute',
  top: '50%'
})

export const List = styled(motion.ul, {
  width: '100%',
  div: {
    flexCenter: 'row'
  }
})

export const Style = styled(motion.div, {
  position: 'relative',

  width: '100%',
  overflow: 'hidden',
  transition: 'all 1s ease-in-out'
})
