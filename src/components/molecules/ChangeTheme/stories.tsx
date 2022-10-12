import { ChangeTheme } from '.'

import { TMeta, TStory } from '@app/types/storybook.types'

export default {
  component: ChangeTheme,
  title: 'Molecules/ChangeTheme',
  parameters: {
    docs: {
      description: { component: 'Form to change theme and reset do default' }
    }
  }
} as TMeta<typeof ChangeTheme>

const Template: TStory<typeof ChangeTheme> = () => <ChangeTheme />

export const Default = Template.bind({})
