import { ReactNode } from 'react'

export interface IHorizontalListProps {
  children: ReactNode[]
}

export interface IUseHorizontalListParams {
  ref?: any
  children: IHorizontalListProps['children']
}

export interface IHorizontalListForwarded extends HTMLDivElement {
  getInfo: () => IInfoState
  paginate: (directionOrPage: 'left' | 'right' | number) => IInfoState
}

export interface IUseAnimationsParams {
  ulWidth: number
  pageInfo: IInfoState
}

export interface IPage {
  dir: number
  index: number
}

export interface IInfoState {
  page: IPage
  showLeftButton: boolean
  showRightButton: boolean
}
