import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className={style.navbar}>
      <div className={style.navbarContainer}>
        <Link to="/" className={style.navbarLogo}>
          <img src="./logo-globant.png" alt="Logo" />
        </Link>
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
              <Link
                to="/"
                className={`${style.navbarItem} ${
                  activeLink === "/"
                    ? style.navbarItemActive
                    : style.navbarItemDisnabled
                } `}
                aria-current="page"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${style.navbarItem}  ${
                  activeLink === "/about"
                    ? style.navbarItemActive
                    : style.navbarItemDisnabled
                } `}
              >
                about
              </Link>
            </li>

            <li>
              <Link to="/login" className={style.navbarItem}>
                <button className={style.navbarButton}>Login</button>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
