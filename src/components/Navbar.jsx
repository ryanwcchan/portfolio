import NavItem from "./NavItem"
import { useState } from "react"

export default function Navbar() {
  const [tab, setTab] = useState('/')

  function updateTab(location) {
    setTab(location)
    console.log(tab)
  }

  const navItems = [
    { location: '/', icon: 'fa-solid fa-house' },
    { location: 'about', icon: 'fa-solid fa-user' },
    { location: 'projects', icon: 'fa-solid fa-layer-group' },
    { location: 'resume', icon: 'fa-solid fa-briefcase' },
    { location: 'contact', icon: 'fa-solid fa-people-arrows' },
  ];

  return (
    <nav className="h-full p-6 flex flex-col justify-center items-center">
        <ul className="rounded-full h-fit text-white grid grid-rows-5 text-center 
        justify-center items-center shadow overflow-hidden bg-blue-500">
          {navItems.map((item, index) => (
            <NavItem 
              key={index} 
              location={item.location} 
              updateTab={updateTab} 
              tab={tab} 
            >
              <i className={item.icon}></i>
            </NavItem>
          ))}
        </ul>
    </nav>
  )
}
