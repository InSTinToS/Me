import { useProjects } from './logic'
import { Header, Style } from './styles'
import { IProjectsProps } from './types'

import Project from './Project'

import { theme } from '@app/styles'

import { HorizontalList } from '@app/components/molecules/HorizontalList'
import { Slider } from '@app/components/molecules/Slider'

import { remToPxNumber } from '@app/utils/pxAndRem'

import { forwardRef } from 'react'

export const Projects = forwardRef<any, IProjectsProps>(
  ({ projects, ...props }, ref) => {
    const {
      projectsRef,
      projectsAnimations,
      onProjectChange,
      project,
      isInView
    } = useProjects({ ref })

    return (
      <Style ref={ref} {...props} {...projectsAnimations}>
        <Header>
          <Slider
            name='project'
            value={project}
            onSliderChange={onProjectChange}
            stepsQuantity={projects?.length || 0}
            thumbSize={remToPxNumber(theme.sizes[8].value)}
            stepPadding={remToPxNumber(theme.sizes[2].value)}
          />
        </Header>

        {projects && isInView && (
          <HorizontalList ref={projectsRef}>
            {projects.map(data => (
              <Project key={data.name} {...data} />
            ))}
          </HorizontalList>
        )}
      </Style>
    )
  }
)

Projects.displayName = 'Projects'
