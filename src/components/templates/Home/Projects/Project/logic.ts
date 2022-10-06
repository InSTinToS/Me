import { IUseProjectParams } from './types'

import {
  IHorizontalListForwarded,
  IInfoState
} from '@app/components/molecules/HorizontalList/types'

import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

export const useProject = ({ files, name }: IUseProjectParams) => {
  const [info, setInfo] = useState<IInfoState>()
  const ulRef = useRef<IHorizontalListForwarded>(null)

  const { data } = useQuery(
    `${name}-urls`,
    async () => {
      if (!files) return

      const res = await axios.post('/api/url', {
        paths: files?.map(file => file.src)
      })

      return res.data
    },
    {
      refetchOnMount: false,
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  )

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
    urls: data?.urls,
    showLeftArrow: info?.showLeftButton,
    showRightArrow: info?.showRightButton
  }
}
