import NavItem from "./NavItem"
import { useState } from "react"

export default function Navbar() {
  const [tab, setTab] = useState('home')

  return (
    <nav className="h-full p-6 flex justify-center items-center">
        <ul className="rounded-full h-fit text-black grid grid-rows-5 text-center 
        justify-center items-center gap-6 border shadow py-4 overflow-hidden">
          <NavItem location="/">
            <i className="fa-solid fa-house"></i>
          </NavItem>
          <NavItem location="about">
            <i className="fa-solid fa-user"></i>
          </NavItem>
          <NavItem location="projects">
            <i className="fa-solid fa-layer-group"></i>
          </NavItem>
          <NavItem location="resume">
            <i className="fa-solid fa-briefcase"></i>
          </NavItem>
          <NavItem location="contact">
            <i className="fa-solid fa-people-arrows"></i>
          </NavItem>
        </ul>
    </nav>
  )
}
