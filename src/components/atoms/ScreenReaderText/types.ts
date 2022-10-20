import { CSS } from '@stitches/react'
import { ReactNode } from 'react'

export interface IScreenReaderTextProps {
  css?: CSS
  children: ReactNode
  visibleInScreen: boolean
  visibleToScreenReader: boolean
}
