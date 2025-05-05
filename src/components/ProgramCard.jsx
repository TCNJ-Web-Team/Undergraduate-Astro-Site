import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../styles/program-card.scss";
const ProgramCard = ({
  program,
  listType,
  index,
  animationState,
  gradCheckCard,
}) => {
  console.log("ProgramCard: ", program);
  const [isHovered] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  const [pulsing, setPulsing] = useState(true);
  const activeHover = isHovered ? "active-hover" : "";
  const listOnly = listType == "list" ? true : false;
  useEffect(() => {
    setTimeout(() => setPulsing(false), 1200);
  });
  const { slug, redirecturl, programOptions, additionalOptions } =
    program.program;
  const { title } = program;

  // Process the redirecturl to remove the base URL if needed
  const processedRedirectUrl = redirecturl
    ? redirecturl.replace(
        "https://undergraduate-astro-site-t6y1l.kinsta.page",
        ""
      )
    : `./${slug}`;
  // console.log(additionalOptions);
  // const filteredAdditionalOptions = Array.isArray(additionalOptions)
  //   ? additionalOptions.filter((option) => option !== "Languages")
  //   : [];
  // SWAP additionalOptions for filteredAdditionalOptions when language icon added
  // console.log(filteredAdditionalOptions);
  // console.log("Original URL:", redirecturl);
  // console.log("Processed URL:", processedRedirectUrl);
  // console.log(option);
  const progOptionSort = {
    Major: 0,
    "Major/Specialization": 0,
    Minor: 1,
    Certificate: 2,
    "Three-Year Bachelor's": 3,
    Accelerated: 4,
    "Dual Degree": 5,
    "Teacher Education": 6,
    Undeclared: 7,
    Prelaw: 8,
    Premed: 9,
    "Premed/Prehealth": 9,
  };

  return (
    <div
      className={`program-card filter drop-shadow-none transition-all duration-300 bg-white ${activeHover}
      ${pulsing ? "pulse" : ""}`}
      id={slug}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <motion.a
        className={`program-card-gtm program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${
           listOnly &&
           "md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px] lg:!pt-[35px]"
         }`}
        href={
          gradCheckCard
            ? `./graduate/${processedRedirectUrl}`
            : processedRedirectUrl
        }
        target={processedRedirectUrl.includes("http") ? "_blank" : "_self"}
        // target={redirecturl ? "_blank" : "_self"}
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
        sm:text-[21px] sm:leading-[30px]"
        >
          {title}
        </h2>
        <hr
          className={`my-[20px] border-[#BCBCBC] ${listOnly && "md:hidden"}`}
        />
        <div
          className={`icon-container flex flex-wrap gap-x-[20px] gap-y-[10px] ${
            listOnly && "md:max-w-[260px] md:w-[100%]"
          }`}
        >
          {(programOptions || additionalOptions) &&
            [...(programOptions || []), ...(additionalOptions || [])] // Combine programOptions and additionalOptions
              .slice() // Create a shallow copy to avoid mutating the original array
              .sort((a, b) => progOptionSort[a] - progOptionSort[b]) // Sort the combined array
              .map((option, index) => {
                const formatOption = (option) => {
                  // console.log(option);
                  return option
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, "");
                };

                const getImageDimensions = (optionType) => {
                  // console.log(optionType);
                  const sanitizedOption = optionType
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, ""); // Sanitize and lowercase
                  switch (sanitizedOption) {
                    case "accelerated":
                      return "w-[23.658px] h-[15px]";
                    case "certificate":
                      return "w-[14.881px] h-[15px]";
                    case "dual-degree":
                      return "w-[15.343px] h-[15px]";
                    case "major":
                      return "w-[13.865px] h-[15px]";
                    case "majorspecialization":
                      return "w-[13.865px] h-[15px]";
                    case "minor":
                      return "w-[14.041px] h-[11px]";
                    case "prelaw":
                      return "w-[18.63px] h-[15px]";
                    case "premed":
                      return "w-[15px] h-[15px]";
                    case "premedprehealth":
                      return "w-[15px] h-[15px]";
                    case "teacher-education":
                      return "w-[14.236px] h-[15px]";
                    case "three-year-bachelors":
                      return "w-[13.391px] h-[15px]";
                    case "language":
                      return "w-[17.641px] h-[14.984px]";
                    case "undeclared-option":
                      return "w-[11.223px] h-[15px]";
                    default:
                      return "w-auto h-auto max-h-[15px]"; // default size
                  }
                };

                return (
                  <p
                    key={index}
                    className={`font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${
                      option.length > 15 && "col-span-full"
                    }`}
                  >
                    <img
                      loading="lazy"
                      src={`/card-icons/${formatOption(option)}.svg`}
                      // alt={option}
                      className={`${getImageDimensions(option)} object-contain`}
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
