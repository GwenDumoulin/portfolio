import Link from 'next/link'

const ContactSubmitPopup = (props) => {
  return (
    <div>
      <div
        className="p-8 bg-white border border-blue-100 shadow-lg rounded-2xl"
        role="alert"
      >
        <div className="items-left sm:flex">
          <p className="mt-8 text-lg font-medium sm:mt-0">{props.title}</p>
        </div>

        <p className="mt-4 text-gray-500">{props.message}</p>

        <div className="mt-6 sm:flex">
          <Link
            href="/"
            className="px-12 py-3 text-sm font-medium text-culturedWhite bg-[#C33100] rounded shadow active:bg-[#FF6617] hover:bg-[#FF4800] focus:outline-none focus:ring"
          >
            OK
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactSubmitPopup
