import '../styles/globals.css'

import { HeaderComponent } from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <section>
        <HeaderComponent />
        <Component {...pageProps} />
      </section>
    </>
  )
}

export default MyApp
