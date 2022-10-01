import { Arrow, Content, Trigger } from './styles'
import { ITooltipProps } from './types'

import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

export const Tooltip = ({
  content,
  trigger,
  sideOffset,
  onTriggerClick
}: ITooltipProps) => (
  <RadixTooltip.Provider delayDuration={0} disableHoverableContent>
    <RadixTooltip.Root>
      <Trigger type='button' onClick={onTriggerClick}>
        {trigger}
      </Trigger>

      <RadixTooltip.Portal>
        <Content align='start' sideOffset={sideOffset}>
          {content}
          <Arrow />
        </Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)
