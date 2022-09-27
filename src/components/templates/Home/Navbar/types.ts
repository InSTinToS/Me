import { TButtonProps } from '@app/types/react.types'

import { HTMLAttributes, ReactNode } from 'react'

export interface INavbarProps extends HTMLAttributes<HTMLDivElement> {
  items?: {
    icon: ReactNode
    onClick?: TButtonProps['onClick']
  }[]
}
