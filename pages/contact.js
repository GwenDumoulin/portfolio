import { IoIosSend } from 'react-icons/io'
import emailjs from '@emailjs/browser'
import * as yup from 'yup'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import Popup from '../components/ContactSubmitPopup'
import Link from 'next/link'
import englishTranslation from '../data/englishTranslation.json'
import frenchTranslation from '../data/frenchTranslation.json'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageContext'
import { useRouter } from 'next/router'

emailjs.init('YQBhN_1EDQoAuIOmv')

const contactSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
})

const Contact = () => {
  const { language } = useContext(LanguageContext)
  let translation = language === 'en' ? englishTranslation : frenchTranslation
  const router = useRouter();
  const basePath = router.basePath;

  const form = useRef()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  })

  const [submitted, setSubmitted] = useState(false)

  const submitForm = () => {
    emailjs.sendForm('service_uvqs03e', 'template_t1pqb29', form.current).then(
      function (response) {
        setSubmitted(true)
        reset()
      },
      function (error) {
        console.log('FAILED DID NOT SEND MESSAGE...', error)
      }
    )
  }
  return (
    <div className="flex items-center">
      <Head>
        <title>Contact | Gwenaëlle Dumoulin</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/x-icon"></link>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4054073151944400"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div className="h-screen max-w-screen-xl px-4 py-16 mx-auto md:pt-32 md:p-20">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h1 className="font-bold text-6xl text-[#FF4800] pt-20">
              {translation.contactTalk}
            </h1>
            <p className="max-w-xl text-lg pt-4">
              {translation.contactText1}
              <br />
              {translation.contactText2} <br />
              <br />
              {translation.contactText3} <br />
              LinkedIn:{' '}
              <Link
                className="text-[#FF4800] hover:underline"
                href="https://www.linkedin.com/in/gwenaelle-dumoulin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                /in/gwenaelle-dumoulin/
              </Link>{' '}
              <br />
              Email:{' '}
              <Link
                className="text-[#FF4800] hover:underline"
                href="mailto:gwen.dumoulin@gmail.com"
              >
                gwen.dumoulin@gmail.com
              </Link>
            </p>
          </div>

          <div className="p-8 rounded-lg lg:p-12 lg:col-span-3">
            <form
              ref={form}
              onSubmit={handleSubmit(submitForm)}
              className="space-y-4"
            >
              <div>
                <label className="sr-only">Name</label>
                <input
                  className="w-full p-3 text-sm rounded-lg border border-black"
                  placeholder={translation.contactName}
                  type="text"
                  name="name"
                  {...register('name')}
                />
                <p>
                  <span className="text-red-600">{errors.name?.message}</span>
                </p>
              </div>
              <div>
                <label className="sr-only">Email</label>
                <input
                  className="w-full p-3 text-sm rounded-lg border border-black"
                  placeholder={translation.contactEmail}
                  type="email"
                  name="email"
                  {...register('email')}
                />
                <p>
                  <span className="text-red-600">{errors.email?.message}</span>
                </p>
              </div>
              <div>
                <label className="sr-only">Message</label>
                <textarea
                  className="w-full p-3 text-sm rounded-lg border border-black"
                  placeholder={translation.contactMessage}
                  type="text"
                  rows="8"
                  name="message"
                  {...register('message')}
                ></textarea>
                <p>
                  <span className="text-red-600">
                    {errors.message?.message}
                  </span>
                </p>
              </div>

              <div className="mt-4">
                {!submitted ? (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-[#C33100] rounded-lg sm:w-auto space-x-2 hover:bg-[#FF6617]"
                  >
                    <span className="font-medium">
                      {translation.contactSend}
                    </span>
                    <IoIosSend size="20px" />
                  </button>
                ) : submitted ? (
                  <Popup
                    title={translation.contactMessageSent}
                    message={translation.contactMessageSentText}
                  />
                ) : (
                  <Popup
                    title={translation.contactMessageError}
                    message={translation.contactMessageErrorText}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
