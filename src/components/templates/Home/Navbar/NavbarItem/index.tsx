import { Style } from './styles'
import { INavbarItem } from './types'

export const NavbarItem = ({ children, ...props }: INavbarItem) => (
  <Style {...props}>
    <button type='button'>{children}</button>
  </Style>
)
