import React, { useEffect, useRef } from "react";

function QuoteContent({ content }) {
  const h2Ref = useRef(null);

  const h2Pattern = /<h2>(.*?)<\/h2>/;
  const pPattern = /<p>(.*?)<\/p>/;

  // Extracting content from <h2> and <p> tags
  const h2Match = content.match(h2Pattern);
  const pMatch = content.match(pPattern);

  // Extracted content
  const h2Content = h2Match ? h2Match[1] : "";
  const pContent = pMatch ? pMatch[1] : "";

  const headingLengthCheck =
    h2Content.length > 100
      ? "text-[18px] leading-[30px] md:text-[26px] md:leading-[45px]"
      : "text-[26px] leading-[40px] md:text-[45px] md:leading-[65px]";

  useEffect(() => {
    function adjustFontSize() {
      const h2Element = h2Ref.current;
      if (!h2Element) return;

      // Ensure the element is visible before making adjustments
      const containerWidth = h2Element.offsetWidth;
      let fontSize = parseInt(window.getComputedStyle(h2Element).fontSize, 10);

      while (h2Element.scrollWidth > containerWidth && fontSize > 12) {
        fontSize -= 1; // Decrease font size
        h2Element.style.fontSize = `${fontSize}px`;
      }
    }

    const observer = new MutationObserver(() => {
      adjustFontSize();
    });

    // Observe hydration changes to ensure the element is fully rendered
    observer.observe(h2Ref.current, { childList: true, subtree: true });

    adjustFontSize(); // Initial adjustment
    window.addEventListener("resize", adjustFontSize); // Adjust on window resize

    return () => {
      window.removeEventListener("resize", adjustFontSize);
      observer.disconnect(); // Clean up observer
    };
  }, [h2Content]); // Re-run if h2Content changes

  return (
    <div className="large-quote flex flex-col items-end mb-[100px]">
      <h2
        ref={h2Ref}
        className={`font-alfaslab ${headingLengthCheck} text-left sm:text-left text-tcnjblue mb-[11px]`}
      >
        {h2Content}
      </h2>
      <p className="font-domine text-[20px] leading-[35px]">{pContent}</p>
    </div>
  );
}

export default QuoteContent;
