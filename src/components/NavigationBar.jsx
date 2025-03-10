import React, { useState } from "react";

function NavigationBar({
  careerCheck,
  additionalInfoCheck,
  teachingCareerCheck,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100  px-8 sm:px-[80px] md:px-8" id="menu">
      <div className="lg:max-w-[70.5rem] mx-auto flex justify-items-start items-start md:gap-12 md:flex-row flex-col md:max-w-[920px]">
        <button
          onClick={toggleMenu}
          className="md:hidden font-opensans text-[14px] leading-[40px] uppercase py-[12.5px] md:py-0 flex gap-[15px] items-center flex-row"
        >
          <span>
            <img
              className="w-[17px] h-[14px] "
              src={`https://tcnj.edu/custom/icon-library/${isMenuOpen ? "menu-close" : "menu-icon"}.svg`}
              alt="menu icon"
            />
          </span>
          Menu
        </button>

        <div
          className={`overflow-hidden transition-all md:transition-none duration-300 ease-in-out
          ${isMenuOpen ? "h-[250px] opacity-100 md:h-[60px]" : "h-[0px] md:h-[60px] opacity-0 md:opacity-100"} 
          flex
          transition-all duration-300 ease-in-out 
          md:flex flex-col md:flex-row md:gap-12  top-20 md:top-0 left-0  bg-gray-100 md:bg-transparent md:p-0 w-[100%] md:relative md:items-center`}
        >
          <hr className="mb-[10px] md:hidden" />
          <a
            href="#program-at-a-glance-intro"
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                document
                  .querySelector("#program-at-a-glance-intro")
                  .scrollIntoView({ behavior: "smooth" });
              }, 100);
              // setTimeout(() => {
              //   setIsMenuOpen(false);
              // }, 300);
            }}
            className="font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit"
          >
            Overview
            <span className="absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue"></span>
          </a>
          <a
            href="#programs-of-study-container"
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                document
                  .querySelector("#programs-of-study-container")
                  .scrollIntoView({ behavior: "smooth" });
              }, 100);
              // setIsMenuOpen(false);
            }}
            className="font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit"
          >
            Program Options
            <span className="absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue"></span>
          </a>
          {careerCheck && (
            <a
              href="#careers-intro"
              onClick={(e) => {
                e.preventDefault();
                setTimeout(() => {
                  document
                    .querySelector("#careers-intro")
                    .scrollIntoView({ behavior: "smooth" });
                }, 100);
                // setIsMenuOpen(false);
              }}
              className="font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit"
            >
              {teachingCareerCheck === "Teaching Careers"
                ? "Teaching Careers"
                : teachingCareerCheck}
              <span className="absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue"></span>
            </a>
          )}
          {additionalInfoCheck && (
            <a
              href="#additional-information"
              onClick={(e) => {
                e.preventDefault();
                // setIsMenuOpen(false);
                setTimeout(() => {
                  document
                    .querySelector("#additional-information")
                    .scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit"
            >
              Additional Information
              <span className="absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue"></span>
            </a>
          )}
          <div className="flex gap-2 flex-row justify-items-start items-center md:absolute md:right-0 mt-[15px] md:mt-0">
            <a
              href="https://admissions.tcnj.edu/apply/"
              target="_blank"
              className="program-button-nav-gtm py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-opensans text-[14px] leading-5 uppercase font-[600]"
            >
              Apply
            </a>
            <a
              href="https://connect.tcnj.edu/register/prospect"
              target="_blank"
              className="py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-opensans text-[14px] leading-5 uppercase font-[600]"
            >
              Get Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
