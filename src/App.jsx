import Navbar from './sections/Navbar'
import { Outlet, useLocation } from 'react-router'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className='lg:flex bg-gradient-to-tr from-slate-950 to-slate-800 text-white'>
      <Navbar />
      <main className='flex flex-col w-full h-full p-10 lg:pl-40'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
