import { INavbarProps } from './Navbar/types'

import { House } from '@app/components/atoms/Icon/icons/House'
import { Phone } from '@app/components/atoms/Icon/icons/Phone'
import { Project } from '@app/components/atoms/Icon/icons/Project'
import { Tech } from '@app/components/atoms/Icon/icons/Tech'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { hexToRgba } from '@app/utils/colors'

import { useRef } from 'react'

export const useHome = () => {
  const techsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const themeState = useAppSelector(({ theme }) => theme)

  const navItems: INavbarProps['items'] = [
    {
      icon: <House />,
      label: 'Início',
      href: 'header',
      onClick: () => globalThis.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      icon: <Phone />,
      label: 'Contato',
      href: 'header',
      onClick: () => globalThis.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
      icon: <Tech />,
      label: 'Tecnologias',
      href: 'techs',
      onClick: () => techsRef.current?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: <Project />,
      label: 'Projetos',
      href: 'projects',
      onClick: () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  ]

  const bgGradient = `
    linear-gradient(32.87deg, ${themeState.color} 20%, 
    ${hexToRgba(themeState.color, 0.7)} 80%,
    ${hexToRgba(themeState.color, 0.5)} 100%);
  `

  return { techsRef, navItems, projectsRef, bgGradient }
}
