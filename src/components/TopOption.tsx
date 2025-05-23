import type { FC } from "react";
import Popup from "./Popup";
import React, { useState } from "react";

type Department = {
  deptTitle: string;
  deptUrl: string;
};
interface Props {
  heading: string;
  imgSrc: string;
  school?: string[];
  department?: Department[];
  children?: React.ReactNode;
}
const anyDepartmentText =
  "This program is open to students in any department and offers guidance from the Medical Careers Advisory Committee for those exploring and preparing for careers in health professions.";

const TopOption: FC<Props> = ({ heading, imgSrc, department, children }) => {
  // console.log(department);

  const [popupContent, setPopupContent] = useState<
    string | string[] | Department[] | null
  >(null);
  const [popupHeading, setPopupHeading] = useState<string | string[] | null>(
    null
  );

  interface HandleLinkClickProps {
    content: string | string[] | Department[];
    popupTitle: string;
  }

  const handleLinkClick = ({ content, popupTitle }: HandleLinkClickProps) => {
    setPopupContent(content);
    setPopupHeading(popupTitle); // Set the heading for the popup
  };

  const handleClosePopup = () => {
    setPopupContent(null);
    setPopupHeading(null); // Clear the heading when the popup is closed
  };
  // console.log(department);
  return (
    <div className="flex-row flex items-start gap-[18px] md:gap-[15px] sm:max-w-[33%]">
      <img
        className="w-[26px] h-auto mt-[3px]"
        src={`/micro/${imgSrc}.svg`}
        alt={`${heading} icon`}
      />
      <div className="flex-col flex gap-[2px] md:gap-[5px]">
        <h2
          className="text-[17px] leading-[22px] sm:leading-[23px] 
        md:text-[20px] md:leading-[24px] lg:leading-[24px] font-interstate not-italic uppercase font-extrabold"
        >
          {heading}
        </h2>
        <p className="text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px] lg:mt-0 lg:leading-[26px]  text-start">
          {department && department[0].deptTitle && (
            <span>
              {department.length < 3 ? (
                department[0].deptTitle.toLowerCase() === "any" ||
                department[0].deptTitle.toLowerCase() === "any department" ? (
                  <button
                    onClick={() =>
                      handleLinkClick({
                        content: anyDepartmentText,
                        popupTitle: "Any Department",
                      })
                    }
                    className="text-primarylinkblue   text-start flex items-center gap-[6px]"
                  >
                    <span className="underline">Any Department</span>
                    <img
                      className="block w-[16px] h-[auto] cursor-pointer"
                      alt="More Info"
                      src="/info-icon-blue.svg"
                    />
                  </button>
                ) : (
                  department.map((dept, index) => (
                    <a
                      target="_blank"
                      key={index}
                      href={dept.deptUrl}
                      className={`text-primarylinkblue underline block text-start ${index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`}
                    >
                      {dept.deptTitle}
                    </a>
                  ))
                )
              ) : department.length >= 3 ? (
                <button
                  onClick={() =>
                    handleLinkClick({
                      content: department.map((dept) => ({
                        deptTitle: dept.deptTitle,
                        deptUrl: dept.deptUrl,
                      })),
                      popupTitle: "Departments",
                    })
                  }
                  className="text-primarylinkblue   text-start flex items-center gap-[6px]"
                >
                  <span className="underline relative">View Departments </span>
                  <img
                    className="block w-[16px] h-[auto] cursor-pointer"
                    alt="More Info"
                    src="/info-icon-blue.svg"
                  />
                </button>
              ) : (
                <span>No department available</span>
              )}
            </span>
          )}
          {children}
          {!department && !children && (
            <span className="text-black block text-start">Not listed</span>
          )}
        </p>
      </div>
      <Popup
        content={popupContent}
        onClose={handleClosePopup}
        heading={popupHeading}
      />
    </div>
  );
};

export default TopOption;
