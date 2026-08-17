import Image from "next/image";
import { LightUpIcon } from "./common/Icons";

const Home = () => {
  return (
    <div className="grow">
      <LightUpIcon className="absolute top-[-10%] h-full left-1/2 -translate-x-1/2 max-w-95.5 w-full z-0" />
      <Image
        className="object-cover shadow-deepSoft rounded-full 3xl:max-w-85.5 max-w-72 mx-auto w-full aspect-square relative z-10"
        src="/images/webp/blue-car.webp"
        alt="blue-car"
        width={342}
        height={342}
      />
    </div>
  );
};

export default Home;
