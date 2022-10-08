import { HorizontalList } from '.'
import { IHorizontalListForwarded, IHorizontalListProps } from './types'

import { TMeta, TStory } from '@app/types/storybook.types'

import { useRef } from 'react'

export default {
  component: HorizontalList,
  title: 'Utilities/HorizontalList',
  parameters: {
    docs: {
      description: { component: 'Only logic of horizontal animated list' }
    }
  },
  argTypes: {
    ref: { description: 'Ref hook to use exported methods' },
    refPaginate: {
      description: 'function to change page by "left", "right" or index'
    }
  }
} as TMeta<typeof HorizontalList>

const Template: TStory<typeof HorizontalList> = (
  args: IHorizontalListProps
) => {
  const ref = useRef<IHorizontalListForwarded>(null)

  return (
    <>
      <HorizontalList ref={ref} {...args}>
        <span>1</span>

        <span>2</span>

        <span>3</span>
      </HorizontalList>

      <button type='button' onClick={() => ref.current?.paginate('left')}>
        Left
      </button>

      <button
        type='button'
        style={{ marginLeft: '24px' }}
        onClick={() => ref.current?.paginate('right')}
      >
        Right
      </button>
    </>
  )
}

export const Example = Template.bind({})

Example.args = {}
