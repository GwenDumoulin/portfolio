import HomePage from '../components/Home'
import Head from 'next/head'
import englishTranslation from '../data/englishTranslation.json'
import frenchTranslation from '../data/frenchTranslation.json'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageContext'

export default function Home() {
  const { language } = useContext(LanguageContext)
  let translation = language === 'en' ? englishTranslation : frenchTranslation
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="VJs2G3ynvYQ1KG06ciOhdPdklC1gIUEkJ2KcplrnfWU"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4054073151944400"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="description"
          content="Front-End Developer - Gwenaëlle Dumoulin"
        />
        <title>Gwenaëlle Dumoulin - {translation.homeJob}</title>
      </Head>
      <HomePage />
    </div>
  )
}
