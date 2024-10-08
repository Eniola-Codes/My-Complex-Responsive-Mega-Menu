import React from "react";
import classes from "./Options.module.css";
import { FiX } from "react-icons/fi";
import { productNavigtionRoutes } from "../../data/data";

const OptionNav = ({ toggleProductTab }) => {
  return (
    <nav className={classes.navbar_container}>
      <ul className={classes.nav_menu}>
        {productNavigtionRoutes.map((route) => {
          if (route === "Apps") {
            return (
              <li key={route}>
                <button href={route.href} className={classes.apps_btn}>
                  {route}
                </button>
              </li>
            );
          }

          return (
            <li key={route}>
              <button href={route.href}>{route}</button>
            </li>
          );
        })}
      </ul>
      <div className={classes.action_buttons}>
        <button onClick={toggleProductTab}>
          <FiX />
        </button>
      </div>
    </nav>
  );
};

export default OptionNav;
