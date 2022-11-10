import { TButtonProps } from '@app/types/react.types'

import { ReactNode } from 'react'

export interface ITooltipProps {
  open?: boolean
  trigger: ReactNode
  content: ReactNode
  sideOffset?: number
  variant?: 'success' | 'error' | 'default'
  onTriggerClick?: TButtonProps['onClick']
}
