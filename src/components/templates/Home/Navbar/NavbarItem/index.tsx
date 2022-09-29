import { Button, Label, Style } from './styles'
import { INavbarItem } from './types'

export const NavbarItem = ({
  label,
  children,
  onButtonClick,
  ...props
}: INavbarItem) => (
  <Style {...props}>
    <Button type='button' onClick={onButtonClick}>
      {children}

      <Label>{label}</Label>
    </Button>
  </Style>
)
