import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../animations/fadeInVariant";

export default function ProgramGlanceCopy({ copy, id }) {
  return (
    <motion.div
      id={id}
      className={`text-[20px] leading-[35px] text-center sm:text-left sm:text-[21px] sm:leading-[40px] md:text-[23px] md:leading-[45px]
          
          ${id === "careers-body" ? "" : ""}  

          `}
      dangerouslySetInnerHTML={{ __html: copy }}
      variants={fadeInAnimationVariant}
      custom={2}
    />
  );
}
