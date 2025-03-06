import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import "../styles/intro-popup.scss";
export default function IntroSection() {
  const [accellOpen, setAccellOpen] = useState(false);
  const [dualOpen, setDualOpen] = useState(false);
  const accellText = useRef(null);
  const dualText = useRef(null);

  const openAccellPop = (ref) => {
    if (ref === accellText) {
      setAccellOpen(!accellOpen);
      setDualOpen(false);
    } else if (ref === dualText) {
      setDualOpen(!dualOpen);
      setAccellOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        (event.type === "click" &&
          ((accellText.current &&
            !accellText.current.contains(event.target) &&
            event.target.className !==
              "info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer") ||
            (dualText.current &&
              !dualText.current.contains(event.target) &&
              event.target.className !==
                "info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer"))) ||
        (event.type === "keydown" && event.key === "Escape")
      ) {
        setAccellOpen(false);
        setDualOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleKeyPress);
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleKeyPress);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [accellOpen, dualOpen]);

  // Function to handle click events inside the popup content
  const handlePopupClick = (event) => {
    // Prevent click event propagation
    event.stopPropagation();
  };

  return (
    <div
      id="intro"
      className="w-[100%] h-[650px] relative 
      z-[1000]
       border-[20px] sm:border-[35px] border-b-0 sm:border-b-0 border-tcnjyellow sm:h-[700px] md:h-[556px]"
    >
      <div className="max-w-[1128px] mx-auto relative z-10 text-white p-[35px] pl-[30px] pr-[30px] text-center sm:pt-[77px] md:pt-[64px] md:text-left lg:px-0">
        <div
          id="breadcrumbs"
          className="font-domine text-[17px] leading-[20px] sm:text-[18px] sm:leading-[26px] sm:text-left"
        >
          <a href="https://tcnj.edu">TCNJ Home</a> /{" "}
          <span className="font-[600]">Explore Programs</span>
        </div>

        <motion.h1
          className="pt-[100px] font-alfaslab text-tcnjyellow text-[32px] leading-[38px] pb-[18px] sm:pt-[150px] sm:text-[40px] sm:leading-[45px] md:text-[60px] md:leading-[65px] md:pt-[93px] font-[400]"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            ease: "easeOut",
            duration: 0.35,
          }}
        >
          160+ Undergraduate Programs
        </motion.h1>
        <motion.div
          className="font-domine text-[18px] leading-[24px] sm:text-[20px] sm:leading-[27px] md:leading-[35px] md:text-[23px] font-normal
          max-w-[1095px]"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.75,
            ease: "easeOut",
            duration: 0.35,
          }}
        >
          TCNJ allows you to craft an education that's uniquely yours, with
          flexible options across majors, minors, concentration areas, and
          certificates. You can also pursue accelerated
          <span className="inline-block mr-[5px] ml-[-1px]">
            <div
              className={`popup-container fixed top-0 left-0
              bg-slate-600 w-[100%] h-[100%] ${accellOpen && "active"}`}
            >
              <div
                ref={accellText}
                className="top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]
                max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default"
                onClick={handlePopupClick} // Add click event handler to prevent propagation
              >
                <p className="accell-text-block py-[45px] px-[15px] sm:px-[45px] font-opensans text-[16px] leading-[24px] text-black">
                  <strong>Accelerated programs</strong> are designed to condense
                  the completion timeline.
                </p>
                <img
                  className="close-button"
                  src="/close-item.svg"
                  onClick={() => setAccellOpen(false)}
                />
              </div>
            </div>
            <img
              className="info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer"
              src="/info-icon.svg"
              style={{ marginLeft: "2px" }}
              onClick={() => openAccellPop(accellText)}
            />
          </span>
          and dual degrees.
          <span className="inline-block mr-[5px] ml-[-2px] relative">
            <div
              className={`popup-container-two fixed top-0 left-0
              bg-slate-600 w-[100%] h-[100%] ${dualOpen && "active"}`}
            >
              <div
                ref={dualText}
                className="top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]
                max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default"
                onClick={handlePopupClick} // Add click event handler to prevent propagation
              >
                <p className=" py-[45px] px-[15px] sm:px-[45px] font-opensans text-[16px] leading-[24px] text-black">
                  <strong>Dual degree</strong> programs are designed to provide
                  a streamlined pathway to a master’s or professional degree.
                </p>

                <img
                  className="close-button"
                  src="/close-item.svg"
                  onClick={() => setDualOpen(false)}
                />
              </div>
            </div>
            <img
              className="info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer"
              src="/info-icon.svg"
              onClick={() => openAccellPop(dualText)}
            />
          </span>
          A full list of{" "}
          <a
            href="https://graduate.tcnj.edu/explore-programs/"
            className="underline"
          >
            graduate and certificate programs
          </a>{" "}
          is also available. Search by keyword or browse programs by selecting a
          school, program type, and/or options.
        </motion.div>
      </div>

      <picture id="hero-image" className="absolute top-0 left-0 z-0 w-[100%]">
        <source
          srcSet="https://tcnj.edu/custom/undergraduate/img/hero-desktop.jpg"
          type="image/jpeg"
          media="(min-width: 901px)"
        />
        <source
          srcSet="https://tcnj.edu/custom/undergraduate/img/hero-tablet.jpg"
          type="image/jpeg"
          media="(min-width: 551px)"
        />
        <source
          srcSet="https://tcnj.edu/custom/undergraduate/img/hero-mobile.jpg"
          type="image/webp"
        />
        <img
          src="https://tcnj.edu/custom/undergraduate/img/hero-mobile.jpg"
          alt="TCNJ scenery"
          className="w-[100%] h-[630px] sm:h-[665px] md:h-[521px] object-cover"
        />
      </picture>
      <div className="bg-black absolute w-[100%] h-[100%] top-0 left-0 z-[5] opacity-[.5] sm:opacity-[.25]"></div>
    </div>
  );
}
