import { useIcon } from './logic'
import { IconStyle } from './styles'
import { IIconProps } from './types'

import Link from 'next/link'

export const Icon = ({
  desc,
  href,
  title,
  children,
  labelledBy,
  ...props
}: IIconProps) => {
  const { ariaLabelledBy, descId, titleId } = useIcon({ labelledBy })

  return (
    <IconStyle
      role='img'
      aria-labelledby={ariaLabelledBy}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <title id={titleId}>{title}</title>

      <desc id={descId}>{desc}</desc>

      {href ? (
        <Link href={href}>
          <g>{children}</g>
        </Link>
      ) : (
        children
      )}
    </IconStyle>
  )
}
