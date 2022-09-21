import { Icon } from '../..'
import { IIconProps } from '../../types'

export const Phone = ({ ...props }: IIconProps) => (
  <Icon viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M23.9095 3.95888L20.5813 0.634296C20.1751 0.228097 19.6313 0 19.0563 0C18.4813 0 17.9376 0.224972 17.5313 0.634296L13.9469 4.21197C13.5407 4.61817 13.3126 5.16498 13.3126 5.73991C13.3126 6.31796 13.5376 6.85852 13.9469 7.26784L16.7469 10.0706C16.1091 11.5566 15.1926 12.9068 14.0469 14.0482C12.9001 15.2012 11.5594 16.1105 10.0719 16.7542L7.27191 13.9514C6.86565 13.5452 6.3219 13.3171 5.7469 13.3171C5.46328 13.316 5.18231 13.3716 4.92044 13.4805C4.65858 13.5894 4.42109 13.7495 4.22189 13.9514L0.634378 17.5291C0.228126 17.9353 0 18.4821 0 19.057C0 19.635 0.225001 20.1756 0.634378 20.5849L3.95939 23.9095C4.65314 24.6032 5.6094 25 6.59065 25C6.79378 25 6.99066 24.9844 7.19066 24.95C11.3282 24.2688 15.4344 22.066 18.7501 18.7539C22.0626 15.4356 24.2626 11.3298 24.9501 7.18973C25.147 6.01487 24.7532 4.80565 23.9095 3.95888ZM22.7345 6.8179C22.1251 10.5018 20.1438 14.1764 17.1594 17.1604C14.1751 20.1444 10.5032 22.1254 6.81878 22.7347C6.35628 22.8128 5.88128 22.6565 5.54377 22.3222L2.27813 19.057L5.74065 15.5918L9.48442 19.3413L9.51254 19.3695L10.1875 19.1195C12.2342 18.3671 14.0928 17.1787 15.6344 15.6367C17.1761 14.0947 18.3639 12.236 19.1157 10.1894L19.3657 9.51444L15.5907 5.74303L19.0532 2.27784L22.3188 5.54306C22.6563 5.88052 22.8126 6.35546 22.7345 6.8179Z'
      fill='white'
    />
  </Icon>
)
