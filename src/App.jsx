import Navbar from './sections/Navbar'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='flex bg-gradient-to-tr from-slate-950 to-slate-800 text-white'>
      <Navbar />
      <main className='flex flex-col w-full h-full overflow-y-auto p-10 pl-40 sm:pl-30'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
