import { styled, theme } from '@app/styles'

import { Arrow as ArrowIcon } from '@app/components/atoms/Icon/icons/Arrow'
import { Github as GithubIcon } from '@app/components/atoms/Icon/icons/Github'
import { Linkedin as LinkedinIcon } from '@app/components/atoms/Icon/icons/Linkedin'

import { remToPx } from '@app/utils/pxAndRem'

export const Arrow = styled(ArrowIcon, {
  size: '$6',

  fill: '$white'
})

export const RightArrow = styled('button', {
  flex: 1,
  flexCenter: 'row',

  mt: '$4'
})

export const LeftArrow = styled(RightArrow, {
  svg: { rotate: '-180deg' }
})

export const Files = styled('ul', {
  flexCenter: 'row',

  li: { width: '100%' }
})

export const Paragraph = styled('p', {
  fontSize: '$4',
  fontWeight: '$2',
  textIndent: remToPx(theme.sizes[4].value),

  '& + p': { mt: '$4' },

  '@xl': { gridArea: 'p' }
})

export const File = styled('div', {
  width: '100%'
})

export const Footer = styled('footer', {
  flexWrap: 'wrap',
  flexCenter: 'row',

  pt: '$6',

  '@xl': {
    gridArea: 'footer',

    p: 0
  }
})

export const InfoItem = styled('li', {
  py: '$2',

  fontSize: '$4',
  fontWeight: '$4',

  '&::before': {
    display: 'inline-block',

    width: '$4',
    content: '•',

    fontWeight: 'bold'
  }
})

export const Info = styled('ul', {
  py: '$4'
})

export const Paragraphs = styled('div', {
  '@xl': {
    gridArea: 'paragraphs'
  }
})

export const Github = styled(GithubIcon, {
  gridArea: 'github',

  size: '$8'
})

export const Date = styled('b', {
  gridArea: 'date',

  textAlign: 'center'
})

export const Title = styled('h3', {
  gridArea: 'title',

  fontSize: '$7',
  fontWeight: 'bold',
  textAlign: 'center'
})

export const Linkedin = styled(LinkedinIcon, {
  gridArea: 'linkedin',

  size: '$8'
})

export const Header = styled('header', {
  display: 'grid',
  grid: `
    'linkedin title github' 1fr
    'linkedin date  github' 1fr / auto 1fr auto
  `,

  alignItems: 'center',

  '@xl': {
    gridArea: 'header'
  }
})

export const Style = styled('article', {
  px: '$8',
  maxWidth: '$2xl',

  '@xl': {
    display: 'grid',
    gridRowGap: '$4',
    gridColumnGap: '$12',
    alignItems: 'center',
    justifyContent: 'center',
    grid: `
      'header     header' 
      'paragraphs footer'  / 1fr 3fr
    `
  }
})
