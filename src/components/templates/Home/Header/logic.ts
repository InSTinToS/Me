import { IUseHeaderParams } from './types'

import { MotionProps, useInView } from 'framer-motion'

export const useHeader = ({ ref }: IUseHeaderParams) => {
  const isInView = useInView(ref, { once: true })

  const nameAnimations: MotionProps = {
    initial: { opacity: 0 },
    transition: { type: 'spring', mass: 0.5 },
    animate: { x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }
  }

  return { nameAnimations }
}
