import { HTMLAttributes, ReactNode } from 'react'

export interface INavbarProps extends HTMLAttributes<HTMLDivElement> {
  items?: {
    href: string
    label: string
    icon: ReactNode
    onClick?: () => void
  }[]
}

export interface INavbarForwarded extends HTMLDivElement {}
