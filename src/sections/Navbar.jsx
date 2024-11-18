import NavItem from "../components/NavItem"

export default function Navbar({ tab, updateTab }) {
  const navItems = [
    { location: '/', icon: 'fa-solid fa-house' },
    { location: 'about', icon: 'fa-solid fa-user' },
    { location: 'projects', icon: 'fa-solid fa-layer-group' },
    { location: 'work', icon: 'fa-solid fa-briefcase' },
    { location: 'contact', icon: 'fa-solid fa-people-arrows' },
  ];

  return (
    <header className='fixed h-full border-r-4 border-blue-900 px-2 bg-gradient-to-r
    from-slate-800 to-slate-950'>
      <div className="flex flex-col justify-center items-center h-full">  
        <nav className="h-full p-6 flex flex-col justify-center items-center">
          <ul className="rounded-full h-fit text-white grid grid-rows-5 text-center
          justify-center items-center shadow overflow-hidden bg-blue-500">
            {navItems.map((item) => (
              <NavItem
                key={item.location}
                location={item.location}
                updateTab={updateTab}
                tab={tab}
              >
                <i className={item.icon}></i>
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
