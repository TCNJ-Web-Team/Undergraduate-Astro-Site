import { useState, useRef, useEffect } from "react";
import "../styles/accordion-styles.scss";
import { useAccordionTrackStore } from "../stores/useAccordionTrackStore";
export default function Accodion({ children, header, idName, startOpen }) {
  const [open, setOpen] = useState(startOpen);
  const headerRef = useRef(null);
  const { currentAccordionId, setCurrentAccordionId } =
    useAccordionTrackStore();
  // console.log(videosLength);
  // Pause if another video starts
  // useEffect(() => {
  //   if (currentAccordionId !== thisAccordionId && isPlaying) {
  //     videoRef.current?.pause();
  //     videoRef.current!.currentTime = 0; // Reset to start
  //     videoRef.current!.controls = false;
  //     videoRef.current!.load(); // Reload the video
  //     setIsPlaying(false);
  //   }
  // }, [currentAccordionId, isPlaying, thisAccordionId]);

  useEffect(() => {
    if (currentAccordionId === idName) {
      setOpen(true);
    }
  }, [currentAccordionId, idName]);

  // useEffect(() => {
  //   if (scholarship && headerRef.current) {
  //     const headerElement = headerRef.current;
  //     const words = headerElement.textContent.split(" ");
  //     headerElement.innerHTML = `<span class="first-word">${words.shift()}</span> ${words.join(
  //       " "
  //     )}`;
  //   }
  // }, [scholarship]);
  // console.log(idName);
  const onAccordionClick = () => {
    // console.log(event);
    setOpen(!open);
  };

  return (
    <div className={open ? "accordion top-open" : "accordion"} id={idName}>
      <h2
        className={`${
          open ? "accordion-header start-open active" : "accordion-header"
        } font-bold text-[1.438rem]`}
        onClick={onAccordionClick}
      >
        <span ref={headerRef} className="accordion-header-text">
          {header}
        </span>
        <span className="arrow">
          {open ? (
            <img
              src="/minus-dark.svg"
              alt="close"
              className="h-[20px] w-[20px]"
            />
          ) : (
            <img
              src="/plus-dark.svg"
              alt="open"
              className="h-[20px] w-[20px]"
            />
          )}
        </span>
      </h2>
      <div
        className={`${
          open ? "accordion-content start-open active" : "accordion-content"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
