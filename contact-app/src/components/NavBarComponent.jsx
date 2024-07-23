import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from './styles/NavBar.module.css'

const NavBar = ({ toggleForm, formOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
const [activeLink, setActiveLink] = useState("")

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname)
  
  }, [location])
  

  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <NavLink
          to="/overview"
          className={style.navbarLogo}
        >
          <img src="./logo-globant.png" alt="Logo" />
        </NavLink>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className={style.navbarToggle}
          aria-controls="navbar-solid-bg"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
           
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
          className={`${style.navbarMenu}  ${
            menuOpen ? style.navbarMenuOpen : style.navbarMenuClosed
          }`}
          id="navbar-solid-bg"
        >
          <ul className={style.navbarMenu}>
            <li>
              <NavLink
                to="/overview"
                className={`${style.navbarItem} ${activeLink === '/overview' ? style.navbarItemActive : style.navbarItemDisnabled } `}
                aria-current="page"
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={`${style.navbarItem}  ${activeLink === '/contacts' ? style.navbarItemActive : style.navbarItemDisnabled } `}
              >
                Contacts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={`${style.navbarItem}  ${activeLink === '/favorites' ? style.navbarItemActive : style.navbarItemDisnabled } `}
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <a className={style.navbarItem}>
                <button
                  onClick={toggleForm}
                  className={style.navbarButton}
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
