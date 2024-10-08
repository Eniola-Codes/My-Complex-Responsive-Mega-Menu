import React, { useState } from "react";
import { accordionData } from "../../data/data";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import classes from "./Layout.module.css";

// defaultActiveKey - determines which accordion item is initially open
// collapsible - determines whether all accordion item can be closed
const SidebarAccordion = ({
  defaultActiveKey,
  collapsible = true,
  onOpenProductTab,
}) => {
  //keeps track of currently active accordion item's index
  const [activeAccordionItem, setActiveAccordionItem] =
    useState(defaultActiveKey);

  return (
    <div className={classes["accordion-container"]}>
      {accordionData.map((item, index) => (
        <>
          <div className={classes["accordion-item"]} key={item.header}>
            {/* serves as clickable header of accordion item */}
            <div
              className={`${classes["accordion-toggle"]} ${
                index === 0
                  ? classes.start
                  : accordionData.length - 1 === index && classes.end
              }`}
              onClick={() =>
                collapsible && activeAccordionItem === index
                  ? setActiveAccordionItem(null)
                  : item?.body && setActiveAccordionItem(index)
              }
            >
              <div className={classes["accordion-toggle-header"]}>
                {item.header}
              </div>
              {item?.body && (
                <div className={classes["accordion-toggle-icon"]}>
                  {activeAccordionItem === index ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              )}
            </div>
            {/* displaying accordion body based on current active accordion item */}
            {activeAccordionItem === index && (
              <div className={classes["accordion-body"]}>
                {accordionData[activeAccordionItem]?.body?.map(
                  (item, index) => {
                    if (item === "Apps") {
                      return (
                        <button onClick={onOpenProductTab} key={index}>
                          {item}
                        </button>
                      );
                    }
                    return <button key={index}>{item}</button>;
                  }
                )}
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default SidebarAccordion;
