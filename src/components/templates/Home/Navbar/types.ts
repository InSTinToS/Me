import { TButtonProps } from '@app/types/react.types'

import { HTMLAttributes, ReactNode } from 'react'

export interface INavbarProps extends HTMLAttributes<HTMLDivElement> {
  items?: {
    label: string
    icon: ReactNode
    onClick?: TButtonProps['onClick']
  }[]
}

export interface INavbarForwarded extends HTMLDivElement {}
