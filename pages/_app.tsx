import Head from 'next/head'
import { AppProps } from 'next/app'
import axios from 'utils/http-anxios'
import { SWRConfig } from 'swr'

import theme from 'theme'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import createEmotionCache from 'config/createEmotionCache'
import { isIsoDate } from 'helpers/dateHelpers'
import 'config/firebase'

//layout
import Main from 'layout/Main'

//components
import LoginDialog from 'components/LoginDialog'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <SWRConfig
        value={{
          fetcher: async (resource) => {
            const fetch = await axios.get(resource)
            const data = JSON.parse(
              fetch.request.response,
              function (key, value) {
                if (typeof value === 'string') {
                  if (isIsoDate(value)) {
                    return new Date(value)
                  }
                }
                return value
              }
            )
            return data
          },
          revalidateOnFocus: false,
        }}
      >
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LoginDialog />
          <Main>
            <Component {...pageProps} />
          </Main>
        </ThemeProvider>
      </SWRConfig>
    </CacheProvider>
  )
}
