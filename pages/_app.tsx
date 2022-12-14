import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';

import { ThemeProvider } from '@/context/ThemeContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
