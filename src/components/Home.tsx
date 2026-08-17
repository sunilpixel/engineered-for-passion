import Image from "next/image";

const Home = () => {
  return (
    <div className=" 3xl:max-w-85.5 max-w-72 w-full mx-auto relative grid place-items-center">
      <Image
        className="absolute bottom-[5%] left-1/2 z-0 h-[312%] w-[130%] -translate-x-1/2 object-fill opacity-0 dark:opacity-100"
        src="/images/png/light-up.png"
        alt="black car"
        width={189}
        height={342}
        priority
      />

      <Image
        className="absolute bottom-[5%] left-1/2 z-0 h-[312%] w-[130%] -translate-x-1/2 object-fill dark:opacity-0 opacity-100"
        src="/images/png/dark-light-up.png"
        alt="light-up"
        width={189}
        height={342}
        priority
      />
      <Image
        className="object-cover shadow-deepSoft rounded-full  w-full aspect-square relative z-10"
        src="/images/webp/blue-car.webp"
        alt="blue-car"
        width={342}
        height={342}
      />
    </div>
  );
};

export default Home;
