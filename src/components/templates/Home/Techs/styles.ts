import { styled, theme } from '@app/styles'
import { scrollbar } from '@app/styles/utils/scrollbar'

import { Search as SearchIcon } from '@app/components/atoms/Icon/icons/Search'

import { hexToRgba } from '@app/utils/colors'

export const TechsList = styled('ul', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',

  mt: '$8',
  maxHeight: '80vh',
  overflowY: 'scroll',

  variants: {
    color: {
      white: {
        ...scrollbar({
          track: { display: 'none' },
          thumb: { radius: '$5', width: '$1', color: '$white' }
        })
      },
      black: {
        ...scrollbar({
          track: { display: 'none' },
          thumb: { radius: '$5', width: '$1', color: '$black' }
        })
      }
    }
  }
})

export const Input = styled('input', {
  ml: '$4',
  width: '100%',

  fontSize: '$4',

  variants: {
    color: {
      white: {
        color: '$white',

        '&::placeholder': { color: hexToRgba(theme.colors.white.value, 0.7) }
      },
      black: {
        color: '$black',

        '&::placeholder': { color: hexToRgba(theme.colors.black.value, 0.7) }
      }
    }
  }
})

export const Search = styled(SearchIcon, {
  size: '$6',
  minSize: '$6'
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

  px: '$8',
  py: '$12',
  mx: 'auto',
  maxWidth: '$2xl',
  minHeight: '100vh'
})
