import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Variants, containerVariants } from "../utils/framer-variants";
import classes from "./Layout.module.css";
import logo from "../../../public/assets/logo.png";
import { FiXCircle } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import SidebarAccordion from "./SidebarAccordion";

const Sidebar = ({ sidebarStatus, onCloseSidebar, onOpenProductTab }) => {
  return (
    <div className={classes.sidebar}>
      <AnimatePresence mode="wait">
        {sidebarStatus && (
          <motion.div
            className={classes.backdrop}
            variants={Variants}
            initial="hidden"
            exit="exit"
            animate="animate"
            key="backdrop"
            onClick={onCloseSidebar}
          ></motion.div>
        )}
        {sidebarStatus && (
          <motion.section
            className={classes.sidebar_container}
            variants={containerVariants}
            initial="hidden"
            animate="animate"
            exit="exit"
            key="sidebar"
          >
            <div className={classes.logo_div}>
              <a href="#">
                <img src={logo} alt="Logo" className={classes.logo} />
              </a>
              <button onClick={onCloseSidebar}>
                <FiXCircle />
              </button>
            </div>
            <div className={classes.search}>
              <input type="text" placeholder="Search hugecrm.com" />
              <button>
                <CiSearch />
              </button>
            </div>
            <SidebarAccordion onOpenProductTab={onOpenProductTab}/>
            <button className={classes.action_btn}>Sign In</button>
            <p className={classes.all_btn}>All Huge CRM Products</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
