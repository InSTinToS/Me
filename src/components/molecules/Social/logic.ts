import { personal } from '@app/static/personal'

import { TButtonProps } from '@app/types/react.types'

import axios from 'axios'
import { useQuery } from 'react-query'

export const useSocial = () => {
  const { data } = useQuery(
    `resume`,
    async () => {
      const res = await axios.post('/api/url', { paths: [personal.resume] })

      return res.data
    },
    {
      refetchOnMount: false,
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  )

  const onTooltipClick: TButtonProps['onClick'] = () => {
    navigator.clipboard.writeText(personal.email)
  }

  return { resume: data?.urls[0], personal, onTooltipClick }
}
