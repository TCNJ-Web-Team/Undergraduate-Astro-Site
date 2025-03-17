// import React, { useEffect, useRef } from "react";
// import fitty from "fitty";
import { decode } from "html-entities";

function QuoteContent({ content }) {
  // console.log(content);

  // const headingRef = useRef(null);

  // useEffect(() => {
  //   if (headingRef.current) {
  //     const fittyInstance = fitty(headingRef.current, {
  //       minSize: 23, // Minimum font size in pixels
  //       maxSize: 45, // Maximum font size in pixels
  //       multiLine: true, // Ensure the text stays on one line
  //     });

  //     return () => fittyInstance.unsubscribe(); // Clean up on unmount
  //   }
  // }, []);

  const h2Pattern = /<h2>(.*?)<\/h2>/;
  const pPattern = /<p[^>]*>(.*?)<\/p>/;
  // Extracting content from <h2> and <p> tags

  const h2Match = content.match(h2Pattern);
  const pMatch = content.match(pPattern);

  // Extracted content
  const h2Content = h2Match ? decode(h2Match[1]) : "";
  const pContent = pMatch ? pMatch[1] : ""; // Remove decode here since we want to keep HTML tags
  // console.log("H2 Content:", h2Content);
  // console.log("P Content:", pContent);
  // const headingLengthCheck =
  //   h2Content.length > 100
  //     ? "text-[18px] leading-[30px] md:text-[26px] md:leading-[45px]"
  //     : "text-[26px] leading-[40px] md:text-[45px] md:leading-[65px]";
  //   console.log("H2 Content length", h2Content.length);
  //   console.log("P Content:", pContent);

  return (
    <div
      className="large-quote flex flex-col mb-[75px] text-left
    sm:mt-[-5px]
    sm:mb-[95px]
    md:mt-[0px]
     xl:mt-[-12px]
    "
    >
      <h2
        className={`font-alfaslab  text-left sm:text-left text-tcnjblue mb-[6px]
          text-[30px] leading-[40px]
          sm:text-[35px] sm:leading-[50px]
          md:text-[35px] md:leading-[50px]
          lg:text-[40px] lg:leading-[50px] lg:mb-[9px]
          xl:text-[45px] xl:leading-[65px]  xl:mb-[3px]
          `}
      >
        {h2Content}
      </h2>
      <p
        className="font-domine text-[18px] leading-[25px]
        sm:text-[20px] sm:leading-[35px]"
        dangerouslySetInnerHTML={{ __html: pContent }}
      />
      {/* <p className="font-domine text-[20px] leading-[35px]">{pPattern}</p> */}
    </div>
  );
}

export default QuoteContent;
