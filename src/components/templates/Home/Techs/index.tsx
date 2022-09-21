import { Filter, Input, Search, Style } from './styles'
import { ITechsProps } from './types'

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
    </Style>
  )
}
