import { SVGAttributes } from 'react'

export interface IIconProps extends SVGAttributes<SVGElement> {
  desc?: string
  title?: string
  labelledBy?: string
  linkTarget?: '_blank' | '_self' | '_parent' | '_top'
}

export interface IUseIconParams {
  labelledBy?: IIconProps['labelledBy']
}
