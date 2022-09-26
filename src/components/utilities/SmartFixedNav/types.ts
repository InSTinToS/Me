import { ReactNode } from 'react'

export interface ISmartFixedNav {
  nav: ReactNode
  aboveContent: ReactNode
}

export interface IUseSmartFixedNav {
  nav: ISmartFixedNav['nav']
  aboveContent: ISmartFixedNav['aboveContent']
}
