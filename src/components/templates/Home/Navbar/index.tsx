import { NavbarList, Social, Style } from './styles'
import { INavbarForwarded, INavbarProps } from './types'

import { NavbarItem } from './NavbarItem'

import { forwardRef } from 'react'

export const Navbar = forwardRef<INavbarForwarded, INavbarProps>(
  ({ items, ...props }, ref) => (
    <Style ref={ref} {...props}>
      <NavbarList>
        {items?.map(({ icon, onClick, label }) => (
          <NavbarItem label={label} onButtonClick={onClick} key={label}>
            {icon}
          </NavbarItem>
        ))}

        <Social />
      </NavbarList>
    </Style>
  )
)

Navbar.displayName = 'Navbar'
