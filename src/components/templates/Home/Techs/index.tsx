import { useTechs } from './logic'
import { Filter, Input, Search, Style, TechsList } from './styles'
import { ITechsProps } from './types'

import { TechCard } from './TechCard'

import { forwardRef } from 'react'

export const Techs = forwardRef<any, ITechsProps>(({ customTheme }, ref) => {
  const { onSearchChange, techList } = useTechs()

  return (
    <Style ref={ref}>
      <Filter css={{ borderBottomColor: customTheme.contrast }}>
        <Search css={{ fill: customTheme.contrast }} />

        <Input
          type='text'
          onChange={onSearchChange}
          placeholder='Pesquisar tecnologia...'
          color={customTheme.contrast === '#ffffff' ? 'white' : 'black'}
        />
      </Filter>

      <TechsList>
        {techList.map(tech => (
          <TechCard {...tech} key={tech.name} />
        ))}
      </TechsList>
    </Style>
  )
})

Techs.displayName = 'Techs'
