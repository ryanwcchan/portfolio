import { NavLink } from "react-router-dom"

export default function NavItem({ location, children, updateTab, tab }) {
  return (
    <NavLink to={location}>
        <li onClick={() => updateTab(location)}
            className={"navItem py-6 p-4 transition-colors duration-300 ease-in-out " +
                (location === tab 
                    ? "bg-blue-900 hover:text-blue-400 text-white" 
                    : " hover:text-blue-900")
            }>
            {children}
        </li>
    </NavLink>
  )
}
