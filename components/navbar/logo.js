import Link from "next/link"
const Logo = () => {
  return (
    <Link href="/">
      <div className='w-1/3 flex gap-1 cursor-pointer'>
        <img src="/assets/images/instagram-logo.png" className="w-24" alt="Intagram Logo" />
        <div className="mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth={1.3} stroke="currentColor"
            className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default Logo
