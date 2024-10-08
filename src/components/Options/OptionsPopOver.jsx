import React from "react";
import classes from "./Options.module.css";
import { productNavigtionRoutes, types } from "../../data/data";
import { FiXCircle, FiChevronRight } from "react-icons/fi";

const OptionsPopOver = ({ onClosePopover, selectOption, active }) => {
  return (
    <div className={classes.popover}>
      <div className={classes.popover_container}>
        {productNavigtionRoutes.map((item) => {
          if (item === "Apps") {
            return (
              <div key={item}>
                <div className={classes.popover_apptitle}>
                  <button>{item}</button>
                  <button onClick={onClosePopover}>
                    <FiXCircle />
                  </button>
                </div>
                <div className={classes.popover_list}>
                  {types.map((type) => (
                    <button
                      className={active?.name === type.name && classes.active}
                      key={type.name}
                      onClick={() => {
                        selectOption(type);
                      }}
                    >
                      <span>{type.name}</span>
                      <span>
                        <FiChevronRight />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={item} className={classes.popover_titles}>
              <button>{item}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OptionsPopOver;
