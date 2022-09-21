import {
  Avatar,
  ColorPicker,
  Gmail,
  Name,
  Navbar,
  NavbarList,
  Occupation,
  Social,
  Style
} from './styles'
import { IHeaderProps } from './types'

import { NavbarItem } from './NavbarItem'

import { Github } from '@app/components/atoms/Icon/icons/Github'
import { House } from '@app/components/atoms/Icon/icons/House'
import { Linkedin } from '@app/components/atoms/Icon/icons/Linkedin'
import { Phone } from '@app/components/atoms/Icon/icons/Phone'
import { Tech } from '@app/components/atoms/Icon/icons/Tech'
import { Whatsapp } from '@app/components/atoms/Icon/icons/Whatsapp'

export const Header = ({ customTheme, onColorChange }: IHeaderProps) => (
  <Style>
    <Social>
      <li>
        <Gmail />
      </li>

      <li>
        <Whatsapp />
      </li>

      <li>
        <Linkedin />
      </li>

      <li>
        <Github />
      </li>

      <ColorPicker
        type='color'
        onChange={onColorChange}
        defaultValue={customTheme.color}
      />
    </Social>

    <Avatar />

    <Name>Miguel Andrade Barreto</Name>

    <Occupation>Desenvolvedor Web</Occupation>

    <Navbar>
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
    </Navbar>
  </Style>
)
