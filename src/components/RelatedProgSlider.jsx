import "../assets/js/splide.js";
import "../styles/splide.min.css";

export default function RelatedProgSlider({ learnMoreList }) {
  const learnMoreListVar = learnMoreList;
  //   console.log(learnMoreList);
  return (
    <div
      id="learn-more-list"
      className="grid grid-cols-4 gap-5

      sm:pl-[47px]
    sm:pr-[47px] md:pl-[20px] md:pr-[20px] lg:pl-0 lg:pr-0"
    >
      {learnMoreListVar.map((content, index) => {
        return (
          <div
            className=" border border-[#BFBFBF]
              w-[280px]"
            id={content.title.replace(/\s+/g, "-").toLowerCase()}
            key={content.title.replace(/\s+/g, "-").toLowerCase()}
          >
            <a className="p-[35px] pb-[100px] block" href={content.slug}>
              <p className="font-bitter font-semibold text-[18px] leading-[28px] ">
                {content.title}
              </p>
              <hr className="m-[25px] mr-0 ml-0" />
              {content.schoolOrAdditionalLabel && (
                <p className="font-opensans">
                  {content.schoolOrAdditionalLabel}
                </p>
              )}
            </a>
          </div>
        );
      })}
    </div>
    // <p>Slider</p>
  );
}