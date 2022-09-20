import { Icon } from '../..'
import { IIconProps } from '../../types'

export const Plus = ({ ...props }: IIconProps) => {
  return (
    <Icon
      fill='none'
      viewBox='0 0 18 18'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        strokeWidth='2'
        strokeLinecap='round'
        d='M9 17V9M9 9V1M9 9H17M9 9H1'
      />
    </Icon>
  )
}
