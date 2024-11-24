import Navbar from './sections/Navbar'
import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div className='lg:flex transition-colors duration-300 ease-in-out bg-gradient-to-tr from-slate-200 to-slate-300 dark:bg-gradient-to-tr dark:from-slate-950 dark:to-slate-800 text-black dark:text-white'>
      <Navbar />
      <main className='flex flex-col w-full h-full p-10 lg:pl-40'>
        <ScrollToTop />
        <Outlet />
      </main>
    </div>
  )
}

export default App
