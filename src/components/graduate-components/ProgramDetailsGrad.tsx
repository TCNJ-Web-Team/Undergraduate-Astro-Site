import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../../animations/fadeInVariant";
import "../../styles/popup-detail.scss";

interface ProgramDetailsGrad {
  programDetails?: {
    detailTitle: string;
    detailContent: string;
    popupContent: string;
  }[];
}

const ProgramDetailsGrad: React.FC<ProgramDetailsGrad> = ({
  programDetails,
}) => {
  const [activePopupIndex, setActivePopupIndex] = useState<number | null>(null);

  // Array of refs for each popup
  const popupRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActivePopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Close popup on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInsideAny = popupRefs.current.some(
        (ref) => ref && ref.contains(event.target as Node)
      );
      if (!clickedInsideAny) {
        setActivePopupIndex(null);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePopupIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <motion.div
      id="program-details"
      className="text-center grid grid-cols-3 gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px]"
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {programDetails &&
        programDetails.map((detail, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col gap-[20px] text-center relative"
              variants={fadeInAnimationVariant}
              custom={index + 1}
            >
              <h3 className="text-[17px] leading-[22px] sm:leading-[53px] sm:text-[40px] font-alfaslab text-tcnjblue">
                {detail.detailTitle}
              </h3>
              <div className="inline-flex items-center justify-center gap-1">
                <div
                  className={`text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px] lg:mt-0 lg:leading-[26px] text-center ${
                    detail.detailContent ? "detail-popup-show" : ""
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: detail.detailContent || "",
                  }}
                  onClick={() => handleClick(index)}
                />
                <div className="popup-detail-container relative">
                  {detail.popupContent && activePopupIndex === index && (
                    <div
                      ref={(el) => (popupRefs.current[index] = el)}
                      className="popup-detail absolute top-1/2 left-[-75%] transform -translate-y-1/2 bg-white w-[320px] p-[20px] shadow-lg z-[1000] ml-[15px] mt-[-5px]"
                      dangerouslySetInnerHTML={{
                        __html: detail.popupContent || "",
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
    </motion.div>
  );
};

export default ProgramDetailsGrad;
