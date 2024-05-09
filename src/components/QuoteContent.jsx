import React from "react";

function QuoteContent({ content }) {
  //   console.log(content);

  const h2Pattern = /<h2>(.*?)<\/h2>/;
  const pPattern = /<p>(.*?)<\/p>/;

  // Extracting content from <h2> and <p> tags
  const h2Match = content.match(h2Pattern);
  const pMatch = content.match(pPattern);

  // Extracted content
  const h2Content = h2Match ? h2Match[1] : "";
  const pContent = pMatch ? pMatch[1] : "";

  //   console.log("H2 Content:", h2Content);
  //   console.log("P Content:", pContent);

  return (
    <div className="large-quote flex flex-col items-end">
      <h2 className="font-alfaslab text-[45px] leading-[65px] text-tcnjblue">
        {h2Content}
      </h2>
      <p className="font-domine text-[20px] leading-[35px]">{pContent}</p>
    </div>
  );
}

export default QuoteContent;
