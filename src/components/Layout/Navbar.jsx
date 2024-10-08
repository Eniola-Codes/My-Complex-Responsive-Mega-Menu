import React from "react";
import classes from "./Layout.module.css";
import logo from "../../../public/assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { navigationRoutes } from "../../data/data";

const Navbar = ({productTabIsOpen, toggleProductTab,onOpenSidebar}) => {

  return (
    <div className={classes.navbar}>
      <nav className={classes.navbar_container}>
        <div className={classes.logo_div}>
        <button className={classes.hamburger} type="button" id="hamburger" onClick={onOpenSidebar}>
            <div />
            <div />
            <div />
          </button>
          <a href="#">
            <img src={logo} alt="Logo" className={classes.logo} />
          </a>
         
        </div>
        <ul className={classes.nav_menu}>
          {navigationRoutes.map((route) => {
            if (route === "Products") {
              return (
                <li key={route}>
                  <button
                    className={classes.product_btn}
                    onClick={() => toggleProductTab(!productTabIsOpen)}
                  >
                    <span>{route}</span>
                    <span>
                      {productTabIsOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  </button>
                </li>
              );
            }

            return (
              <li key={route}>
                <button>{route}</button>
              </li>
            );
          })}
        </ul>
        <div className={classes.action_buttons}>
          <button>
            <CiSearch />
          </button>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
