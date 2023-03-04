import '@/styles/reset.css'
import '@/styles/globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return (
        <div className={heebo.className}>
            <Component {...pageProps} />
        </div>
    )
}
