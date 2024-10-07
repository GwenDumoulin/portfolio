import { FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import englishTranslation from '../data/englishTranslation.json'
import frenchTranslation from '../data/frenchTranslation.json'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageContext'
import { useRouter } from 'next/router'
import { TbWorldWww } from "react-icons/tb";


const projects = () => {
  const { language } = useContext(LanguageContext)
  let translation = language === 'en' ? englishTranslation : frenchTranslation
  const router = useRouter();
  const basePath = router.basePath;

  return (
    <div className="h-screen mx-5 sm:mx-auto pt-32">
      <Head>
        <title>{translation.navProjects} | Gwenaëlle Dumoulin</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/x-icon"></link>
      </Head>
      <h1 className="font-bold text-3xl text-center"></h1>
      <div className="max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28">
        <section className="p-4 md:p-8 bg-gray-200 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-2xl text-[#FF4800] pb-4">
            {translation.project1Name}
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-5 aspect-h-3">
              <Image
                src={`${basePath}/images/project-images/kasa.png`}
                layout="fill"
                objectFit="contain"
                alt={`Site ${translation.project1Name}`}
              />
            </div>
            <blockquote className="sm:col-span-2 pt-[15px] md:pt-0">
              <p className="text-xs md:text-base">{translation.project1Text}</p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-[#FF4800] sm:inline-block"></span>
                <p className="text-xs md:text-base text-[#FF4800] sm:ml-3">
                  React, Next.js, TypeScript, TailwindCSS, HTML, CSS
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div className="flex">
                  <Link
                    href="https://github.com/GwenDumoulin/kasa"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </Link>
                  <Link
                    href="https://www.foxidees.com/kasa/"
                    target="_blank"
                    rel="noopner noreferrer">
                    <TbWorldWww className="w-[40px] h-[30px] pl-[10px]" />
                  </Link>
                </div>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="p-4 md:p-8 bg-gray-200 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-2xl text-[#FF4800] pb-4">
            {translation.project2Name}
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={`${basePath}/images/project-images/shiny.png`}
                layout="fill"
                objectFit="contain"
                alt={`Site ${translation.project2Name}`}
              />
            </div>
            <blockquote className="sm:col-span-2 pt-[15px] md:pt-0">
              <p className="text-xs md:text-base">{translation.project2Text}</p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-[#FF4800] sm:inline-block"></span>
                <p className="text-xs md:text-base text-[#FF4800] sm:ml-3">
                  React, CRA, React Router, JavaScript, Styled Components, Jest,
                  HTML, CSS
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div className="flex">
                  <Link
                    href="https://github.com/GwenDumoulin/shiny-agency"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </Link>
                  <Link
                    href="https://www.foxidees.com/shiny-agency/"
                    target="_blank"
                    rel="noopner noreferrer">
                    <TbWorldWww className="w-[40px] h-[30px] pl-[10px]" />
                  </Link>
                </div>
              </div>
            </blockquote>
          </div>
        </section>
        <section className="p-4 md:p-8 bg-gray-200 rounded-lg shadow-2xl">
          <h1 className="font-bold text-lg md:text-2xl text-[#FF4800] pb-4">
            {translation.project3Name}
          </h1>
          <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={`${basePath}/images/project-images/portfolio.png`}
                layout="fill"
                objectFit="contain"
                alt={`Site ${translation.project3Name}`}
              />
            </div>
            <blockquote className="sm:col-span-2 pt-[15px] md:pt-0">
              <p className="text-xs md:text-base">{translation.project3Text}</p>
              <cite className="inline-flex items-center mt-8 not-italic">
                <span className="hidden w-6 h-px bg-[#FF4800] sm:inline-block"></span>
                <p className="text-xs md:text-base text-[#FF4800] sm:ml-3">
                  React, Next.js, JavaScript, MarkDown, TailwindCSS, HTML, CSS
                </p>
              </cite>
              <div className="flex pt-8 space-x-4">
                <div className="flex">
                  <Link
                    href="https://github.com/GwenDumoulin/portfolio"
                    target="_blank"
                    rel="noopner noreferrer"
                  >
                    <FiGithub size="30px" />
                  </Link>
                  <Link
                    href="https://www.foxidees.com/portfolio/"
                    target="_blank"
                    rel="noopner noreferrer">
                    <TbWorldWww className="w-[40px] h-[30px] pl-[10px]" />
                  </Link>
                </div>
              </div>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  )
}

export default projects
