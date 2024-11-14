import { NavLink } from "react-router-dom"

export default function NavItem({ location, children }) {
  return (
    <li className="navItem p-4 my-4 hover:text-yellow-600 rounded-lg">
        <NavLink 
          to={location}
        >{children}</NavLink>
    </li>
  )
}
