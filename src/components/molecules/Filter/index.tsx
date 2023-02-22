import { Style, Search, Input } from './styles'

import { TInputProps } from '@app/types/react.types'

interface IFilterProps {
  onSearchChange: TInputProps['onChange']
}

export const Filter = ({ onSearchChange, ...props }: IFilterProps) => (
  <Style {...props}>
    <Search />

    <Input
      type='text'
      onChange={onSearchChange}
      placeholder='Filtrar tecnologias conhecidas...'
    />
  </Style>
)
