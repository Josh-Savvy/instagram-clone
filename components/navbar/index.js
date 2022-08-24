import Logo from './logo'
import Searchbar from './searchbar'
import { HomeIcon } from '@heroicons/react/solid'
import Path from './path'
import { ExploreIcon, HeartIcon, MessengerIcon, PostIcon } from './icons'
import Profile from './profile'
import { MenuAlt4Icon } from '@heroicons/react/outline'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 h-14 gap-5">
      <Logo />
      <Searchbar />
      <div className="flex items-center gap-5">
        <ul className="sm:flex items-center gap-5 hidden">
          <Path Icon={HomeIcon} />
          <div className="relative">
            <span className="absolute -top-2 px-1.5 text-sm rounded-full bg-red-400 -right-2 text-white font-semibold">4</span>
            <Path Icon={MessengerIcon} />
          </div>
          <Path Icon={PostIcon} />
          <Path Icon={ExploreIcon} />
          <Path Icon={HeartIcon} />
        </ul>
        {/* <MenuAlt4Icon className="w-6 sm:hidden" /> */}
        <Profile />
      </div>
    </nav>
  )
}

export default Navbar
