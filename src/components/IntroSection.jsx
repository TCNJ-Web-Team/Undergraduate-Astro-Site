import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <div
      id="intro"
      className="w-[100%] h-[562px] relative overflow-hidden border-[20px] sm:border-[35px] border-b-0 sm:border-b-0 border-tcnjyellow sm:h-[700px] md:h-[485px]"
    >
      <div className="max-w-[1128px] mx-auto relative z-10 text-white p-[35px] pl-[30px] pr-[30px] text-center sm:pt-[77px] md:pt-[67px] md:text-left lg:px-0">
        <div
          id="breadcrumbs"
          className="font-bitter text-[17px] leading-[20px] sm:text-[18px] sm:leading-[26px] sm:text-left"
        >
          <a>Home</a> / Explore Undergraduate Programs
        </div>
        <motion.h1
          className="pt-[100px] font-alfaslab text-tcnjyellow text-[32px] leading-[38px] pb-[10px] sm:pt-[150px] sm:text-[55px] sm:leading-[55px] md:text-[60px] md:leading-[65px] md:pt-[85px]"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            ease: "easeOut",
            duration: 0.35,
            // type: "spring",
            // stiffness: 50,
          }}
        >
          Explore Undergraduate Programs
        </motion.h1>
        <motion.p
          className="font-domine text-[20px] leading-[26px] sm:text-[25px] sm:leading-[35px] font-normal"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.75,
            ease: "easeOut",
            duration: 0.35,
            // type: "spring",
            // stiffness: 50,
          }}
        >
          Search by keyword or browse programs by selecting an area of study,
          degree type, and/ or format. TCNJ students also have an option to
          pursue accelerated programs and dual degrees.
        </motion.p>
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
          className="w-[100%] h-[562px] sm:h-[700px] md:h-[450px] object-cover"
        />
      </picture>
      <div className="bg-black absolute w-[100%] h-[100%] top-0 left-0 z-[5] opacity-[.5] sm:opacity-[.25]"></div>
    </div>
  );
}
