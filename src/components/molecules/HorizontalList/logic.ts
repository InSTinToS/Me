import {
  IHorizontalListForwarded,
  IInfoState,
  IUseHorizontalListParams
} from './types'

import { useAnimations } from './animations'

import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

export const useHorizontalList = ({
  children,
  ref: receivedRef
}: IUseHorizontalListParams) => {
  const ulRef = useRef<HTMLUListElement>(null)

  const [ulWidth, setUlWidth] = useState(0)
  const [pageInfo, setPageInfo] = useState<IInfoState>({
    showLeftButton: false,
    showRightButton: true,
    page: { dir: 1, index: 0 }
  })

  const { liAnimations, presenceAnimations } = useAnimations({
    ulWidth,
    pageInfo
  })

  const getInfo = useCallback(() => pageInfo, [pageInfo])

  const paginate: IHorizontalListForwarded['paginate'] = useCallback(
    directionOrPage => {
      let newIndex: number
      let directionNumber: number

      if (typeof directionOrPage === 'number') {
        directionNumber = pageInfo.page.index < directionOrPage ? 1 : -1
        newIndex = directionOrPage
      } else {
        directionNumber = directionOrPage === 'right' ? 1 : -1
        newIndex = pageInfo.page.index + directionNumber
      }

      const isOnLimit = newIndex < 0 || newIndex > children.length

      const buttons = {
        showLeftButton: newIndex !== 0,
        showRightButton: newIndex < children.length - 1
      }

      if (isOnLimit) return { page: pageInfo.page, ...buttons }

      const newInfo = {
        page: { dir: directionNumber, index: newIndex },
        ...buttons
      }

      setPageInfo(newInfo)

      return newInfo
    },
    [children.length, pageInfo]
  )

  useImperativeHandle(receivedRef, () => ({ paginate, getInfo }), [
    getInfo,
    paginate
  ])

  useEffect(() => {
    setUlWidth(ulRef.current?.clientWidth || 0)
  }, [])

  return { page: pageInfo.page, liAnimations, ulRef, presenceAnimations }
}
