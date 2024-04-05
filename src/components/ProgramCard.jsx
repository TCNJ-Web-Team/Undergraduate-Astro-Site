import React, { useState } from "react";

import "../styles/program-card.scss";
const ProgramCard = ({ program, listType }) => {
  const [isHovered, setIsHovered] = useState(false);

  const listOnly = listType == "list" ? true : false;

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
      className={`program-card filter hover:drop-shadow-md drop-shadow-none transition-all duration-300 bg-white ${
        isHovered ? "active-hover" : ""
      }`}
      id={slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        className={`program-link block border-[1px] 
        border-[#bcbcbc] pl-[30px] pr-[45px] pt-[35px] pb-[40px] sm:min-h-[300px]
         ${
           listOnly &&
           "md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"
         }
        `}
        href={`./${slug}`}
      >
        <h2 className="font-domine font-bold text-[19px] leading-[28px]">
          {title}
        </h2>
        <hr className={`my-[20px] ${listOnly && "md:hidden"}`} />
        <div
          className={`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${
            listOnly && "md:max-w-[260px]"
          }`}
        >
          {programOptions &&
            programOptions.map((option, index) => {
              const formatOption = (option) => {
                return option
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]/g, "");
              };
              return (
                <p
                  key={index}
                  className={`font-opensans text-[14px] leading-[25px] inline-flex gap-x-[5px] ${
                    option.length > 15 && "col-span-full"
                  }`}
                >
                  <img
                    src={`/card-icons/${formatOption(option)}.svg`}
                    alt={option}
                  />
                  {option}
                </p>
              );
            })}

          {additionalOptions &&
            additionalOptions.map((option, index) => {
              const formatOption = (option) => {
                return option
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]/g, "");
              };
              return (
                <p
                  key={index}
                  className={`font-opensans text-[14px] leading-[25px]  inline-flex gap-x-[5px] ${
                    option.length > 15 && "col-span-full"
                  }`}
                >
                  <img
                    src={`/card-icons/${formatOption(option)}.svg`}
                    alt={option}
                  />
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
