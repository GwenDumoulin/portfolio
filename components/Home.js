import { motion } from 'framer-motion'
import Link from 'next/link'
import foxWithoutTitle from '../public/FoxWithoutTitle.png'
import Image from 'next/image'
import englishTranslation from '../data/englishTranslation.json'
import frenchTranslation from '../data/frenchTranslation.json'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageContext'

const Home = () => {
  const { language } = useContext(LanguageContext)
  let translation = language === 'en' ? englishTranslation : frenchTranslation
  let resume = language === 'en' ? "/resume.pdf" : "/frenchresume.pdf"
  return (
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
            delay: 0.6,
          },
        },
      }}
    >
      <div className="flex px-4 md:py-32 mx-auto h-screen items-center">
        <div className="text-center mx-auto pt-[50px] md:pt-[0] md:pb-[160px]">
          <h1 className="text-3xl text-black font-extrabold md:text-6xl">
            Gwenaëlle Dumoulin
          </h1>
          <h1 className="text-3xl text-[#FF4800] font-extrabold md:text-6xl">
            {translation.homeJob}
          </h1>
          <p className="text-sm mt-4 sm:leading-relaxed md:text-xl text-black">
            React | JavaScript | TypeScript | Next.js | Vue.js
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 grid-cols-2">
            <Link
              href="/contact"
              className="px-12 py-3 text-sm font-medium text-culturedWhite bg-[#C33100] rounded shadow active:bg-[#FF6617] hover:bg-[#FF4800] focus:outline-none focus:ring"
            >
              {translation.contactButton}
            </Link>
            <Link
              href={resume}
              target="_blank"
              className="px-12 py-3 text-sm font-medium text-culturedWhite bg-[#C33100] rounded shadow active:bg-[#FF6617] hover:bg-[#FF4800] focus:outline-none focus:ring"
            >
              {translation.resumeButton}
            </Link>
          </div>
          <div className="flex justify-center md:absolute md:bottom-[0] md:left-[40px] mb-[-80px] md:mb-[0]">
            <Image
              src={foxWithoutTitle}
              alt="Fox"
              width="500"
              height="500"
              className="md:h-[39vh] md:w-[39vh] h-[34vh] w-[34vh]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
