import { IconStyle } from './styles'

import { TStitchesVariants } from '@app/types/stitches.types'

import { SVGAttributes } from 'react'

export interface IIconProps
  extends Omit<SVGAttributes<SVGElement>, 'fill' | 'stroke'>,
    TStitchesVariants<typeof IconStyle> {
  desc?: string
  title?: string
  labelledBy?: string
}

export interface IUseIconParams {
  labelledBy?: IIconProps['labelledBy']
}
