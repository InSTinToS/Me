import { NavbarList, Style } from './styles'
import { INavbarProps } from './types'

import { NavbarItem } from './NavbarItem'

import { House } from '@app/components/atoms/Icon/icons/House'
import { Phone } from '@app/components/atoms/Icon/icons/Phone'
import { Tech } from '@app/components/atoms/Icon/icons/Tech'

import { forwardRef } from 'react'

export const Navbar = forwardRef<any, INavbarProps>(({ ...props }, ref) => (
  <Style ref={ref} {...props}>
    <NavbarList>
      <NavbarItem>
        <House />
      </NavbarItem>

      <NavbarItem>
        <Tech />
      </NavbarItem>

      <NavbarItem id='phone'>
        <Phone />
      </NavbarItem>
    </NavbarList>
  </Style>
))

Navbar.displayName = 'Navbar'
