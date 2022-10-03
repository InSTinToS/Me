import { styled } from '@app/styles'

import { Loading as LoadingIcon } from '@app/components/atoms/Icon/icons/Loading'

import { keyframes } from '@stitches/react'

const rotating = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const Loading = styled(LoadingIcon, {
  fill: '$white',
  size: '$13',
  animation: `${rotating} 1.5s linear infinite`
})

export const Style = styled('main', {
  zIndex: 1000,
  flexCenter: 'row',
  windowSize: '100',

  bg: '$primary'
})
