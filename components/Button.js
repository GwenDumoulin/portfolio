import Link from 'next/link'

const Button = (props) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      className="px-12 py-3 text-sm font-medium text-culturedWhite bg-[#C33100] rounded shadow active:bg-[#FF6617] hover:bg-[#FF4800] focus:outline-none focus:ring"
    >
      {props.text}
    </Link>
  )
}

export default Button
