import { HTMLAttributes, ReactNode } from 'react'

export interface INavbarItem extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
}
