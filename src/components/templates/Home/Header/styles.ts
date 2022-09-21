import { styled } from '@app/styles'

import { Gmail as GmailIcon } from '@app/components/atoms/Icon/icons/Gmail'
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

export const Gmail = styled(GmailIcon, {
  radius: '$full',

  bg: '#ffffff'
})

export const Social = styled('ul', {
  gridArea: 'social',

  display: 'flex',
  alignItems: 'center',

  width: '100%',

  li: {
    size: '$8',

    '& + li': { ml: '$4' }
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
    border: 'solid #ffffff'
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
  textAlign: 'center'
})

export const Occupation = styled('h2', {
  gridArea: 'occupation',

  mb: '$4',
  mt: '$2',

  fontSize: '$4',
  fontWeight: '$3',
  textAlign: 'center'
})

export const NavbarList = styled('ul', {
  flexCenter: 'row',

  width: '100%',

  '#phone': { ml: 'auto' }
})

export const Navbar = styled('nav', {
  position: 'absolute',
  bottom: 0,
  left: 0,

  py: '$4',
  px: '$8',
  width: '100%'
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
  pb: 'calc($4 * 2 + $7)',

  color: '#ffffff',
  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
