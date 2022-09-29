import { useHorizontalList } from './logic'
import { ListItem, Style } from './styles'
import { IHorizontalListForwarded, IHorizontalListProps } from './types'

import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export const HorizontalList = forwardRef<
  IHorizontalListForwarded,
  IHorizontalListProps
>(({ children }, ref) => {
  const { ulRef, presenceAnimations, page, liAnimations } = useHorizontalList({
    ref,
    children
  })

  return (
    <Style ref={ref}>
      <motion.ul ref={ulRef}>
        <AnimatePresence {...presenceAnimations}>
          <ListItem key={page.index} {...liAnimations}>
            {children[page.index]}
          </ListItem>
        </AnimatePresence>
      </motion.ul>
    </Style>
  )
})

HorizontalList.displayName = 'HorizontalList'
