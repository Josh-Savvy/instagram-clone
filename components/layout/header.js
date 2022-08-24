import Navbar from '../navbar'

const Header = ({ className }) => {
  return (
    <div className={className}>
      <header className="bg-white border-[1px] border-gray-300 fixed w-screen top-0 z-20">
        <div className="max-w-5xl mx-auto">
          <Navbar />
        </div>
      </header>
    </div>
  )
}

export default Header
