import { IHorizontalListForwarded } from '@app/components/molecules/HorizontalList/types'

import { useRef, useState } from 'react'

export const useProjects = () => {
  const projectsRef = useRef<IHorizontalListForwarded>(null)
  const [project, setProject] = useState([0])

  const onProjectChange = ({ value, index }: any) => {
    setProject(prev => {
      if (prev[0] !== value[0]) projectsRef.current?.paginate(index)

      return value
    })
  }

  return { project, onProjectChange, projectsRef }
}
