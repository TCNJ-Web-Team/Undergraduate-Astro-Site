export default function ProgramCareersHeading({ heading }) {
  return (
    <h2
      className={`text-center
            sm:text-left
            text-[45px]
            leading-[50px]
            md:text-[4.375rem]
            md:leading-[5rem]
            font-chunkfive pb-[50px]
            text-tcnjblue
            ${heading === "Careers" ? "pb-[100px]" : ""}
            `}
    >
      {heading}
    </h2>
  );
}
