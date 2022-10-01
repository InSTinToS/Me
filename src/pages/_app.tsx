import { Splash } from '@app/components/templates/Splash'

import { GlobalProvider } from '@app/components/providers/GlobalProvider'

import type { TAppPropsWithLayout } from '@app/types/next.types'

import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const [loading, setLoading] = useState(true)

  const getLayout = Component.getLayout || (page => page)

  useEffect(() => {
    setLoading(false)
  }, [])

  return loading ? (
    <Splash />
  ) : (
    getLayout(
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    )
  )
}

export default MyApp
