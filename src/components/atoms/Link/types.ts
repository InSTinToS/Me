import type { LinkProps as NextLinkProps } from 'next/link'
import type { ReactNode } from 'react'

export interface ILinkProps extends NextLinkProps {
  children?: ReactNode
}
