import { NavLink } from "react-router-dom"

export default function NavItem({ location, children }) {
  return (
    <li className="navItem p-4 rounded-full hover:text-yellow-400">
        <NavLink 
          to={location}
        >{children}</NavLink>
    </li>
  )
}
