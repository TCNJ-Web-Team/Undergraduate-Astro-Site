import { motion } from "framer-motion";
import "../styles/drop-down-item.scss";
export default function DropDownAccordion({
  checkboxContent,
  title,
  isOpen,
  onToggle,
}) {
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
      <motion.div whileTap={{ scale: 0.975 }} className="z-30 relative">
        <div className="h-[10px] w-[100%] bg-tcnjyellow"></div>
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
        bg-white border-[1px] 
        border-[#bcbcbc] 
     border-t-0
     cursor-pointer
        ${isOpen ? "open" : ""}`}
          onClick={onToggle}
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
