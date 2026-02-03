import NavBars from "./NavBar/NavBars"
import Logo from "./TopBar/Logo"
import RigthNavs from "./TopBar/RigthNavs"
import SearchBar  from './TopBar/SearchBar'

export default function Header() {
  return (
    <header className='header '>
    {/* Top Bar */}
      <div className='px-4 py-1 bg-gray-950 flex items-center justify-between gap-4'>
          <Logo />
          <SearchBar />
          <RigthNavs />
      </div>

      {/* Nav Bar */}
      <div className='px-4 py-1 bg-gray-800'>
        <NavBars />
      </div>
    </header>
  )
}
