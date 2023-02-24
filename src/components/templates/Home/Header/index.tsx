import { useHeader } from './logic'
import {
  Avatar,
  ChangeTheme,
  MobileChangeTheme,
  Name,
  Occupation,
  Social,
  Style
} from './styles'
import { IHeaderForwarded, IHeaderProps } from './types'

import { Abstract } from './Abstract'

import { forwardRef } from 'react'

export const Header = forwardRef<IHeaderForwarded, IHeaderProps>(
  ({ ...props }, ref) => {
    const { nameAnimations } = useHeader({ ref })

    return (
      <Style ref={ref} id='header' {...props} >
        <ChangeTheme />

        <Name {...nameAnimations} tabIndex={0}>
          Miguel Andrade Barreto
        </Name>

        <Occupation {...nameAnimations} tabIndex={0}>
          Desenvolvedor Web
        </Occupation>

        <Abstract />

        <Avatar />

        <Social>
          <li>
            <MobileChangeTheme />
          </li>
        </Social>
      </Style>
    )
  }
)

Header.displayName = 'Header'
