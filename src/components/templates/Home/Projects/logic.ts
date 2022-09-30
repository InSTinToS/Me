import { IHorizontalListForwarded } from '@app/components/molecules/HorizontalList/types'

import { projects } from '@public/projects'

import { useRef, useState } from 'react'

export const useProjects = () => {
  const projectsRef = useRef<IHorizontalListForwarded>(null)
  const [project, setProject] = useState([0])

  const onProjectChange = (e: any) => {
    setProject(prev => {
      if (prev[0] !== e[0])
        projectsRef.current?.paginate(e[0] / 100 / (projects.length - 1))

      return e
    })
  }

  return { projects, project, onProjectChange, projectsRef }
}
