import '@/styles/reset.css'
import '@/styles/globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return (
        <main className={heebo.className}>
            <Component {...pageProps} />
        </main>
    )
}
