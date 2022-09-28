import { useProjects } from './logic'
import { Header, Style } from './styles'

import { Project } from './Project'

import { theme } from '@app/styles'

import { HorizontalList } from '@app/components/molecules/HorizontalList'
import { Slider } from '@app/components/molecules/Slider'

import { remToPxNumber } from '@app/utils/pxAndRem'

import { forwardRef } from 'react'

export const Projects = forwardRef<any, any>((props, ref) => {
  const { projects, projectsRef, onProjectChange, project } = useProjects()

  return (
    <Style ref={ref} {...props}>
      <Header>
        <Slider
          name='project'
          value={project}
          stepsQuantity={projects.length}
          onValueChange={onProjectChange}
          thumbSize={remToPxNumber(theme.sizes[8].value)}
          stepPadding={remToPxNumber(theme.sizes[2].value)}
        />
      </Header>

      <HorizontalList ref={projectsRef}>
        {projects.map(data => (
          <Project key={data.name} {...data} />
        ))}
      </HorizontalList>
    </Style>
  )
})

Projects.displayName = 'Projects'
