import { IUseHeaderParams } from './types'

import { MotionProps, useInView } from 'framer-motion'

export const useHeader = ({ ref }: IUseHeaderParams) => {
  const isInView = useInView(ref, { once: true })

  const avatarAnimations: MotionProps = {
    transition: { type: 'spring', mass: 0.8 },
    initial: { opacity: 0 },
    animate: { x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }
  }

  const nameAnimations: MotionProps = {
    transition: { type: 'spring', mass: 0.5 },
    initial: { opacity: 0 },
    animate: { x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }
  }

  return { avatarAnimations, nameAnimations }
}
