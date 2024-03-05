export default function TitleAndNav() {
  return (
    <>
      <div
        className="pt-[19px] pb-[19px] pl-[35px] pr-[35px]
      leading-[40px] md:max-w-[1128px] m-auto text-center
      lg:pl-0"
      >
        <p
          className="font-domine text-[35px] content-center text-[#000]
        sm:text-left "
        >
          Academics
        </p>
      </div>
      <div
        className="bg-[#F1F1F1] pt-[23px] pb-[23px] pl-[35px] pr-[35px]"
        id="menu"
      >
        <p className="max-w-[1128px] mx-auto font-opensans text-[14px] leading-[34px] text-left uppercase">
          Menu
        </p>
      </div>
    </>
  );
}
