import { styled } from '@app/styles'

export const Style = styled('span', {
  variants: {
    visibleInScreen: {
      false: {
        display: 'block',

        width: 0,
        height: 0,
        opacity: 0
      },
      true: {}
    }
  }
})
