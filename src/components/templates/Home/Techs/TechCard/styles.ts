import { styled } from '@app/styles'

export const Image = styled('img', {
  gridArea: 'image',
  mx: 'auto',
  height: '$11'
})

export const Progress = styled('hr', {
  gridArea: 'progress',

  width: '100%',

  mt: '$4',
  radius: '$2',
  borderWidth: '$1',
  borderStyle: 'solid',

  variants: {
    progress: {
      low: {},
      medium: {},
      high: { borderColor: '$success' }
    }
  }
})

export const Name = styled('div', {
  gridArea: 'name',

  mx: 'auto',

  textAlign: 'center',

  color: '#ffffff'
})

export const Style = styled('li', {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  grid: `
    'image    name'
    'progress progress' / 1fr 2fr
  `,

  m: '$8',
  p: '$4',
  radius: '$4',
  maxWidth: '$55',

  background: 'rgba(255,255,255,0.2)'
})
