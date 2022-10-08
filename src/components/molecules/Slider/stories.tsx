import { Slider } from '.'
import { ISliderProps } from './types'

import { TMeta, TStory } from '@app/types/storybook.types'

export default {
  component: Slider,
  title: 'Molecules/Slider',
  parameters: {
    docs: { description: { component: 'Slider component around Radix Slider' } }
  }
} as TMeta<typeof Slider>

const Template: TStory<typeof Slider> = (args: ISliderProps) => (
  <div style={{ width: '80vh' }}>
    <Slider {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  min: 0,
  max: 100,
  thumbSize: 32,
  stepPadding: 8,
  stepsQuantity: 5,
  labels: ['First', 'Second', 'Third', 'Fourth', 'Fifth']
}
