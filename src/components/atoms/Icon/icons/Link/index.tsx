import { Icon } from '../..'
import { IIconProps } from '../../types'

export const Arrow = ({ ...props }: IIconProps) => (
  <Icon viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M11.5 8.5L19 1M14 1H19V6M19 12V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8'
    />
  </Icon>
)
