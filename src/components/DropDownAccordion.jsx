import React, { useState } from "react";

export default function DropDownAccordion({
  checkboxContent,
  title,
  isOpen,
  onToggle,
}) {
  return (
    <div className={isOpen ? "open-drop" : ""}>
      <h3
        className={`font-opensans font-semibold leading-[30px] text-black text-[17px] uppercase p-[34px] py-[24px] bg-white border-[1px] border-[#bcbcbc] ${
          isOpen ? "open" : ""
        }`}
        onClick={onToggle}
      >
        {title}
      </h3>

      <div className="input-list">
        {isOpen &&
          checkboxContent.map((checkbox, index) => (
            <div key={index}>{checkbox}</div>
          ))}
      </div>
    </div>
  );
}
