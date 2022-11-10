import { NavbarList, Social, Style } from './styles'
import { INavbarForwarded, INavbarProps } from './types'

import { NavbarItem } from './NavbarItem'

import { forwardRef } from 'react'

export const Navbar = forwardRef<INavbarForwarded, INavbarProps>(
  ({ items, ...props }, ref) => (
    <Style ref={ref} {...props}>
      <NavbarList id='nav'>
        {items?.map(({ icon, onClick, label, href }) => (
          <NavbarItem
            key={label}
            label={label}
            href={`#${href}`}
            onItemClick={() => onClick && onClick()}
          >
            {icon}
          </NavbarItem>
        ))}
      </NavbarList>

      <Social visible='biggerMd' />
    </Style>
  )
)

Navbar.displayName = 'Navbar'
