import { motion } from 'framer-motion'
import Skills from '../components/Skills'
import Head from 'next/head'
import Link from 'next/link'
import englishTranslation from '../data/englishTranslation.json'
import frenchTranslation from '../data/frenchTranslation.json'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageContext'
import { useRouter } from 'next/router'

const About = () => {
  const { language } = useContext(LanguageContext)
  let translation = language === 'en' ? englishTranslation : frenchTranslation
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <div className="h-screen lg:pl-20 lg:pr-32">
      <Head>
        <title>{translation.navAbout} | Gwenaëlle Dumoulin</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/x-icon"></link>
      </Head>
      <div className="flex justify-between md:mx-20 md:pt-32 pt-28">
        <div className="flex flex-col md:ml-20 px-10 mt-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:px-8 md:max-w-[50%]">
              <motion.div
                className="xl:w-96"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
              >
                <h1 className="text-3xl font-bold xl:text-4xl mb-8">
                  {translation.aboutBlackText1}&nbsp;
                  <span className="text-[#FF4800]">Gwenaëlle</span>
                </h1>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1,
                    },
                  },
                }}
              >
                <h2 className="font-bold text-2xl xl:text-3xl text-left mb-5">
                  {translation.aboutBlackText2}
                  <span className="text-[#FF4800]">
                    {' '}
                    {translation.aboutOrangeText1}
                  </span>{' '}
                  {translation.aboutBlackText3}&nbsp;
                  {translation.aboutBlackText4}
                  <span className="text-[#FF4800]">
                    {' '}
                    {translation.aboutOrangeText2}
                  </span>
                  .
                </h2>
              </motion.div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                  },
                },
              }}
            >
              <p className="text-left font-normal mb-5 flex-wrap">
                {translation.aboutTextPresentation}
              </p>
              <p className="text-left font-normal mb-5 flex-wrap"></p>
              <p className="text-left font-normal mb-5 flex-wrap">
                {translation.aboutTextPresentation2}
                <br />
                {translation.aboutTextPresentation3}&nbsp;
                <Link
                  href="https://github.com/GwenDumoulin"
                  className="underline text-[#FF4800]"
                >
                  {translation.aboutLink}
                </Link>
                .
              </p>
            </motion.div>
          </div>
          <div className="text-bold text-3xl mt-10">
            <Skills />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8 grid-cols-2">
            <Link
              href="/contact"
              className="px-12 py-3 text-sm font-medium text-culturedWhite bg-[#C33100] rounded shadow active:bg-[#FF6617] hover:bg-[#FF4800] focus:outline-none focus:ring"
            >
              {translation.contactButton}
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="px-12 py-3 text-sm font-medium text-culturedWhite bg-[#C33100] rounded shadow active:bg-[#FF6617] hover:bg-[#FF4800] focus:outline-none focus:ring"
            >
              {translation.resumeButton}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
