import { ReactNode } from 'react'

export interface IInfo {
  page: IPageState
  showLeftButton: boolean
  showRightButton: boolean
}

export interface IPageState {
  dir: number
  index: number
}

export interface IHorizontalListProps {
  gap?: number
  duration?: number
  children: ReactNode[]
}

export interface IUseHorizontalListParams {
  ref?: any
  gap?: IHorizontalListProps['gap']
  children: IHorizontalListProps['children']
}

export interface IHorizontalListForwarded {
  getInfo: () => IInfo
  paginate: (direction: 'left' | 'right') => IInfo
}
