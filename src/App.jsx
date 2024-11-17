import Header from './components/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='flex bg-gradient-to-tr from-slate-950 to-slate-800 text-white'>
      <Header />
      <main className='flex flex-col w-full overflow-y-auto p-10 pl-64 h-screen max-w-6xl mx-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
