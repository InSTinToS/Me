import { styled } from '@app/styles'

export const Style = styled('span', {
  variants: {
    visibleInScreen: {
      false: {
        display: 'inline-block',

        width: 0,
        opacity: 0
      },
      true: {}
    }
  }
})
