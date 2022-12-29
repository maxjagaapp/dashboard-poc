import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from 'theme'
import createEmotionCache from 'utils/createEmotionCache'
import { SWRConfig } from 'swr'
import axios from 'utils/http-anxios'
import { isIsoDate } from 'helpers/dateHelpers'

//layout
import Main from 'layout/Main'

// Client-side cache, shared for the whole session of the user in the browser.
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
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Main>
            <Component {...pageProps} />
          </Main>
        </ThemeProvider>
      </SWRConfig>
    </CacheProvider>
  )
}
