import { HTMLAttributes, ReactNode } from 'react'

export interface INavbarItem extends HTMLAttributes<HTMLLIElement> {
  href?: string
  label: string
  children: ReactNode
  onItemClick?: () => void
}
