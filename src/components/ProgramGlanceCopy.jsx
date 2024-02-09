export default function ProgramGlanceCopy({ copy, id }) {
  return (
    <div
      id={id}
      className={`
      text-[20px]
          leading-[35px]
          text-center
          sm:text-[23px]
          sm:leading-[45px]
          sm:text-left
          md:text-[1.75rem]
          ${id === "careers-body" ? "pb-[50px] sm:pb-[75px]" : ""}  

          `}
      dangerouslySetInnerHTML={{ __html: copy }}
    />
  );
}
