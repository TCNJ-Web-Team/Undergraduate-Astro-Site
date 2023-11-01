import { useState } from "react";
// import { wpquery } from "../data/wordpress";

export default function ProgramList({ data }) {
  const [newData, setData] = useState(data);

  return (
    <div className="program-wrapper">
      {newData &&
        newData.programs.nodes.map((program, index) => {
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
          // console.log(title);
          return (
            <div className="program-card" id={slug} key={slug + index}>
              <a className="program-link" href={`./` + slug}>
                <p>{title}</p>
                <hr />
                <div className="icon-container">
                  {programOptions &&
                    programOptions.map((option, index) => {
                      // console.log(option);
                      return <p key={index}>{option}</p>;
                    })}
                  {additionalOptions &&
                    additionalOptions.map((option, index) => {
                      // console.log(option);
                      return <p key={index}>{option}</p>;
                    })}
                </div>
              </a>
              {/* Access other fields here directly */}
            </div>
          );
        })}
    </div>
  );
}
