/* eslint-disable @next/next/no-img-element */
import { useHeader } from './logic'
import { Abstract, Avatar, Name, Occupation, Social, Style } from './styles'
import { IHeaderForwarded, IHeaderProps } from './types'

import { ChangeTheme } from '@app/components/molecules/ChangeTheme'

import { forwardRef } from 'react'

export const Header = forwardRef<IHeaderForwarded, IHeaderProps>(
  ({ ...props }, ref) => {
    const { avatarAnimations, toggleAvatar, nameAnimations } = useHeader({
      ref
    })

    return (
      <Style ref={ref} {...props}>
        <Social />

        <ChangeTheme />

        <Avatar {...avatarAnimations} onClick={() => toggleAvatar()}>
          <img
            alt='Avatar'
            src='/avatar2.png'
            style={{
              position: 'absolute',
              transform:
                'perspective(10000px) translateZ(-1px) rotateY(-180deg)'
            }}
          />

          <img
            alt='Foto de perfil'
            src='/avatar-circle.png'
            style={{
              position: 'absolute',
              transform: 'perspective(10000px) translateZ(1px)'
            }}
          />
        </Avatar>

        <Name {...nameAnimations}>Miguel Andrade Barreto</Name>

        <Occupation {...nameAnimations}>Desenvolvedor Web</Occupation>

        <Abstract>
          Cursando Engenharia da Computação (8° Semestre), estudo
          desenvolvimento web, mais focado em <b>Front-end</b> com <b>React</b>{' '}
          e <b>Next</b>. Durante a faculdade, fiz o bootcamp Ignite da{' '}
          <a
            target='_blank'
            rel='noreferrer'
            aria-label='Rocketseat'
            href='https://www.rocketseat.com.br/'
          >
            <i>
              <b>Rocketseat</b>
            </i>
          </a>
          , participei de um projeto de iniciação científica durante 3 anos
          (350R$/mês) e criei alguns projetos para praticar meus conhecimentos{' '}
          <b>Full-stack</b>.
        </Abstract>
      </Style>
    )
  }
)

Header.displayName = 'Header'
