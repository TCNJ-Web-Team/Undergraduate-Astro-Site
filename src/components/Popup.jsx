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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={containerRef}
        id="popup-container"
        className="bg-white  shadow-lg  p-6 relative
      z-[1000] left-0  w-[100%]
                max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default
      "
      >
        <div className="py-[45px] px-[15px] sm:px-[45px]">
          <h2 className="text-lg font-bold mb-4">{heading}</h2>
          <div className="text-gray-700 flex flex-col gap-2">
            {Array.isArray(content) && content.length > 0 ? (
              content.map((item, index) => {
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
                    className="  pb-[5px] font-opensans text-[16px] leading-[24px] text-primarylinkblue cursor-pointer underline"
                    href={link}
                  >
                    {item}
                  </a>
                );
              })
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-[20px] right-[20px] cursor-pointer"
        >
          <img class="close-button" src="/close-item.svg" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
