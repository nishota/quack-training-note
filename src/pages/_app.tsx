import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import QuackAuthenticator from '@/components/quack-authenticator'

export default function App({ Component, pageProps }: AppProps) {
return <QuackAuthenticator><Component {...pageProps} /></QuackAuthenticator>
}
