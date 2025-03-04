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
        className="bg-white shadow-lg p-6 relative z-[1000] left-0 w-[100%] max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto pl-[30px] pr-[30px] text-center md:text-left lg:px-0 cursor-default"
      >
        <div className="py-[45px] px-[15px] sm:px-[45px]">
          <h2 className="text-lg font-bold mb-4">{heading}</h2>
          <div className="text-gray-700 flex flex-col gap-2">
            {Array.isArray(content) ? (
              content.map((item, index) => (
                <a
                  key={index}
                  className="pb-[5px] font-opensans text-[16px] leading-[24px] text-primarylinkblue cursor-pointer underline"
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
          className="absolute top-[20px] right-[20px] cursor-pointer"
        >
          <img
            className="close-button"
            src={`${__BASE_URL__}/close-item.svg`}
            alt="Close"
          />
        </button>
      </div>
    </div>
  );
};

export default Popup;
