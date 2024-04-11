import NavigationBar from "./NavigationBar";

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
      <NavigationBar />
    </>
  );
}
