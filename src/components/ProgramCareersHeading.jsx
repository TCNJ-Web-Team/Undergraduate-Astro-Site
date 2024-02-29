export default function ProgramCareersHeading({ heading }) {
  // console.log(heading);
  return (
    <h2
      className={`text-center
      font-chunkfive 
      text-tcnjblue
      text-[45px]
      leading-[50px]
      pb-[50px]
      sm:pb-[20px]
      sm:text-[60px]
      sm:leading-[70px]
      sm:text-left
      md:text-[65px]
      md:leading-[75px]

      md:pb-[50px]
            `}
    >
      {heading}
    </h2>
  );
}
