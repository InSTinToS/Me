import { IHorizontalListForwarded } from '@app/components/molecules/HorizontalList/types'

import { projects } from '@app/services/staticData/projects'

import { useRef, useState } from 'react'

export const useProjects = () => {
  const projectsRef = useRef<IHorizontalListForwarded>(null)
  const [project, setProject] = useState([0])

  const onProjectChange = ({ value, index }: any) => {
    setProject(prev => {
      if (prev[0] !== value) projectsRef.current?.paginate(index)

      return value
    })
  }

  return { projects, project, onProjectChange, projectsRef }
}
