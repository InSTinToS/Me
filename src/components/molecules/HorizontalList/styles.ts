import { styled } from '@app/styles'

import { motion } from 'framer-motion'

export const ListItem = styled(motion.li, {
  position: 'relative'
})

export const List = styled(motion.ul, {})

export const Style = styled(motion.div, {
  position: 'relative',

  width: '100%',
  overflow: 'hidden'
})
