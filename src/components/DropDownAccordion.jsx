import { motion } from "framer-motion";
import "../styles/drop-down-item.scss";
export default function DropDownAccordion({
  checkboxContent,
  title,
  isOpen,
  onToggle,
  index,
}) {
  // const handleKeyDown = (e) => {
  //   console.log(e.key);
  //   if (e.key === "Enter") {
  //     // Use 'e.key' for modern, readable code
  //     onToggle();
  //     // Call your specific function here
  //   }
  // };
  // console.log(index);
  return (
    <div
      className={`z-50 relative w-[100%] 
       
      ${isOpen ? "open-drop" : ""}`}
    >
      {/* <div
      className={`z-50 relative w-[100%] 
      before:content-[''] before:block before:w-full before:h-[10px] before:bg-tcnjyellow  
      ${
        isOpen ? "open-drop" : ""
      }`}
    > */}
      <motion.div
        whileTap={{ scale: 0.975 }}
        className="z-30 relative"
        onKeyDown={(e) => {
          // console.log(e.key);
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(); // prevent page scroll on Space
            onToggle();
          }
        }}
        tabIndex={0}
        onClick={onToggle}
        role="button"
      >
        <motion.div
          className="h-[9px] w-[100%] bg-tcnjyellow origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            delay: (index + 2) * 0.45,

            // delay: index * 0.045,
            // ease: "easeInOut",
            // ease: [0.12, 0, 0.39, 0],
            // ease: "easeInOut",
            // duration: 0.55,
            ease: [0.22, 0, 0.36, 1],

            duration: 0.85,
            // type: "spring",
            // stiffness: 50,
          }}
        ></motion.div>
        <motion.div
          initial={{ "--background-color": "#bcbcbc" }}
          animate={{ "--background-color": "#fdd700" }}
          className="
          transition-all
          h-[1px] w-[100%] bg-[#bcbcbc] origin-left bg-[--background-color]"
          transition={{
            delay: (index + 2) * 0.45,

            // delay: index * 0.045,
            // ease: "easeInOut",
            // ease: [0.12, 0, 0.39, 0],
            // ease: "easeInOut",
            // duration: 0.55,
            ease: [0.22, 0, 0.36, 1],

            duration: 0.85,
            // type: "spring",
            // stiffness: 50,
          }}
        ></motion.div>
        <h3
          className={`
        select-none
        dropdown-label
        font-opensans 
        font-semibold 
        leading-[30px] 
        text-black 
        text-[17px] 
        uppercase 
        p-[34px] py-[24px] 
        border-t-0
        pt-[23px]
        bg-white border-[1px] 
        border-[#bcbcbc] 

     cursor-pointer
     lg:px-[50px]
        ${isOpen ? "open" : ""}`}
        >
          {title}
        </h3>
      </motion.div>
      <div
        className={`input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${
          isOpen &&
          `!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]`
        }
        `}
        id={`${isOpen ? "open-list" : ""}`}
      >
        {checkboxContent.map((checkbox, index) => (
          <div key={index} className="drop-down-item">
            {checkbox}
          </div>
        ))}
      </div>
    </div>
  );
}
