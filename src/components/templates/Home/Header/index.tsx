import { useHeader } from './logic'
import { Avatar, Name, Occupation, Social, Style } from './styles'
import { IHeaderForwarded, IHeaderProps } from './types'

import { Abstract } from './Abstract'

import { ChangeTheme } from '@app/components/molecules/ChangeTheme'

import { forwardRef } from 'react'

export const Header = forwardRef<IHeaderForwarded, IHeaderProps>(
  ({ ...props }, ref) => {
    const { nameAnimations } = useHeader({ ref })

    return (
      <Style ref={ref} id='header' {...props}>
        <Name {...nameAnimations} tabIndex={0}>
          Miguel Andrade Barreto
        </Name>

        <Occupation {...nameAnimations} tabIndex={0}>
          Desenvolvedor Web
        </Occupation>

        <Abstract />

        <Avatar />

        <Social visible='smallerMd' />

        <ChangeTheme />
      </Style>
    )
  }
)

Header.displayName = 'Header'
