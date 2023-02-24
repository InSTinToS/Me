import { useTechs } from './logic'
import { Content, Style, TechsList, Bg } from './styles'
import { ITechsProps } from './types'
import Spline from '@splinetool/react-spline';

import { Filter } from "@app/components/molecules/Filter"

import { TechCard } from './TechCard'

import { BackToNav } from '@app/components/atoms/BackToNav'

import { forwardRef } from 'react'

export const Techs = forwardRef<any, ITechsProps>(
  ({ techs, ...props }, ref) => {
    const { onSearchChange, techList, themeState, techsAnimations } = useTechs({
      ref,
      techs
    })

    return (
      <Style id='techs' ref={ref} {...techsAnimations} {...props}>

        <Content>
          <BackToNav />

          <Filter onSearchChange={onSearchChange} />

          <TechsList
            tabIndex={0}
            color={themeState.contrastName}
            aria-label='Tecnologias conhecidas'
          >
            {techList?.map(tech => (
              <TechCard {...tech} key={tech.name} />
            ))}
          </TechsList>
        </Content>

        <Bg />

        <Spline
          style={{ position: 'absolute', top: 0, zIndex: -1, width: '100vw', height: '100vh' }}
          scene="https://prod.spline.design/e1Bw4D9NWMo7PxfK/scene.splinecode"
        />
      </Style>
    )
  }
)

Techs.displayName = 'Techs'
