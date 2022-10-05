import { IUseProjectsParams } from './types'

import { IHorizontalListForwarded } from '@app/components/molecules/HorizontalList/types'

import { MotionProps, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export const useProjects = ({ ref }: IUseProjectsParams) => {
  const projectsRef = useRef<IHorizontalListForwarded>(null)
  const isInView = useInView(ref, { once: true })
  const [project, setProject] = useState([0])

  const projectsAnimations: MotionProps = {
    transition: { type: 'spring' },
    initial: { opacity: 0, y: 100 },
    animate: { y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }
  }

  const onProjectChange = ({ value, index }: any) => {
    setProject(prev => {
      if (prev[0] !== value[0]) projectsRef.current?.paginate(index)

      return value
    })
  }

  return { project, onProjectChange, projectsRef, projectsAnimations, isInView }
}
