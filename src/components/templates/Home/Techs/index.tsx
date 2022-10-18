import { useTechs } from './logic'
import { Filter, Input, Search, Style, TechsList } from './styles'
import { ITechsProps } from './types'

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
        <BackToNav />

        <Filter css={{ borderBottomColor: themeState.contrast }}>
          <Search css={{ fill: themeState.contrast }} />

          <Input
            type='text'
            onChange={onSearchChange}
            color={themeState.contrastName}
            placeholder='Pesquisar tecnologia...'
          />
        </Filter>

        <TechsList color={themeState.contrastName}>
          {techList?.map(tech => (
            <TechCard {...tech} key={tech.name} />
          ))}
        </TechsList>
      </Style>
    )
  }
)

Techs.displayName = 'Techs'
