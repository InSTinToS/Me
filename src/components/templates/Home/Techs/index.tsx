import { Filter, Input, Search, Style, TechsList } from './styles'
import { ITechsProps } from './types'

import { TechCard } from './TechCard'
import { ITechCardProps } from './TechCard/types'

const techs: ITechCardProps[] = [
  {
    name: 'Styled Components1',
    path: '/react.png',
    progress: 'high'
  },
  {
    name: 'Styled Components2',
    path: '/react.png',
    progress: 'high'
  },
  {
    name: 'Styled Components3',
    path: '/react.png',
    progress: 'high'
  },
  {
    name: 'Styled Components4',
    path: '/react.png',
    progress: 'high'
  },
  {
    name: 'Styled Components5',
    path: '/react.png',
    progress: 'high'
  },
  {
    name: 'Styled Components6',
    path: '/react.png',
    progress: 'high'
  },
  {
    name: 'Styled Components7',
    path: '/react.png',
    progress: 'high'
  }
]

export const Techs = ({ customTheme }: ITechsProps) => {
  return (
    <Style>
      <Filter css={{ borderBottomColor: customTheme.contrast }}>
        <Search css={{ fill: customTheme.contrast }} />

        <Input
          type='text'
          placeholder='Pesquisar tecnologia...'
          color={customTheme.contrast === '#ffffff' ? 'white' : 'black'}
        />
      </Filter>

      <TechsList>
        {techs.map(tech => (
          <TechCard {...tech} key={tech.name} />
        ))}
      </TechsList>
    </Style>
  )
}
