import type { ILinkProps } from './types'

import NextLink from 'next/link'

export const Link = ({ children, ...props }: ILinkProps) => (
  <NextLink {...props}>
    <a>{children}</a>
  </NextLink>
)
