import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useRef
} from 'react'

import mobileRegex from 'utils/mobileRegex'

import useWindowDimensions from 'hooks/useWindowDimensions'

import { motion, useMotionValue, useTransform } from 'framer-motion'

interface PerspectiveProps {
  degree?: number
  children: ReactNode
  onlyAroundChildren?: boolean
}

const Perspective = ({
  children,
  degree = 22,
  onlyAroundChildren = false
}: PerspectiveProps) => {
  const { innerHeight, innerWidth } = useWindowDimensions()

  const isMobile = useRef<boolean>(null)
  const perspectiveRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const childrenWidth = perspectiveRef.current?.clientWidth
  const childrenHeight = perspectiveRef.current?.clientHeight

  const rotateY = useTransform(
    x,
    [0, onlyAroundChildren ? childrenWidth : innerWidth],
    [-degree, degree]
  )
  const rotateX = useTransform(
    y,
    [0, onlyAroundChildren ? childrenHeight : innerHeight],
    [degree, -degree]
  )

  const onMouseLeave: MouseEventHandler<HTMLDivElement> = () => {
    setTimeout(() => {
      rotateX.set(0)
      rotateY.set(0)
    }, 500)
  }

  const onMouseOver: MouseEventHandler<HTMLDivElement> = event => {
    const rect = event.currentTarget.getBoundingClientRect()

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
  }

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      x.set(event.x)
      y.set(event.y)
    },
    [x, y]
  )

  useEffect(() => {
    isMobile.current = mobileRegex.test(window.navigator.userAgent)

    !onlyAroundChildren && window.addEventListener('mousemove', onMouseMove)

    return () => {
      !onlyAroundChildren &&
        window.removeEventListener('mousemove', onMouseMove)
    }
  }, [onMouseMove, onlyAroundChildren])

  return (
    <motion.div
      ref={perspectiveRef}
      className='Perspective'
      onMouseMove={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: isMobile.current ? 0 : rotateX,
        rotateY: isMobile.current ? 0 : rotateY
      }}
    >
      {children}
    </motion.div>
  )
}

export default Perspective
