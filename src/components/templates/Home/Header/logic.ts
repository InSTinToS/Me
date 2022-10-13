import { IUseHeaderParams } from './types'

import { MotionProps, useInView } from 'framer-motion'
import { useState } from 'react'

export const useHeader = ({ ref }: IUseHeaderParams) => {
  const [showAvatar, setShowAvatar] = useState(true)

  const toggleAvatar = () => {
    setShowAvatar(prev => !prev)
  }

  const isInView = useInView(ref, { once: true })

  const avatarAnimations: MotionProps = {
    initial: { opacity: 0 },
    transition: { type: 'spring', mass: 0.8 },
    animate: {
      transformStyle: 'preserve-3d',
      rotateY: showAvatar ? 0 : 180,
      x: isInView ? 0 : -100,
      opacity: isInView ? 1 : 0
    }
  }

  const nameAnimations: MotionProps = {
    initial: { opacity: 0 },
    transition: { type: 'spring', mass: 0.5 },
    animate: { x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }
  }

  return { avatarAnimations, nameAnimations, toggleAvatar, showAvatar }
}
