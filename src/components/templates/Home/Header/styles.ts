import { styled } from '@app/styles'

import { Gmail as GmailIcon } from '@app/components/atoms/Icon/icons/Gmail'

export const Gmail = styled(GmailIcon, {
  radius: '$full',

  bg: '#ffffff'
})

export const Social = styled('ul', {
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
  my: '$6',
  size: '$64',
  radius: '$8',

  bg: '#ffffff'
})

export const Name = styled('h1', {
  fontSize: '$5',
  fontWeight: '$4'
})

export const Occupation = styled('h2', {
  mb: '$4',
  mt: '$2',

  fontSize: '$4',
  fontWeight: '$3'
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

  flexCenter: 'col',

  px: '$8',
  pt: '$4',
  pb: 'calc($4 * 2 + $7)',

  color: '#ffffff',
  background: 'rgba(0, 0, 0, 0.5)',
  boxShadow: '0px 10px 8px 2px rgba(0,0,0,0.3)'
})
