import React, { useState } from "react";
import "../styles/drop-down-item.scss";
export default function DropDownAccordion({
  checkboxContent,
  title,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className={`relative before:content-[''] before:block before:w-full before:h-[10px] w-[100%] before:bg-tcnjyellow  ${
        isOpen ? "open-drop" : ""
      }`}
    >
      <h3
        className={`
        dropdown-label
        font-opensans 
        font-semibold 
        leading-[30px] 
        text-black 
        text-[17px] 
        uppercase 
        p-[34px] py-[24px] 
        bg-white border-[1px] 
        border-[#bcbcbc] 
     border-t-0
     cursor-pointer
        ${isOpen ? "open" : ""}`}
        onClick={onToggle}
      >
        {title}
      </h3>

      <div
        className={`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[100%]
        border-[#bcbcbc] border-t-0 bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-20
md:h-auto

        ${
          isOpen &&
          `pointer-events-auto block opacity-100 z-50 py-[30px] h-[auto!important]`
        }
        `}
        id={`${isOpen ? "open-list" : ""}`}
      >
        {checkboxContent.map((checkbox, index) => (
          <div key={index} className="drop-down-item">
            {checkbox}
          </div>
        ))}
      </div>
    </div>
  );
}
