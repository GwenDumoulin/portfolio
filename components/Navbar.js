import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import englishTranslation from '../data/englishTranslation.json'
import frenchTranslation from '../data/frenchTranslation.json'
import { LanguageContext } from '../components/LanguageContext'

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleMobileNav = () => {
    setIsOpen(!isOpen)
  }

  const handleTranslation = () => {
    language === 'en' ? setLanguage('fr') : setLanguage('en')
  }

  const { language, setLanguage } = useContext(LanguageContext)
  let translation = language === 'en' ? englishTranslation : frenchTranslation

  return (
    <div>
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            <div className="flex items-center sm:mx-10 md:mx-10 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  <Link href="/" className="text-2xl pl-8 sm:pl-0 p-[10px]">
                    Gwen<span className="text-[#FF4800]">Dumoulin</span>
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block md:mr-[75px] mr-[0]">
                <div className="flex items-baseline space-x-10">
                  <h1
                    className={
                      router.pathname == '/'
                        ? 'text-[#FF4800]'
                        : 'cursor-pointer hover:text-[#FF4800]'
                    }
                  >
                    <Link id="about" href="/" className="md:p-[10px]">
                      {translation.navHome}
                    </Link>
                  </h1>
                  <h1
                    className={
                      router.pathname == '/about'
                        ? 'text-[#FF4800]'
                        : 'cursor-pointer hover:text-[#FF4800]'
                    }
                  >
                    <Link id="about" href="/about" className="md:p-[10px]">
                      {translation.navAbout}
                    </Link>
                  </h1>
                  <h1
                    className={
                      router.pathname == '/projects'
                        ? 'text-[#FF4800]'
                        : 'cursor-pointer hover:text-[#FF4800]'
                    }
                  >
                    <Link
                      id="projects"
                      href="/projects"
                      className="md:p-[10px]"
                    >
                      {translation.navProjects}
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="flex justify-center items-center flex-shrink-0 md:block">
                <div className="flex space-x-4">
                  <div>
                    <button
                      className="font-bold md:mt-[5px]"
                      onClick={() => {
                        handleTranslation()
                      }}
                    >
                      {translation.changeLanguage}
                    </button>
                  </div>
                  <div>
                    <Link
                      href="https://github.com/GwenDumoulin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub className="hidden md:block" size="2rem" />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/gwenaelle-dumoulin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin className="hidden md:block" size="2rem" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div onClick={handleMobileNav} className="mr-8 md:hidden">
              <AiOutlineMenu size="2rem" />
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div
            className={
              isOpen ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''
            }
          >
            <div
              className={
                isOpen
                  ? 'fixed left-0 top-0 w-full sm:w[40%] md:w-[30%] h-screen bg-culturedWhite p-10 ease-in duration-300'
                  : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
              }
            >
              <div>
                <div className="flex w-full items-center justify-end absolute right-[40px]">
                  <div
                    onClick={handleMobileNav}
                    className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer border-[#e0e0e0] border-[1px]"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-4">
                  <h1
                    className={
                      router.pathname == '/'
                        ? 'text-[#FF4800]'
                        : 'cursor-pointer hover:text-[#FF4800]'
                    }
                  >
                    <Link id="about" href="/" onClick={handleMobileNav}>
                      {translation.navHome}
                    </Link>
                  </h1>
                  <h1
                    className={
                      router.pathname == '/about'
                        ? 'text-[#FF4800]'
                        : 'cursor-pointer hover:text-[#FF4800]'
                    }
                  >
                    <Link id="about" href="/about" onClick={handleMobileNav}>
                      {translation.navAbout}
                    </Link>
                  </h1>
                  <h1
                    className={
                      router.pathname == '/projects'
                        ? 'text-[#FF4800]'
                        : 'cursor-pointer hover:text-[#FF4800]'
                    }
                  >
                    <Link
                      id="projects"
                      href="/projects"
                      onClick={handleMobileNav}
                    >
                      {translation.navProjects}
                    </Link>
                  </h1>
                </div>
                <div className="space-x-4 pt-20">
                  <div className="flex space-x-4">
                    <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer border-[#e0e0e0] border-[1px]">
                      <a
                        href="https://github.com/GwenDumoulin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub size="2rem" />
                      </a>
                    </div>
                    <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer border-[#e0e0e0] border-[1px]">
                      <a
                        href="https://www.linkedin.com/in/gwenaelle-dumoulin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin size="2rem" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
