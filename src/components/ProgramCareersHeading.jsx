export default function ProgramCareersHeading({ heading }) {
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
            md:text-[4.375rem]
            md:leading-[5rem]
            
            `}
    >
      {heading}
    </h2>
  );
}
