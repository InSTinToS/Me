import { ITooltipProps } from '@app/components/utilities/Tooltip/types'

import { personal } from '@app/static/personal'

import { TButtonProps } from '@app/types/react.types'

import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'

interface IGmail {
  text: string
  open?: boolean
  variant: ITooltipProps['variant']
}

const variants: {
  default: IGmail
  success: IGmail
} = {
  default: { variant: 'default', text: 'Copiar e-mail' },
  success: { variant: 'success', text: 'E-mail copiado!', open: true }
}

export const useSocial = () => {
  const [gmail, setGmail] = useState<IGmail>(variants.default)

  const { data } = useQuery(
    `resume`,
    async () => {
      const res = await axios.post('/api/url', {
        paths: [personal.resume, personal.resumeBW]
      })

      return res.data
    },
    {
      refetchOnMount: false,
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  )

  const onGoogleClick: TButtonProps['onClick'] = () => {
    navigator.clipboard.writeText(personal.email)

    setGmail(variants.success)

    setTimeout(() => {
      setGmail(variants.default)
    }, 1000)
  }

  return {
    gmail,
    personal,
    onGoogleClick,
    resume: data?.urls[0],
    printResume: data?.urls[1]
  }
}
