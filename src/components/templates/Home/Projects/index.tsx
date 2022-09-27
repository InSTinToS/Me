import { useProjects } from './logic'
import { Header, Style } from './styles'

import { Project } from './Project'

import { theme } from '@app/styles'

import { Slider } from '@app/components/atoms/Slider'

import { remToPxNumber } from '@app/utils/pxAndRem'

import { forwardRef } from 'react'

export const Projects = forwardRef<any, any>((props, ref) => {
  const { projects, onProjectChange, project } = useProjects()

  return (
    <Style ref={ref} {...props}>
      <Header>
        <Slider
          name='project'
          value={project}
          stepsQuantity={5}
          onValueChange={onProjectChange}
          thumbSize={remToPxNumber(theme.sizes[8].value)}
          stepPadding={remToPxNumber(theme.sizes[2].value)}
        />
      </Header>

      {projects.map(data => (
        <Project key={data.name} {...data} />
      ))}
    </Style>
  )
})

Projects.displayName = 'Projects'
