// import React from "react";
// import { motion } from "framer-motion";

function AnimatedTitle({ title, subtitle }) {
  // console.log(title);
  // console.log(title.length);
  return (
    <>
      <h1
        className={`font-chunkfive
      text-tcnjblue
      
      sm:text-[55px]
      sm:leading-[60px]
      sm:px-[45px] md:px-0
      md:text-[65px]
      md:leading-[75px]
      ${
        title === "Anthropology" ||
        title === "Communication Studies" ||
        title === "Engineering Management" ||
        title === "Environmental Studies" ||
        title === "Management and Organizations"
          ? "text-[30px] leading-[40px]"
          : title.length >= 30
            ? "text-[30px] leading-[40px]"
            : "text-[45px] leading-[50px]"
      }
          `}
      >
        {title}
      </h1>
      {subtitle && (
        <span
          className="block
          font-chunkfive
      text-black 
      sm:px-[45px] md:px-0
      leading-[25px] text-[18px] 
      sm:mt-[9px] sm:text-[23px] sm:leading-[35px]
      md:mt-[14px] md:leading-[22px] md:pt-[0]
      "
        >
          {subtitle}
        </span>
      )}
    </>
  );
}

export default AnimatedTitle;

// import React from "react";
// import { motion } from "framer-motion";

// function AnimatedTitle({ title }) {
//   return (
//     <motion.h1
//       className="font-chunkfive
//           text-tcnjblue
//           text-[45px]
//           leading-[50px]
//           sm:text-[60px]
//           sm:leading-[60px]

//           md:text-custom-16.25
//           md:leading-[4.688rem]"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         // delay: 0.035,
//         ease: "easeOut",
//         duration: 0.45,
//         // type: "spring",
//         // stiffness: 50,
//       }}
//     >
//       {title}
//     </motion.h1>
//   );
// }

// export default AnimatedTitle;
