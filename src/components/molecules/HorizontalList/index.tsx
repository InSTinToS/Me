import { useHorizontalList } from './logic'
import { List, ListItem, Style } from './styles'
import { IHorizontalListForwarded, IHorizontalListProps } from './types'

import { AnimatePresence } from 'framer-motion'
import { forwardRef } from 'react'

export const HorizontalList = forwardRef<
  IHorizontalListForwarded,
  IHorizontalListProps
>(({ children }, ref) => {
  const { page, liAnimations, presenceAnimations, ulRef } = useHorizontalList({
    ref,
    children
  })

  return (
    <Style ref={ref}>
      <List ref={ulRef}>
        <AnimatePresence {...presenceAnimations}>
          <ListItem key={page.index} {...liAnimations}>
            {children[page.index]}
          </ListItem>
        </AnimatePresence>
      </List>
    </Style>
  )
})

HorizontalList.displayName = 'HorizontalList'
