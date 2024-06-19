import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ toggleForm, formOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
const [activeLink, setActiveLink] = useState("")

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname)
  
  }, [location])
  

  return (
    <nav className=" bg-white  shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/overview"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="./logo-globant.png" className="h-8" alt="Logo" />
        </NavLink>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400"
          aria-controls="navbar-solid-bg"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>


        
        <section
          className={`w-full md:block md:w-auto ${
            menuOpen ? "block" : "hidden "
          }`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/overview"
                className={`block ${activeLink === '/overview' ? 'text-c1d72d' : "text-gray-900 "} py-4 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c1d72d`}
                aria-current="page"
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={`block ${activeLink === '/contacts' ? 'text-c1d72d' : "text-gray-900 "} py-4 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c1d72d`}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={`block ${activeLink === '/favorites' ? 'text-c1d72d' : "text-gray-900 "} py-4 px-3 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-c1d72d`}
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <a className="block py-4 px-3 md:p-0 text-gray-900 rounded md:hover:bg-transparent  md:border-0 md:hover:text-c1d72d">
                <button
                  onClick={toggleForm}
                  className="bg-c1d72d h-7 w-20 shadow-xl hover:bg-white hover:text-c1d72d hover:border-2 hover:border-c1d72d transition duration-300 rounded"
                >
                  {!formOpen ? "+ New" : "Close"}
                </button>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
