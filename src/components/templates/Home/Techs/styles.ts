import { styled } from '@app/styles'

import { Search as SearchIcon } from '@app/components/atoms/Icon/icons/Search'

import { hexToRgba } from '@app/utils/colors'

export const Search = styled(SearchIcon, {
  size: '$6',
  minSize: '$6'
})

export const Input = styled('input', {
  ml: '$4',
  width: '100%',

  fontSize: '$4',

  variants: {
    color: {
      white: {
        color: '#ffffff',

        '&::placeholder': { color: hexToRgba('#ffffff', 0.7) }
      },
      black: {
        color: '#000000',

        '&::placeholder': { color: hexToRgba('#000000', 0.7) }
      }
    }
  }
})

export const Filter = styled('div', {
  display: 'flex',

  pb: '$3',
  px: '$2',

  borderBottom: 'solid 1px'
})

export const Style = styled('section', {
  position: 'relative',
  zIndex: 2,

  px: '$6',
  py: '$12',
  windowSize: 100
})
