import { useProjects } from './logic'
import { Header, Style } from './styles'
import { IProjectsProps } from './types'

import Project from './Project'

import { theme } from '@app/styles'

import { BackToNav } from '@app/components/atoms/BackToNav'

import { Slider } from '@app/components/molecules/Slider'

import { HorizontalList } from '@app/components/utilities/HorizontalList'

import { remToPxNumber } from '@app/utils/pxAndRem'

import { forwardRef } from 'react'

export const Projects = forwardRef<any, IProjectsProps>(
  ({ projects, ...props }, ref) => {
    const {
      project,
      isInView,
      projectsRef,
      projectsAnimations,
      onProjectChange
    } = useProjects({ ref })

    return (
      <Style id='projects' ref={ref} {...props} {...projectsAnimations}>
        <BackToNav />

        <Header>
          <Slider
            name='project'
            value={project}
            onSliderChange={onProjectChange}
            stepsQuantity={projects?.length || 0}
            labels={projects?.map(project => project.name)}
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
