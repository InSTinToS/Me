import { styled } from '@app/styles'

export const Label = styled('span', {
  display: 'none',

  ml: '$4',

  color: '$white',

  '@md': { display: 'inline' }
})

export const ItemLink = styled('a', {
  flexCenter: 'row',

  height: '$7',

  cursor: 'pointer',
  textDecoration: 'none',

  svg: { size: '$7', fill: '$white' }
})

export const Style = styled('li', {
  flexCenter: 'row',

  '@md': {
    px: '$4',

    borderLeft: '$white solid 1px',

    '&:first-child': {
      display: 'flex',

      pl: 0,
      borderLeft: 'none',

      span: { display: 'none' }
    }
  }
})
