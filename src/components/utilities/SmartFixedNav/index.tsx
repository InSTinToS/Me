import { useSmartFixedNav } from './logic'
import { ISmartFixedNav } from './types'

export const SmartFixedNav = ({ aboveContent, nav }: ISmartFixedNav) => {
  const { newAboveContent, newNav } = useSmartFixedNav({ aboveContent, nav })

  return (
    <>
      {newAboveContent}

      {newNav}
    </>
  )
}
