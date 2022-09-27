import { NavbarList, Style } from './styles'
import { INavbarProps } from './types'

import { NavbarItem } from './NavbarItem'

import { forwardRef } from 'react'

export const Navbar = forwardRef<any, INavbarProps>(
  ({ items, ...props }, ref) => (
    <Style ref={ref} {...props}>
      <NavbarList>
        {items?.map(({ icon, onClick }, index) => (
          <NavbarItem onButtonClick={onClick} key={index}>
            {icon}
          </NavbarItem>
        ))}
      </NavbarList>
    </Style>
  )
)

Navbar.displayName = 'Navbar'
