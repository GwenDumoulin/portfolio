import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Error404 = () => {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <section className="flex items-center text-black">
      <Head>
        <title>404 | Gwenaëlle Dumoulin</title>
        <link rel="icon" href={`${basePath}/favicon.ico`} type="image/x-icon"></link>
      </Head>

      <div className="h-screen container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl text-black font-semibold md:text-3xl">
            Sorry, we couldn&#39;t find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Don&#39;t worry you can find a lot more things on this website!
          </p>
          <Link
            rel="noopener noreferrer"
            href="/"
            className="inline-flex w-full px-12 py-3 text-sm font-medium text-culturedWhite bg-[#C33100] rounded shadow sm:w-auto active:bg-[#FF4800] hover:bg-[#FF4800] focus:outline-none focus:ring"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error404
