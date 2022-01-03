import React from "react";
import { Link } from "react-router-dom";
import s from "./NavBar.module.css";

const NavBar = ({ renderMovies }) => {
  return (
    <>
      <nav className={s.navbar}>
        <ul className={s.navbarList}>
          <li className={s.navbarItem} onClick={renderMovies}>
            <Link className={s.navbarLink} to={"/"}>
              Home
            </Link>
          </li>
          <li className={s.navbarItem}>
            <Link className={s.navbarLink} to={"/movies"}>
              Movies
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
};

export default NavBar;