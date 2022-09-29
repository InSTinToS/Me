import { Avatar, Name, Occupation, Social, Style } from './styles'
import { IHeaderProps } from './types'

import { ChangeTheme } from '@app/components/molecules/ChangeTheme'

import { forwardRef } from 'react'

export const Header = forwardRef<any, IHeaderProps>(({ ...props }, ref) => (
  <Style ref={ref} {...props}>
    <Social />

    <ChangeTheme />

    <Avatar />

    <Name>Miguel Andrade Barreto</Name>

    <Occupation>Desenvolvedor Web</Occupation>
  </Style>
))

Header.displayName = 'Header'
