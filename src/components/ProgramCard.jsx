import React from "react";

const ProgramCard = ({ program }) => {
  const {
    degreeType,
    slug,
    school,
    programOptions,
    additionalOptions,
    programAtAGlance,
    learnMoreList,
  } = program.program;
  const { title } = program;

  return (
    <div className="program-card" id={slug}>
      <a className="program-link" href={`./${slug}`}>
        <p>{title}</p>
        <hr />
        <div className="icon-container">
          {programOptions &&
            programOptions.map((option, index) => {
              return <p key={index}>{option}</p>;
            })}
          {additionalOptions &&
            additionalOptions.map((option, index) => {
              return <p key={index}>{option}</p>;
            })}
        </div>
      </a>
      {/* Access other fields here directly */}
    </div>
  );
};

export default ProgramCard;
