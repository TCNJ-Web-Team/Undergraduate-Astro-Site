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
    <div
      className="program-card filter hover:drop-shadow-md drop-shadow-none transition-all duration-300 bg-white"
      id={slug}
    >
      <a
        className="program-link block border-[1px] 
        border-[#bcbcbc] pl-[30px] pr-[45px] pt-[35px] pb-[40px] sm:min-h-[300px]
        
        "
        href={`./${slug}`}
      >
        <h2 className="font-domine font-bold text-[19px] leading-[28px]">
          {title}
        </h2>
        <hr className="my-[20px]" />
        <div className="icon-container grid grid-cols-2 gap-x-[20px] gap-y-[10px]">
          {programOptions &&
            programOptions.map((option, index) => {
              return (
                <p
                  key={index}
                  className={`font-opensans text-[14px] leading-[25px] inline-block ${
                    option.length > 15 && "col-span-full"
                  }`}
                >
                  {option}
                </p>
              );
            })}
          {additionalOptions &&
            additionalOptions.map((option, index) => {
              return (
                <p
                  key={index}
                  className={`font-opensans text-[14px] leading-[25px] inline-block ${
                    option.length > 15 && "col-span-full"
                  }`}
                >
                  {option}
                  {/* {option.length} */}
                </p>
              );
            })}
        </div>
      </a>
      {/* Access other fields here directly */}
    </div>
  );
};

export default ProgramCard;
