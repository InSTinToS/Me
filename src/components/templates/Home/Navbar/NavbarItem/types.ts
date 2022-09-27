import { TButtonProps } from '@app/types/react.types'

import { HTMLAttributes, ReactNode } from 'react'

export interface INavbarItem extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
  onButtonClick?: TButtonProps['onClick']
}
