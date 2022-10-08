import { IUseAnimationsParams } from './types'

import { transition } from '@app/styles/transition'

import { AnimatePresenceProps, MotionProps } from 'framer-motion'

export const useAnimations = ({ ulWidth, pageInfo }: IUseAnimationsParams) => {
  const liVariants = {
    enter: (direction: number) => ({
      opacity: 0.5,
      x: direction > 0 ? ulWidth : -ulWidth
    }),
    center: { x: 0, zIndex: 1, opacity: 1 },
    exit: (direction: number) => ({
      opacity: 0.5,
      x: direction > 0 ? -ulWidth : ulWidth
    })
  }

  const liAnimations: MotionProps = {
    exit: 'exit',
    initial: 'enter',
    animate: 'center',
    variants: liVariants,
    transition: transition,
    custom: pageInfo.page.dir
  }

  const presenceAnimations: AnimatePresenceProps = {
    initial: false,
    exitBeforeEnter: true,
    custom: pageInfo.page.dir
  }

  return { liAnimations, presenceAnimations }
}
