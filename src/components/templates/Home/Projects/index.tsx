import { useProjects } from './logic'
import { Header, Style } from './styles'
import { IProjectsProps } from './types'

import { theme } from '@app/styles'

import { HorizontalList } from '@app/components/molecules/HorizontalList'
import { Slider } from '@app/components/molecules/Slider'

import { remToPxNumber } from '@app/utils/pxAndRem'

import dynamic from 'next/dynamic'
import { forwardRef } from 'react'

const DynamicProject = dynamic(() => import('./Project') as any, {
  suspense: true
})

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
              <DynamicProject key={data.name} {...data} />
            ))}
          </HorizontalList>
        )}
      </Style>
    )
  }
)

Projects.displayName = 'Projects'
