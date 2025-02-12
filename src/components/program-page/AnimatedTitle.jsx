import React from "react";
import { motion } from "framer-motion";

function AnimatedTitle({ title }) {
  return (
    <h1
      className="font-chunkfive
          text-tcnjblue
          text-[45px]
          leading-[62px]
          sm:text-[55px]
          sm:leading-[60px]
         
          md:text-custom-16.25
          md:leading-[4.688rem]"
    >
      {title}
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
