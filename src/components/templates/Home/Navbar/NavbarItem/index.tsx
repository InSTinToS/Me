import { Style } from './styles'
import { INavbarItem } from './types'

export const NavbarItem = ({
  children,
  onButtonClick,
  ...props
}: INavbarItem) => (
  <Style {...props}>
    <button type='button' onClick={onButtonClick}>
      {children}
    </button>
  </Style>
)
