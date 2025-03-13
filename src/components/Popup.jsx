import React, { useEffect, useRef } from "react";

const Popup = ({ content, onClose, heading }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  if (!content) return null;

  const getLink = (item) => {
    if (typeof item === "string") {
      const schoolLinks = {
        "Arts and Communication": "https://artscomm.tcnj.edu/",
        Business: "https://business.tcnj.edu/",
        Education: "https://education.tcnj.edu/",
        Engineering: "https://engineering.tcnj.edu/",
        "Humanities and Social Sciences": "https://hss.tcnj.edu/",
        "Nursing and Health Sciences": "https://nhs.tcnj.edu/",
        Science: "https://science.tcnj.edu/",
        "Graduate, Global, and Online Education": "https://ggoe.tcnj.edu/",
      };
      return schoolLinks[item] || "https://tcnj.edu";
    }
    return item.deptUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={containerRef}
        id="popup-container"
        className="bg-white shadow-lg p-6 relative z-[1000] left-0 w-[100%] max-w-[900px] mx-[15px] sm:mx-[30px] lg:mx-auto pl-[30px] pr-[30px] text-center md:text-left lg:px-0 cursor-default"
      >
        <div className="py-[45px] px-[15px] sm:px-[45px]">
          <h2 className="text-[21px] leading-[25px] pb-[7px] font-interstate font-[900] uppercase text-left">
            {heading}
          </h2>
          <div className="text-gray-700 flex flex-col gap-2">
            {Array.isArray(content) ? (
              content.map((item, index) => (
                <a
                  key={index}
                  className="text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px]  text-start text-primarylinkblue underline"
                  href={getLink(item)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {typeof item === "string" ? item : item.deptTitle}
                </a>
              ))
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-[30px] right-[30px] cursor-pointer"
        >
          <img className="close-button" alt="close" src="/close-item.svg" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
