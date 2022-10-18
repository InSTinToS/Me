import { ItemLink, Label, Style } from './styles'
import { INavbarItem } from './types'

export const NavbarItem = ({
  href,
  label,
  children,
  onItemClick,
  ...props
}: INavbarItem) => (
  <Style {...props}>
    <ItemLink
      href={href}
      tabIndex={0}
      aria-label={label}
      onKeyPressCapture={e => {
        if (e.key === ' ' && onItemClick) onItemClick()
      }}
      onMouseDown={e => {
        e.preventDefault()
        onItemClick && onItemClick()
      }}
    >
      {children}

      <Label>{label}</Label>
    </ItemLink>
  </Style>
)
