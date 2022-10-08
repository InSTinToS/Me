import { Tooltip } from '.'
import { ITooltipProps } from './types'

import { TMeta, TStory } from '@app/types/storybook.types'

export default {
  component: Tooltip,
  title: 'Utilities/Tooltip',
  parameters: {
    docs: {
      description: { component: 'Tooltip component around Radix Tooltip' }
    }
  },
  argTypes: {
    content: { description: 'Component inside balloon' },
    trigger: { description: 'Component to trigger balloon' },
    sideOffset: { description: 'Distance between content and trigger' }
  }
} as TMeta<typeof Tooltip>

const Template: TStory<typeof Tooltip> = (args: ITooltipProps) => (
  <Tooltip {...args} />
)

export const Example = Template.bind({})

Example.args = { content: 'Content', trigger: 'Trigger', sideOffset: 8 }
