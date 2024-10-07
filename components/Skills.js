import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Skills = () => {
  let classText = 'text-[#FF4800] text-2xl w-full text-center pt-[25px]'
  let classLi =
    'md:text-xl text-lg font-bold flex justify-center items-center flex-col'
  let classIcon = 'md:w-[40px] w-[30px]'
  let classUl =
    'flex justify-center items-center flex-row flex-wrap gap-8 mb-2 md:p-8 py-8 px-2 rounded-2xl'
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
            delay: 2.0,
          },
        },
      }}
    >
      <div className="w-full pb-12">
        <div className="mx-auto flex flex-col justify-center">
          <p className=" font-bold text-[#C33100] pb-4 text-center">SKILLS</p>

          <p className={classText}>Frontend</p>
          <ul className={classUl + 'max-w-[600px] m-auto'}>
            <li className={classLi}>
              <FaReact size="40px" className={classIcon} />
              React
            </li>
            <li className={classLi}>
              <SiJavascript size="40px" className={classIcon} />
              JavaScript
            </li>
            <li className={classLi}>
              <SiTypescript size="40px" className={classIcon} />
              TypeScript
            </li>
            <li className={classLi}>
              <FaHtml5 size="40px" className={classIcon} />
              HTML
            </li>
            <li className={classLi}>
              <FaCss3Alt size="40px" className={classIcon} />
              CSS
            </li>
            <li className={classLi}>
              <SiTailwindcss size="40px" className={classIcon} />
              Tailwind CSS
            </li>
            <li className={classLi}>
              <FaBootstrap size="40px" className={classIcon} />
              Bootstrap
            </li>
          </ul>
          <p className={classText}>Backend</p>
          <ul className={classUl}>
            <li className={classLi}>
              <SiPhp size="40px" className={classIcon} />
              PHP
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col">
              <SiMysql size="40px" className={classIcon} />
              MySQL
            </li>
          </ul>
          <p className={classText}>Other</p>
          <ul className={classUl}>
            <li className={classLi}>
              <FaGithub size="40px" className={classIcon} />
              git/GitHub
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
