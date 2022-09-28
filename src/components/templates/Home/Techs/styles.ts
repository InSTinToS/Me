import { styled } from '@app/styles'
import { scrollbar } from '@app/styles/utils/scrollbar'

import { Search as SearchIcon } from '@app/components/atoms/Icon/icons/Search'

import { hexToRgba } from '@app/utils/colors'

export const TechsList = styled('ul', {
  display: 'flex',
  justifyContent: 'space-evenly',
  flexWrap: 'wrap',

  mt: '$8',
  maxHeight: '80vh',
  overflowY: 'scroll',

  ...scrollbar({
    track: { display: 'none' },
    thumb: { radius: '$5', width: '$1', color: '#ffffff' }
  })
})

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

  px: '$4',
  py: '$12',

  '@sm': {
    px: '$10'
  },

  '@md': {
    px: '$16'
  }
})
