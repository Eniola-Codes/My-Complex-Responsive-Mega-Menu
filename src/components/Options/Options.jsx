import React, { useState } from "react";
import classes from "./Options.module.css";
import OptionNav from "./OptionNav";
import OptionsBoard from "./OptionsBoard";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import OptionsPopOver from "./OptionsPopOver";
import { types } from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";
import { Variants } from "../utils/framer-variants";

const Options = ({ toggleProductTab }) => {
  const [active, setActive] = useState(types[0]);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <div className={classes.big_card}>
      <div className={classes.select_option}>
        <button onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
          <span>{active?.name}</span>
          <span> {isOptionsOpen ? <FiChevronUp /> : <FiChevronDown />}</span>
        </button>
      </div>

      <AnimatePresence>
        {isOptionsOpen && (
          <motion.div
            variants={Variants}
            initial="hidden"
            exit="exit"
            animate="animate"
            key="product-popover"
          >
            <OptionsPopOver
              selectOption={(type) => {
                setActive(type);
                setIsOptionsOpen(false);
              }}
              active={active}
              onClosePopover={() => setIsOptionsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <OptionNav toggleProductTab={toggleProductTab} />
      <OptionsBoard
        onSetActiveHandler={(type) => setActive(type)}
        active={active}
      />
    </div>
  );
};

export default Options;
