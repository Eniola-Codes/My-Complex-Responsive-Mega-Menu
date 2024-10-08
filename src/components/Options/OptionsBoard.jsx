import React from "react";
import classes from "./Options.module.css";
import { FiChevronRight } from "react-icons/fi";
import { types } from "../../data/data";

const Options = ({onSetActiveHandler, active}) => {

  return (
    <div className={classes.options_card}>
      <div className={classes.options}>
        {types.map((type) => (
          <button
            key={type.name}
            className={active?.name === type.name && classes.active}
            onMouseOver={() => {
              onSetActiveHandler(type);
            }}
          >
            <span>{type.name}</span>
            <span>
              <FiChevronRight />
            </span>
          </button>
        ))}
      </div>
      <div className={classes.tab}>
        <div className={classes.title_group}>
          <h3 className={classes.title}>{active.name}</h3>
          <p className={classes.sub_title}>{active.description}</p>
        </div>
        <div className={classes.card_group}>
          {active?.items?.map((type) => (
            <div key={type.title} className={classes.outer_card}>
              <div className={classes.card}>
                <img src={type.icon} />
                <h5>{type.title}</h5>
                <p>{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;
