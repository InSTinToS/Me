import { SVGAttributes } from 'react'

export interface IIconProps extends SVGAttributes<SVGElement> {
  desc?: string
  title?: string
  labelledBy?: string
}

export interface IUseIconParams {
  labelledBy?: IIconProps['labelledBy']
}
