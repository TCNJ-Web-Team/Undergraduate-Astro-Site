import React, { useState } from "react";
import Popup from "./Popup";

type School = string[];

type Department = {
  deptTitle: string;
  deptUrl: string;
}[];

interface TopOptionNewProps {
  heading: string;
  imgSrc: string;
  school?: School;
  department?: Department;
  techEdMarginCheck: boolean;
}

// TopOptionNew.tsx
import type { FC } from "react";

const TopOptionNew: FC<TopOptionNewProps> = ({
  heading,
  imgSrc,
  school,
  department,
  techEdMarginCheck,
}) => {
  const [popupContent, setPopupContent] = useState<string | string[] | null>(
    null
  );
  const [popupHeading, setPopupHeading] = useState<string | string[] | null>(
    null
  );

  interface HandleLinkClickProps {
    content: string | string[];
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

  let schoolLink;
  if (Array.isArray(school) && school.length > 0) {
    switch (school[0]) {
      case "Arts and Communication":
        schoolLink = "https://artscomm.tcnj.edu/";
        break;
      case "Business":
        schoolLink = "https://business.tcnj.edu/";
        break;
      case "Education":
        schoolLink = "https://education.tcnj.edu/";
        break;
      case "Engineering":
        schoolLink = "https://engineering.tcnj.edu/";
        break;
      case "Humanities and Social Sciences":
        schoolLink = "https://hss.tcnj.edu/";
        break;
      case "Nursing and Health Sciences":
        schoolLink = "https://nhs.tcnj.edu/";
        break;
      case "Science":
        schoolLink = "https://science.tcnj.edu/";
        break;
      case "Graduate, Global, and Online Education":
        schoolLink = "https://ggoe.tcnj.edu/";
        break;
      default:
        schoolLink = "https://tcnj.edu";
    }
  } else {
    schoolLink = "https://tcnj.edu";
  }
  const anySchoolText =
    "This program is open to students in any school and offers guidance from the Medical Careers Advisory Committee for those exploring and preparing for careers in health professions.";

  return (
    <div className="flex-row flex items-start gap-[18px] md:gap-[15px] sm:max-w-[33%]">
      <img
        className="w-[26px] h-auto mt-[3px]"
        src={`https://tcnj.edu/custom/icon-library/micro/${imgSrc}.svg`}
        alt={`${heading} icon`}
      />
      <div className="flex-col flex gap-[2px]  md:gap-[5px]">
        <h2
          className="text-[17px] leading-[22px] sm:leading-[23px] 
        md:text-[20px] md:leading-[24px] lg:leading-[24px] font-interstate not-italic uppercase font-extrabold"
        >
          {heading}
        </h2>
        {school && (
          <p className="text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px] lg:mt-0 lg:leading-[26px]  text-start">
            {school && school.length === 1 ? (
              <a
                className="text-[#33739F] underline"
                href={schoolLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {school[0]}
              </a>
            ) : (school?.length ?? 0) < 3 ? (
              school?.map((item, index) => {
                const link = (() => {
                  switch (item) {
                    case "Arts and Communication":
                      return "https://artscomm.tcnj.edu/";
                    case "Business":
                      return "https://business.tcnj.edu/";
                    case "Education":
                      return "https://education.tcnj.edu/";
                    case "Engineering":
                      return "https://engineering.tcnj.edu/";
                    case "Humanities and Social Sciences":
                      return "https://hss.tcnj.edu/";
                    case "Nursing and Health Sciences":
                      return "https://nhs.tcnj.edu/";
                    case "Science":
                      return "https://science.tcnj.edu/";
                    case "Graduate, Global, and Online Education":
                      return "https://ggoe.tcnj.edu/";
                    default:
                      return "https://tcnj.edu";
                  }
                })();
                return (
                  <a
                    key={index}
                    className={`text-primarylinkblue underline block ${techEdMarginCheck ? "" : index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`}
                    href={link}
                    target="_blank"
                  >
                    {item}
                  </a>
                );
              })
            ) : school && school.length >= 3 && school.length < 8 ? (
              <button
                onClick={() =>
                  handleLinkClick({
                    content: school,
                    popupTitle: "Available Schools",
                  })
                }
                className="text-primarylinkblue   text-start flex items-center gap-[6px]"
              >
                <span className="underline">View Schools</span>
                <img
                  className="block w-[16px] h-[auto] cursor-pointer"
                  src="/info-icon-blue.svg"
                />
              </button>
            ) : school && school.length >= 8 ? (
              <button
                onClick={() =>
                  handleLinkClick({
                    content: anySchoolText,
                    popupTitle: "Any School",
                  })
                }
                className="text-primarylinkblue   text-start flex items-center gap-[6px]"
              >
                <span className="underline">Any School</span>
                <img
                  className="block w-[16px] h-[auto] cursor-pointer"
                  src="/info-icon-blue.svg"
                />
              </button>
            ) : (
              <span>No school or department available</span>
            )}
          </p>
        )}
        {department &&
          (Array.isArray(department)
            ? department.map((degree, index) =>
                degree.deptTitle === "Any" || degree.deptTitle === "any" ? (
                  <a className="text-[#33739F] underline">Any Department</a>
                ) : (
                  <a className="text-[#33739F] underline" href={degree.deptUrl}>
                    <span
                      className={`block ${index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`}
                    >
                      {degree.deptTitle}
                    </span>

                    {/* <span className="block">{degree.deptTitle}</span> */}
                  </a>
                )
              )
            : department)}
      </div>
      <Popup
        content={popupContent}
        onClose={handleClosePopup}
        heading={popupHeading}
      />
    </div>
  );
};

export default TopOptionNew;
