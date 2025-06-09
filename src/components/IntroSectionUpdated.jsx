import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";
import "../styles/intro-popup.scss";
export default function IntroSectionUpdated() {
  const [accellOpen, setAccellOpen] = useState(false);
  const [dualOpen, setDualOpen] = useState(false);
  const accellText = useRef(null);
  const dualText = useRef(null);
  // const [setIsMounted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      className="w-[100%] relative 
      z-[1000]
       border-[20px] sm:border-[35px] border-b-0 sm:border-b-0 border-tcnjyellow 
       
        "
    >
      <div
        id="hero-text"
        className="max-w-[1128px] mx-auto relative z-10 text-white p-[35px] pl-[30px] pr-[30px] text-center sm:pt-[77px] md:pt-[64px] md:text-left lg:px-0
        pb-[150px] sm:pb-[230px] md:pb-[115px]
        "
      >
        <div
          id="breadcrumbs"
          className="font-domine text-[17px] leading-[20px] sm:text-[18px] sm:leading-[26px] sm:text-left"
        >
          <a href="https://graduate.tcnj.edu">Graduate Home</a> /{" "}
          <span className="font-[600]">Explore Graduate Programs</span>
        </div>

        <motion.h1
          className="pt-[100px] font-alfaslab text-tcnjyellow text-[32px] leading-[37px] pb-[18px] sm:pb-[18px] sm:pt-[150px] sm:text-[40px] sm:leading-[45px] md:text-[60px] md:leading-[65px] md:pt-[93px] font-[400]"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.15, ease: "easeOut", duration: 0.35 }}
        >
          Explore Graduate Programs
        </motion.h1>
        <motion.div
          className="font-domine text-[20px] leading-[26px] sm:text-[20px] sm:leading-[35px] md:leading-[35px] md:text-[23px] font-normal
          max-w-[1095px]"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.65, ease: "easeOut", duration: 0.35 }}
        >
          Search by keyword or browse programs by selecting an area of study,
          degree type, and/or format. TCNJ students also have an option to
          pursue{" "}
          <a
            className="underline"
            href="https://academics.tcnj.edu/undergraduate-study/?program=accelerated"
          >
            <span>accelerated</span>
          </a>{" "}
          and{" "}
          <a
            className="underline"
            href="https://academics.tcnj.edu/undergraduate-study/?program=dual-degree"
          >
            <span>dual degrees</span>.
          </a>
        </motion.div>
      </div>

      <picture
        id="hero-image"
        className="absolute top-0 left-0 z-0 w-[100%] h-[100%]"
      >
        {/* WebP version for desktop */}
        {/* <source
          srcSet="/homepage-hero/graduate/hero.webp"
          type="image/webp"
          media="(min-width: 901px)"
        /> */}
        <source
          srcSet="/homepage-hero/graduate/hero.jpg"
          type="image/jpeg"
          media="(min-width: 901px)"
        />

        {/* WebP version for tablet */}
        {/* <source
          srcSet="/homepage-hero/graduate/hero-tablet.webp"
          type="image/webp"
          media="(min-width: 551px)"
        /> */}
        <source
          srcSet="/homepage-hero/graduate/hero-tablet.jpg"
          type="image/jpeg"
          media="(min-width: 551px)"
        />

        {/* WebP version for mobile */}
        {/* <source
          srcSet="/homepage-hero/graduate/hero-mobile.webp"
          type="image/webp"
        /> */}
        <source
          srcSet="/homepage-hero/graduate/hero-mobile.jpg"
          type="image/jpeg"
        />

        {/* Fallback image */}
        <img
          src="/homepage-hero/graduate/hero-mobile.jpg"
          alt="TCNJ scenery"
          className="w-[100%] object-cover h-[100%]"
        />
      </picture>

      <div
        id="bg-overlay"
        className="bg-black absolute w-[100%] h-[100%] top-0 left-0 z-[5] opacity-[.5] sm:opacity-[.25]"
      ></div>
    </div>
  );
}
