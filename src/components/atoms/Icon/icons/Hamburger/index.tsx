import { Icon } from '../..'
import { IIconProps } from '../../types'

export const Hamburger = ({ ...props }: IIconProps) => (
  <Icon viewBox='0 0 13 10' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1 9H11.5M1 5H11.5M1 1H11.5'
      stroke='white'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
)
