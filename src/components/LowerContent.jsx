import React from "react";

const LowerContent = ({ lowerContent }) => {
  return (
    <div id="lower-content">
      {lowerContent.map((content, index) => {
        return (
          <div key={index}>
            <h3>{content.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content.body }} />
          </div>
        );
      })}
    </div>
  );
};

export default LowerContent;
