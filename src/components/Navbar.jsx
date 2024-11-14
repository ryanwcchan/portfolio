import NavItem from "./NavItem"

export default function Navbar() {
  return (
    <nav className="h-full p-6 flex justify-center">
        <ul className="text-yellow-400 flex flex-col justify-center items-center gap-6">
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
