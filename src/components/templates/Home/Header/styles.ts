import { Avatar as OriginalAvatar } from './Avatar'

import { styled, theme } from '@app/styles'

import { Social as OriginalSocial } from '@app/components/molecules/Social'

import { hexToRgba } from '@app/utils/colors'

import { motion } from 'framer-motion'

export const Occupation = styled(motion.h2, {
  gridArea: 'occupation',

  mb: '$4',
  mt: '$2',

  fontSize: '$4',
  fontWeight: '$3',
  textAlign: 'center',

  '@md': { justifySelf: 'flex-start' }
})

export const Name = styled(motion.h1, {
  gridArea: 'name',

  fontSize: '$5',
  fontWeight: '$4',
  textAlign: 'center',

  '@md': {
    alignSelf: 'flex-end',
    justifySelf: 'flex-start'
  }
})

export const Avatar = styled(OriginalAvatar, {
  gridArea: 'avatar',

  justifySelf: 'center'
})

export const Social = styled(OriginalSocial, {
  gridArea: 'social',

  '@md': { display: 'none' }
})

export const Style = styled(motion.header, {
  position: 'relative',
  zIndex: 2,

  display: 'grid',
  grid: `
    'social     color' 
    'avatar     avatar'
    'name       name'
    'occupation occupation'
    'abstract   abstract'
  `,

  px: '$8',
  pt: '$4',

  color: '$white',
  background: hexToRgba(theme.colors.black.value, 0.5),

  '@md': {
    display: 'grid',
    gridColumnGap: '$6',
    grid: `
      'avatar  name       color' 
      'avatar  occupation color' ${theme.sizes['13'].value}
      'avatar  abstract   abstract'  / ${theme.sizes['64'].value} 1fr ${theme.sizes['17'].value}
    `
  },

  '@2xl': {
    px: `calc(((100vw - ${theme.sizes['2xl'].value}) / 2) + ${theme.sizes[8].value})`
  }
})
