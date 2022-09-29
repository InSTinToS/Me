import { styled, theme } from '@app/styles'

import { Social as OriginalSocial } from '@app/components/molecules/Social'

export const Avatar = styled('div', {
  gridArea: 'avatar',

  justifySelf: 'center',

  my: '$6',
  size: '$64',
  radius: '$8',

  bg: '$white'
})

export const Name = styled('h1', {
  gridArea: 'name',

  fontSize: '$5',
  fontWeight: '$4',
  textAlign: 'center',

  '@md': {
    alignSelf: 'flex-end',
    justifySelf: 'flex-start'
  }
})

export const Occupation = styled('h2', {
  gridArea: 'occupation',

  mb: '$4',
  mt: '$2',

  fontSize: '$4',
  fontWeight: '$3',
  textAlign: 'center',

  '@md': {
    justifySelf: 'flex-start'
  }
})

export const Social = styled(OriginalSocial, {
  gridArea: 'social',

  '@md': {
    display: 'none'
  }
})

export const Style = styled('header', {
  position: 'relative',
  zIndex: 2,

  display: 'grid',
  grid: `
    'social     color' 
    'avatar     avatar'
    'name       name'
    'occupation occupation'
  `,

  px: '$8',
  pt: '$4',

  color: '$white',
  background: 'rgba(0, 0, 0, 0.5)',

  '@md': {
    display: 'grid',
    gridColumnGap: '$6',
    grid: `
      'avatar  name       color' 
      'avatar  occupation color' / ${theme.sizes['64'].value} 1fr 1fr
    `
  },

  '@2xl': {
    px: `calc(((100vw - ${theme.sizes['2xl'].value}) / 2) + ${theme.sizes[8].value})`
  }
})
