import { Avatar, Name, Occupation, Social, Style } from './styles'
import { IHeaderForwarded, IHeaderProps } from './types'

import { ChangeTheme } from '@app/components/molecules/ChangeTheme'

import Image from 'next/image'
import { forwardRef } from 'react'

export const Header = forwardRef<IHeaderForwarded, IHeaderProps>(
  ({ ...props }, ref) => (
    <Style ref={ref} {...props}>
      <Social />

      <ChangeTheme />

      <Avatar>
        <Image
          priority={true}
          layout='fill'
          objectFit='cover'
          src='/avatar.png'
          alt='Foto de perfil'
        />
      </Avatar>

      <Name>Miguel Andrade Barreto</Name>

      <Occupation>Desenvolvedor Web</Occupation>
    </Style>
  )
)

Header.displayName = 'Header'
