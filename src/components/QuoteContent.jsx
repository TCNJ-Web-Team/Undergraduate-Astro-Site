import React, { useEffect, useRef } from "react";
import fitty from "fitty";
function QuoteContent({ content }) {
  console.log(content);

  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      const fittyInstance = fitty(headingRef.current, {
        minSize: 23, // Minimum font size in pixels
        maxSize: 45, // Maximum font size in pixels
        multiLine: true, // Ensure the text stays on one line
      });

      return () => fittyInstance.unsubscribe(); // Clean up on unmount
    }
  }, []);

  const h2Pattern = /<h2>(.*?)<\/h2>/;
  const pPattern = /<p[^>]*>(.*?)<\/p>/;
  // Extracting content from <h2> and <p> tags

  const h2Match = content.match(h2Pattern);
  const pMatch = content.match(pPattern);

  // Extracted content
  const h2Content = h2Match ? h2Match[1] : "";
  const pContent = pMatch ? pMatch[1] : "";

  // const headingLengthCheck =
  //   h2Content.length > 100
  //     ? "text-[18px] leading-[30px] md:text-[26px] md:leading-[45px]"
  //     : "text-[26px] leading-[40px] md:text-[45px] md:leading-[65px]";
  //   console.log("H2 Content length", h2Content.length);
  //   console.log("P Content:", pContent);

  return (
    <div className="large-quote flex flex-col items-end mb-[100px]">
      <h2
        ref={headingRef}
        className={`font-alfaslab  text-left sm:text-left text-tcnjblue mb-[11px]`}
      >
        {h2Content}
      </h2>
      <p className="font-domine text-[20px] leading-[35px]">{pContent}</p>
      {/* <p className="font-domine text-[20px] leading-[35px]">{pPattern}</p> */}
    </div>
  );
}

export default QuoteContent;
