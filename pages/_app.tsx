import '@/styles/globals.css'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos'


/* export const metadata = {
  title: "Darkmode with Next.js and TailwindCSS",
  description:
    "I simply app to showcase dark mode with Next.js and TailwindCSS",
};
 */
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  })
  return (
    <div key={router.pathname}>
      <Component {...pageProps}/>
    </div>
  )
}