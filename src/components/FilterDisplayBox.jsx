import React from "react";

export const FilterDisplayBox = ({ filteredData, boxId }) => {
  //   console.log(filteredData);
  //   console.log(boxId);
  return (
    <div id={boxId}>
      {boxId}
      {filteredData.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
