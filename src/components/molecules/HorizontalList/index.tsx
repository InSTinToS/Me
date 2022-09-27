import { useHorizontalList } from './logic'
import { List, ListItem, Style } from './styles'
import { IHorizontalListProps } from './types'

import { AnimatePresence } from 'framer-motion'
import { forwardRef } from 'react'

export const HorizontalList = forwardRef<any, IHorizontalListProps>(
  ({ children, gap, duration = 0.5 }, ref) => {
    const { page, liHeight, variants, ulRef, liRef } = useHorizontalList({
      gap,
      ref,
      children
    })

    return (
      <Style ref={ref} css={{ height: liHeight }}>
        <List ref={ulRef}>
          <AnimatePresence initial={false} custom={page.dir}>
            <ListItem
              key={page.index}
              exit='exit'
              initial='enter'
              animate='center'
              custom={page.dir}
              variants={variants}
              transition={{ duration, type: 'tween' }}
            >
              <div ref={liRef}>{children[page.index]}</div>
            </ListItem>
          </AnimatePresence>
        </List>
      </Style>
    )
  }
)

HorizontalList.displayName = 'HorizontalList'
