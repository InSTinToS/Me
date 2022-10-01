import { GlobalProvider } from '@app/components/providers/GlobalProvider'

import type { TAppPropsWithLayout } from '@app/types/next.types'

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout || (page => page)

  return getLayout(
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
