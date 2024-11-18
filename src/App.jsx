import Navbar from './sections/Navbar'
import { Outlet } from 'react-router'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [tab, setTab] = useState('/')

  function updateTab(location) {
    setTab(location)
    console.log(tab)
  }

  function toggleMenu() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div className='lg:flex bg-gradient-to-tr from-slate-950 to-slate-800 text-white'>
      <div className='fixed top-0 left-0 z-50'>
        <button
          onClick={toggleMenu}
          className='text-neutral-400 hover:text-white focus:outline-none lg:hidden flex p-4'
          aria-label='toggle menu'
        >
          <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className='w-12 h-12' />
        </button>
        <div className='lg:flex hidden'>
          <Navbar 
            updateTab={updateTab}
            tab={tab}
          />
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out 
      ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden lg:hidden`}>
        <div className='bg-gradient-to-r from-slate-800 to-slate-950'>
          <Navbar 
            updateTab={updateTab}
            tab={tab}
          />
        </div>
      </div>  
      <main className='flex flex-col w-full h-full p-10 lg:pl-40'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
