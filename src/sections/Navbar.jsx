import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { pages } from "../constants";

function NavItems({ pages }) {
  return (
    <ul
      className="rounded-full h-fit text-white grid grid-rows-5 text-center
    justify-center items-center shadow overflow-hidden bg-blue-500"
    >
      {pages.map((item) => (
        <NavLink
          to={item.location}
          key={item.location}
          className={({ isActive }) =>
            `navItem py-6 p-4 transition-colors duration-300 ease-in-out ${
              isActive
                ? "bg-blue-900 hover:text-blue-400 text-white"
                : " hover:text-blue-900"
            }`
          }
        >
          <li>
            <i className={item.icon}></i>
          </li>
        </NavLink>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  }

  return (
    <header ref={sidebarRef}>
      {/* Mobile menu button */}
      <div className="fixed top-0 left-0">
        <button
          onClick={toggleMenu}
          className={`transform duration-100 ease-in-out ${
            isOpen ? "translate-x-[150%]" : "translate-x-0"
          } text-neutral-400 hover:text-white focus:outline-none lg:hidden flex p-4`}
          aria-label="toggle menu"
        >
          <img
            src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
            alt="toggle"
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%]"
        }  transition-all duration-300 ease-in-out fixed h-full border-r-4 
        border-blue-900 px-2 bg-gradient-to-l
        after:first:from-slate-800 to-slate-950`}
      >
        <div
          className="cursor-pointer"
          onClick={() => console.log("Logo clicked")}
        >
          <NavLink to={"/"}>
            <h1
              className="text-3xl text-white max-w-[100px]
            break-words text-center absolute top-6 left-1/2 -translate-x-1/2"
            >
              <span className="text-green-500 font-bold">{"{"}</span>
              <span className="text-blue-500 font-bold hover:text-blue-900">
                RC
              </span>
              <span className="text-green-500 font-bold">{"}"}</span>
            </h1>
          </NavLink>
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          <nav className="h-screen p-6 flex flex-col justify-center items-center">
            <NavItems pages={pages} />
          </nav>
        </div>
        <button 
          onClick={toggleTheme} 
          className="py-4 my-6">
          <i className={`absolute bottom-[3rem] font-bold text-4xl ${theme === "dark" ? "fa-regular fa-sun left-[35%]" : "fa-regular fa-moon left-[40%]"}`}></i>
        </button>
      </div>
    </header>
  );
}
