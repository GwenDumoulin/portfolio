import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { LanguageProvider } from '../components/LanguageContext'

export function getStaticProps() {
  return {
    props: {
      language: language,
    },
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <div className="bg-white">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  )
}

export default MyApp
