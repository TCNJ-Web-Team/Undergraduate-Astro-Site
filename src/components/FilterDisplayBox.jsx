import React from "react";

export const FilterDisplayBox = ({ filteredData, boxId, checkboxContent }) => {
  //   console.log(filteredData);
  //   console.log(boxId);
  return (
    <>
      {checkboxContent &&
        checkboxContent.map((checkbox, index) => (
          <div key={index} className={`drop-down-item ${boxId}`}>
            {checkbox}
          </div>
        ))}
    </>
  );
};
