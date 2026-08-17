import ExperienceLayout from "@/components/common/ExperienceLayout";
import Image from "next/image";

const page = () => {
  return (
    <div className="font-sf-pro min-h-dvh">
      <div className="relative z-50">
        <ExperienceLayout />
      </div>
      <Image
        className="absolute inset-0 w-screen h-dvh object-cover -z-30 dark:opacity-100 opacity-0"
        src="/images/webp/main-bg.webp"
        alt="main-bg"
        fill
      />
    </div>
  );
};

export default page;
