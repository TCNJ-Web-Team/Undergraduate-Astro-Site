import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/program-card.scss";
const ProgramCard = ({ program, listType, index, animationState }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [pulsing, setPulsing] = useState(true);
  const activeHover = isHovered ? "active-hover" : "";
  const listOnly = listType == "list" ? true : false;
  useEffect(() => {
    setTimeout(() => setPulsing(false), 1200);
  });
  const { slug, redirecturl, programOptions, additionalOptions } =
    program.program;
  const { title } = program;
  // console.log(animationState);
  // console.log(redirecturl);
  // console.log(programOptions);

  const progOptionSort = {
    Major: 0,
    Minor: 1,
    Certificate: 2,
    "Three-Year Bachelor's": 3,
    Accelerated: 4,
    "Dual Degree": 5,
    "Teacher Education": 6,
    Undeclared: 7,
    Prelaw: 8,
    Premed: 9,
  };

  return (
    <div
      className={`program-card filter   drop-shadow-none transition-all duration-300 bg-white ${activeHover}
      ${pulsing ? "pulse" : ""}  
      `}
      id={slug}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        className={`program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${
           listOnly &&
           "md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]"
         }
        `}
        href={redirecturl ? redirecturl : `./${slug}`}
        target={redirecturl ? "_blank" : "_self"}
        initial={animationState ? { opacity: 0, y: 5 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: (index + 0.25) * 0.15,
          ease: "easeOut",
          duration: 0.3,
          // type: "spring",
          // stiffness: 50,
        }}
      >
        <h2
          className="font-domine font-bold 
        text-[19px] leading-[28px]
        sm:text-[21px] sm:leading-[30px]

        "
        >
          {title}
        </h2>
        <hr
          className={`my-[20px] border-[#BCBCBC] ${listOnly && "md:hidden"}`}
        />
        <div
          className={`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${
            listOnly && "md:max-w-[260px] md:w-[100%]"
          }`}
        >
          {(programOptions || additionalOptions) &&
            [...(programOptions || []), ...(additionalOptions || [])] // Combine programOptions and additionalOptions
              .slice() // Create a shallow copy to avoid mutating the original array
              .sort((a, b) => progOptionSort[a] - progOptionSort[b]) // Sort the combined array
              .map((option, index) => {
                const formatOption = (option) => {
                  return option
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, "");
                };
                return (
                  <p
                    key={index}
                    className={`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${
                      option.length > 15 && "col-span-full"
                    }`}
                  >
                    <img
                      src={`/card-icons/${formatOption(option)}.svg`}
                      alt={option}
                      className="max-h-[15px]"
                    />
                    {option}
                  </p>
                );
              })}
        </div>
      </motion.a>
      {/* Access other fields here directly */}
    </div>
  );
};

export default ProgramCard;
