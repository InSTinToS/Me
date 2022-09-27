import { IPageState, IUseHorizontalListParams } from './types'

import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

const getShowButtons = (index: number, maxLength: number) => ({
  showLeftButton: index !== 0,
  showRightButton: index < maxLength - 1
})

export const useHorizontalList = ({
  gap,
  children,
  ref: receivedRef
}: IUseHorizontalListParams) => {
  const liRef = useRef<HTMLDivElement>(null)
  const ulRef = useRef<HTMLUListElement>(null)

  const [ulWidth, setUlWidth] = useState(0)
  const [liHeight, setLiHeight] = useState(0)
  const [page, setPage] = useState<IPageState>({ index: 0, dir: 1 })

  const variants = {
    enter: (direction: number) => ({
      y: '-50%',
      opacity: 0.5,
      x: direction > 0 ? ulWidth : -ulWidth
    }),
    center: { x: 0, opacity: 1, y: '-50%' },
    exit: (direction: number) => ({
      y: '-50%',
      opacity: 0.5,
      x: direction > 0 ? -ulWidth : ulWidth
    })
  }

  const getInfo = useCallback(
    () => ({ page, ...getShowButtons(page.index, children.length) }),
    [children, page]
  )

  const paginate = useCallback(
    (direction: 'left' | 'right') => {
      const directionNumber = direction === 'right' ? 1 : -1
      const newIndex = page.index + directionNumber

      const { showLeftButton, showRightButton } = getShowButtons(
        newIndex,
        children.length
      )

      const newPage = { dir: directionNumber, index: newIndex }
      const isOnLimit = newIndex < 0 || newIndex > children.length
      const info = { page: newPage, showLeftButton, showRightButton }

      if (isOnLimit) return info

      setPage(newPage)

      return info
    },
    [children, page.index]
  )

  useImperativeHandle(receivedRef, () => ({ paginate, getInfo }), [
    getInfo,
    paginate
  ])

  useEffect(() => {
    const clientWidth = ulRef.current?.clientWidth

    clientWidth && setUlWidth(gap ? clientWidth + gap : clientWidth)
  }, [gap, ulRef])

  useEffect(() => {
    setTimeout(() => {
      liRef.current?.clientHeight && setLiHeight(liRef.current?.clientHeight)
    }, 100)
  }, [page])

  return { page, variants, ulRef, liHeight, liRef }
}
