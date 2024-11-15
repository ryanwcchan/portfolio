import NavItem from "./NavItem"
import { useState } from "react"

export default function Navbar() {
  const [tab, setTab] = useState('/')

  function updateTab(location) {
    setTab(location)
    console.log(tab)
  }

  return (
    <nav className="h-full p-6 flex flex-col justify-center items-center">
        <ul className="rounded-full h-fit text-white grid grid-rows-5 text-center 
        justify-center items-center shadow overflow-hidden bg-blue-500">
          <NavItem location="/" updateTab={updateTab} tab={tab}>
            <i className="fa-solid fa-house"></i>
          </NavItem>
          <NavItem location="about" updateTab={updateTab} tab={tab}>
            <i className="fa-solid fa-user"></i>
          </NavItem>
          <NavItem location="projects" updateTab={updateTab} tab={tab}>
            <i className="fa-solid fa-layer-group"></i>
          </NavItem>
          <NavItem location="resume" updateTab={updateTab} tab={tab}>
            <i className="fa-solid fa-briefcase"></i>
          </NavItem>
          <NavItem location="contact" updateTab={updateTab} tab={tab}>
            <i className="fa-solid fa-people-arrows"></i>
          </NavItem>
        </ul>
    </nav>
  )
}
