import { Social } from '.'

import { TMeta, TStory } from '@app/types/storybook.types'

export default {
  component: Social,
  title: 'Molecules/Social',
  parameters: {
    docs: { description: { component: 'List to show all social media links' } }
  }
} as TMeta<typeof Social>

const Template: TStory<typeof Social> = () => <Social />

export const Default = Template.bind({})
