import {
  IHorizontalListForwarded,
  IInfoState
} from '@app/components/molecules/HorizontalList/types'

import { useEffect, useRef, useState } from 'react'

export const useProject = () => {
  const [info, setInfo] = useState<IInfoState>()
  const ulRef = useRef<IHorizontalListForwarded>(null)

  const onLeftArrowClick = () =>
    ulRef.current?.paginate && setInfo(ulRef.current.paginate('left'))

  const onRightArrowClick = () =>
    ulRef.current?.paginate && setInfo(ulRef.current.paginate('right'))

  useEffect(() => {
    setInfo(ulRef.current?.getInfo())
  }, [])

  return {
    ulRef,
    onLeftArrowClick,
    onRightArrowClick,
    showLeftArrow: info?.showLeftButton,
    showRightArrow: info?.showRightButton
  }
}
