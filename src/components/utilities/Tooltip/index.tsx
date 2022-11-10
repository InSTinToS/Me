import { Arrow, Content, Trigger } from './styles'
import { ITooltipProps } from './types'

import { theme } from '@app/styles'

import { remToPxNumber } from '@app/utils/pxAndRem'

import * as RadixTooltip from '@radix-ui/react-tooltip'
import React from 'react'

export const Tooltip = ({
  open,
  content,
  trigger,
  onTriggerClick,
  variant = 'default',
  sideOffset = remToPxNumber(theme.sizes['2'].value),
  ...props
}: ITooltipProps) => (
  <RadixTooltip.Provider delayDuration={0} disableHoverableContent>
    <RadixTooltip.Root open={open} {...props}>
      <Trigger type='button' onClick={onTriggerClick}>
        {trigger}
      </Trigger>

      <RadixTooltip.Portal>
        <Content
          align='start'
          hideWhenDetached
          variant={variant}
          sideOffset={sideOffset}
        >
          {content}
          <Arrow variant={variant} />
        </Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.Provider>
)
