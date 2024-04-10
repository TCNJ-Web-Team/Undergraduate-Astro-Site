import React from "react";
import { motion } from "framer-motion";

function AnimatedTitle({ title }) {
  return (
    <motion.h1
      class="font-chunkfive
          text-tcnjblue
          text-[45px]
          leading-[50px]
          sm:text-[60px]
          sm:leading-[60px]
         
          md:text-custom-16.25
          md:leading-[4.688rem]"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.05,
        ease: "easeOut",
        duration: 0.35,
        // type: "spring",
        // stiffness: 50,
      }}
    >
      {title}
    </motion.h1>
  );
}

export default AnimatedTitle;
