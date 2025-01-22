import React from "react";

function NavigationBar() {
  return (
    <div
      className="bg-[#F1F1F1] pt-[23px] pb-[23px] pl-[35px] pr-[35px]"
      id="menu"
    >
      <div className="max-w-[1128px] mx-auto flex justify-items-start items-center md:gap-[50px]">
        <a
          href="#program-at-a-glance-intro"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#program-at-a-glance-intro")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="font-opensans text-[14px] leading-[34px] text-left uppercase"
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
          }}
          className="font-opensans text-[14px] leading-[34px] text-left uppercase"
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
          }}
          className="font-opensans text-[14px] leading-[34px] text-left uppercase"
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
          }}
          className="font-opensans text-[14px] leading-[34px] text-left uppercase"
        >
          Additional Information
        </a>
        <div
          id="nav-button-container"
          className="ml-auto flex gap-[10px] flex-row justify-items-start items-center"
        >
          <a
            href="https://admissions.tcnj.edu/apply/"
            className="py-[12px] px-[25px] bg-tcnjyellow hover:bg-[#eabd00]
            transition-all duration-300 ease-in-out
            text-black font-opensans text-[14px] leading-[20px] uppercase font-bold"
          >
            Apply
          </a>
          <a
            href="https://connect.tcnj.edu/register/prospect"
            className="py-[12px] px-[25px] bg-tcnjyellow hover:bg-[#eabd00]
            transition-all duration-300 ease-in-out
            text-black font-opensans text-[14px] leading-[20px] uppercase font-bold"
          >
            Get Info
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
