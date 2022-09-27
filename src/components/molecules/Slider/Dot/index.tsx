import { Background, Style } from './styles'
import { IDotProps } from './types'

export const Dot = ({ ...props }: IDotProps) => (
  <Style viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg' {...props}>
    <Background cx='6' cy='6' r='6' />
  </Style>
)
