import React from "react";

export const FilterDisplayBox = ({ filteredData, boxId, checkboxContent }) => {
  //   console.log(filteredData);
  //   console.log(boxId);
  return (
    <div id={boxId} className="relative z-10 filtered-display-box">
      {/* {boxId}
      {filteredData.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}

      {checkboxContent &&
        checkboxContent.map((checkbox, index) => (
          <div key={index} className="drop-down-item">
            {checkbox}
          </div>
        ))}
    </div>
  );
};
