import React, { useState } from "react";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 py-6 px-8" id="menu">
      <div className="max-w-6xl mx-auto flex justify-items-start items-start md:gap-12 md:flex-row flex-col">
        <button
          onClick={toggleMenu}
          className="md:hidden font-sans text-sm leading-9 uppercase"
        >
          Menu
        </button>

        <div
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row md:gap-12  top-20 md:top-0 left-0  bg-gray-100 md:bg-transparent md:p-0 w-[100%] md:relative md:items-center`}
        >
          <a
            href="#program-at-a-glance-intro"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#program-at-a-glance-intro")
                .scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="font-sans text-sm leading-9 uppercase"
          >
            Overview
          </a>
          <a
            href="#programs-of-study-container"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#programs-of-study-container")
                .scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="font-sans text-sm leading-9 uppercase"
          >
            Program Options
          </a>
          <a
            href="#careers-intro"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#careers-intro")
                .scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="font-sans text-sm leading-9 uppercase"
          >
            Careers
          </a>
          <a
            href="#additional-information"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#additional-information")
                .scrollIntoView({ behavior: "smooth" });
              setIsMenuOpen(false);
            }}
            className="font-sans text-sm leading-9 uppercase"
          >
            Additional Information
          </a>
          <div className="flex gap-2 flex-row justify-items-start items-center md:absolute md:right-0">
            <a
              href="https://admissions.tcnj.edu/apply/"
              className="py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-sans text-sm leading-5 uppercase font-bold"
            >
              Apply
            </a>
            <a
              href="https://connect.tcnj.edu/register/prospect"
              className="py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-sans text-sm leading-5 uppercase font-bold"
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
