import Image from "next/image";
import { FooterBgIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="max-w-[1892px] w-full mx-auto relative ">
      <div className="flex justify-between max-w-[1580px] w-full mx-auto">
        <div className="p-2.75 rounded-full bg-white/10  z-10 size-11 absolute bottom-[60px]">
          <div className="bg-babyGrey rounded-full w-full h-full"></div>
        </div>
      </div>{" "}
      <div className="footer-bg h-full w-full ">
        <FooterBgIcon className=" relative z-10 fill-black" />
      </div>
    </footer>
  );
};

export default Footer;
