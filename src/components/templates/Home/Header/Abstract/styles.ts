import { styled } from '@app/styles'

export const EnStyle = styled('b', {
  fontStyle: 'italic'
})

export const Style = styled('p', {
  gridArea: 'abstract',

  py: '$4',

  textAlign: 'center',

  '&, a': {
    fontSize: '$4',
    fontWeight: '$2',

    color: '$white'
  },

  '@md': {
    py: 0,

    textAlign: 'left'
  }
})
