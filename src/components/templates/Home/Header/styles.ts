import { styled, theme } from '@app/styles'

import { Reset as ResetIcon } from '@app/components/atoms/Icon/icons/Reset'

export const CustomColor = styled('div', {
  gridArea: 'color',
  flexCenter: 'row',

  ml: 'auto'
})

export const ResetButton = styled('button', { mr: '$1' })

export const Reset = styled(ResetIcon, {
  size: '$6',

  variants: {
    color: {
      white: { 'path + path': { fill: '#ffffff' } },
      black: { 'path + path': { fill: '#000000' } }
    }
  }
})

export const ColorPicker = styled('input', {
  "&[type='color']": {
    ml: 'auto',

    size: '$8',
    radius: '$full',
    borderWidth: '$2',
    overflow: 'hidden',

    bg: 'transparent',
    border: 'solid #ffffff',

    '@md': {
      alignSelf: 'flex-start'
    }
  }
})

export const Avatar = styled('div', {
  gridArea: 'avatar',

  justifySelf: 'center',

  my: '$6',
  size: '$64',
  radius: '$8',

  bg: '#ffffff'
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

  color: '#ffffff',
  background: 'rgba(0, 0, 0, 0.5)',

  '@md': {
    display: 'grid',
    grid: `
      'avatar  name       color' 
      'avatar  occupation color' / ${theme.sizes['72'].value} 1fr 1fr
    `
  }
})
