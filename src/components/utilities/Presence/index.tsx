import type { IPresenceProps } from './types'

import { AnimatePresence } from 'framer-motion'

export const Presence = ({ children, condition, ...props }: IPresenceProps) => (
  <AnimatePresence {...props}>{condition && children}</AnimatePresence>
)
