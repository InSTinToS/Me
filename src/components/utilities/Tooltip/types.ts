import { TButtonProps } from '@app/types/react.types'

import { ReactNode } from 'react'

export interface ITooltipProps {
  trigger: ReactNode
  content: ReactNode
  sideOffset?: number
  onTriggerClick?: TButtonProps['onClick']
}
