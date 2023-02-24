import { styled } from '@app/styles'

import { Search as SearchIcon } from '@app/components/atoms/Icon/icons/Search'

export const Input = styled('input', {
  ml: '$6',
  width: '100%',
  fontSize: '$4',

  color: '$primary'
})

export const Search = styled(SearchIcon, {
  size: '$6',
  fill: '$primary'
})

export const Style = styled('div', {
  display: 'flex',

  padding: '$4 $6',
  borderRadius: '$8',

  width: '100%',
  maxWidth: '500px',

  borderBottom: 'solid 1px',
  backgroundColor: '$white'
})
