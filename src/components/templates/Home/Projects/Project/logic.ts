import { IUseProjectParams } from './types'

import {
  IHorizontalListForwarded,
  IInfoState
} from '@app/components/utilities/HorizontalList/types'

import axios from 'axios'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

export const useProject = ({ files, name, date }: IUseProjectParams) => {
  const [info, setInfo] = useState<IInfoState>()
  const ulRef = useRef<IHorizontalListForwarded>(null)

  const start = {
    month: Number(date?.start.split('/')[0]) || 1,
    year: Number(date?.start.split('/')[1]) || 1
  }

  const end = {
    month: date?.end ? Number(date?.end.split('/')[0]) || 1 : 1,
    year: date?.end ? Number(date?.end.split('/')[1]) || 1 : 1
  }

  const formattedMonth = {
    start: format(new Date(start.year, start.month, 0), 'MMMMMM', {
      locale: pt
    }),
    end: format(new Date(end.year, end.month, 0), 'MMMMMM', {
      locale: pt
    })
  }

  const accessibleDate = `Projeto criado em ${formattedMonth.start} de ${
    start.year
  } ${date?.end ? `e finalizado em ${formattedMonth.end} de ${end.year}` : ''}`

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
    accessibleDate,
    onLeftArrowClick,
    urls: data?.urls,
    onRightArrowClick,
    showLeftArrow: info?.showLeftButton,
    showRightArrow: info?.showRightButton
  }
}
