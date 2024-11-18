import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavItems({ pages }) {
  return (
    <ul className="rounded-full h-fit text-white grid grid-rows-5 text-center
    justify-center items-center shadow overflow-hidden bg-blue-500">
      {pages.map((item) => (
        <NavLink 
          to={item.location} 
          key={item.location} 
          className={({ isActive }) => 
            `navItem py-6 p-4 transition-colors duration-300 ease-in-out ${
          isActive ? "bg-blue-900 hover:text-blue-400 text-white" : " hover:text-blue-900"}`
        }>
          <li>
            <i className={item.icon}></i>
          </li>
        </NavLink>
      ))}
    </ul>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen((prevState) => !prevState)
  }

  const pages = [
    { location: '/', icon: 'fa-solid fa-house' },
    { location: 'about', icon: 'fa-solid fa-user' },
    { location: 'projects', icon: 'fa-solid fa-layer-group' },
    { location: 'work', icon: 'fa-solid fa-briefcase' },
    { location: 'contact', icon: 'fa-solid fa-people-arrows' },
  ];

  return (
    <header>
      <div className=''>
        <div className='fixed top-0 left-0 z-50'>
          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none lg:hidden flex p-4'
            aria-label='toggle menu'
          >
            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-12 h-12' />
          </button>
        </div>

        <div className="lg:flex hidden fixed h-full border-r-4 border-blue-900 px-2 bg-gradient-to-r
      from-slate-800 to-slate-950">
          <div className="flex flex-col justify-center items-center h-full">
            <nav className="h-full p-6 flex flex-col justify-center items-center">
              <NavItems pages={pages} />
            </nav>
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out 
      ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden lg:hidden`}>
        <div className='bg-gradient-to-r from-slate-800 to-slate-950'>
          Mobile Nav
        </div>
      </div>  
    </header>
  )
}
