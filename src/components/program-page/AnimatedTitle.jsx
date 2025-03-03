import React from "react";
import { motion } from "framer-motion";

function AnimatedTitle({ title, subtitle }) {
  // console.log(title);
  // console.log(title.length);
  return (
    <h1
      className={`font-chunkfive
      text-tcnjblue
      
      sm:text-[55px]
      sm:leading-[60px]
      sm:px-[45px] md:px-0
      md:text-[65px]
      md:leading-[75px]
      ${title.length >= 30 ? "text-[30px] leading-[40px]" : "text-[45px] leading-[50px]"}`}
    >
      {title}
      {subtitle && (
        <span
          className="block
      text-black leading-[30px] text-[18px] sm:pt-[10px] sm:text-[23px] md:leading-[22px] md:pt-[0]"
        >
          {subtitle}
        </span>
      )}
    </h1>
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
