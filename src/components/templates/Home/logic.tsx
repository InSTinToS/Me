import { ICustomThemeState } from './types'

import { INavbarProps } from './Navbar/types'

import { theme } from '@app/styles'

import { House } from '@app/components/atoms/Icon/icons/House'
import { Phone } from '@app/components/atoms/Icon/icons/Phone'
import { Project } from '@app/components/atoms/Icon/icons/Project'
import { Tech } from '@app/components/atoms/Icon/icons/Tech'

import { TButtonProps, TInputProps } from '@app/types/react.types'

import { blackOrWhiteByContrast, hexToRgba } from '@app/utils/colors'

import { useRef, useState } from 'react'

export const useHome = () => {
  const initialColor = theme.colors.primary.value

  const [customTheme, setCustomTheme] = useState<ICustomThemeState>({
    color: initialColor,
    contrast: blackOrWhiteByContrast(initialColor)
  })

  const techsRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const navItems: INavbarProps['items'] = [
    {
      icon: <House />,
      label: 'Home',
      onClick: () => {
        globalThis.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    {
      icon: <Phone />,
      label: 'Contato',
      onClick: () => {
        globalThis.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    {
      icon: <Tech />,
      label: 'Tecnologia',
      onClick: () => {
        techsRef.current?.scrollIntoView({ behavior: 'smooth' })
      }
    },
    {
      icon: <Project />,
      label: 'Projeto',
      onClick: () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  ]

  const onColorChange: TInputProps['onChange'] = e => {
    const newColor = e.currentTarget.value

    setCustomTheme({
      color: newColor,
      contrast: blackOrWhiteByContrast(newColor)
    })
  }

  const onResetClick: TButtonProps['onClick'] = () => {
    setCustomTheme({
      color: initialColor,
      contrast: blackOrWhiteByContrast(initialColor)
    })
  }

  const bgGradient = `
    linear-gradient(32.87deg, ${customTheme.color} 20%, 
    ${hexToRgba(customTheme.color, 0.7)} 80%,
    ${hexToRgba(customTheme.color, 0.5)} 100%);
  `

  return {
    techsRef,
    navItems,
    projectsRef,
    bgGradient,
    customTheme,
    onResetClick,
    onColorChange
  }
}
