import type { FC } from "react";

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
  return (
    <div className="flex-row flex items-start gap-[18px] md:gap-[15px] sm:max-w-[33%]">
      <img
        className="w-[26px] h-auto mt-[3px]"
        src={`https://tcnj.edu/custom/icon-library/micro/${imgSrc}.svg`}
        alt={`${heading} icon`}
      />
      <div className="flex-col flex md:gap-[5px]">
        <h3 className="text-[17px] leading-[23px] md:text-[20px] md:leading-[30px] font-interstate not-italic uppercase font-extrabold">
          {heading}
        </h3>
        <p className="text-[17px] leading-[23px] md:text-[19px] md:leading-[30px]">
          {department && (
            <p className="text-[17px] leading-[23px] md:text-[19px] md:leading-[30px] text-start">
              {department.length < 3 ? (
                department[0].deptTitle.toLowerCase() === "any" ? (
                  <a className="text-primarylinkblue underline block text-start">
                    Any Department
                  </a>
                ) : (
                  department.map((dept, index) => (
                    <a
                      key={index}
                      href={dept.deptUrl}
                      className="text-primarylinkblue underline block text-start"
                    >
                      {dept.deptTitle}
                    </a>
                  ))
                )
              ) : department.length >= 3 ? (
                <button className="text-primarylinkblue underline block text-start">
                  View Departments
                </button>
              ) : (
                <span>No department available</span>
              )}
            </p>
          )}
          {children}
        </p>
      </div>
    </div>
  );
};

export default TopOption;
