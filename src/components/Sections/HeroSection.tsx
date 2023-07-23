import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className=" flex items-center justify-between min-h-[55vh] my-10 ">
      {/* text  */}
      <div className="flex flex-col justify-between h-full ">
        <div className="w-[45vw] flex-col justify-start items-start gap-[2rem] flex ">
          <div className="text-neutral-200 text-[47px] font-semibold w-[30vw]">
            Build Your Professional Resume with Simple Login
          </div>
          <div className="w-[526px] flex-col justify-between items-start flex p-4">
            <div className="w-[526px] h-6 justify-start items-center gap-[9px] inline-flex">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className="w-[503px] text-zinc-400 text-[17px] font-medium">
                Find Your Starting Point, Craft Your Perfect Resume
              </div>
            </div>
            <div className="w-[526px] h-6 justify-start items-center gap-[9px] inline-flex">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className="w-[503px] text-zinc-400 text-[17px] font-medium">
                Master the Art of Resume Writing with Best Practices
              </div>
            </div>
            <div className="w-[526px] h-6 justify-start items-center gap-[9px] inline-flex">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className="w-[503px] text-zinc-400 text-[17px] font-medium">
                Unlock Success with Mentor-Recommended Templates
              </div>
            </div>
            <div className="w-[526px] h-6 justify-start items-center gap-[9px] inline-flex">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className="w-[503px] text-zinc-400 text-[17px] font-medium">
                Get Noticed by HR - Make Your Resume Irresistible
              </div>
            </div>
            <div className="w-[526px] h-6 justify-start items-center gap-[9px] inline-flex">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className="w-[503px] text-zinc-400 text-[17px] font-medium">
                Rise Above the Rest - Stand Out from Your Peers
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="p-4 px-16 border rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-500 border-stone-500 w-fit">
          <div className="text-center text-neutral-200 text-[38px] font-medium">
            Build Your Resume
          </div>
        </div>
      </div>

      {/* images  */}
      <div className="relative w-full h-full scale-[1.20] -translate-x-16">
        <Image
          alt="example resume"
          className="absolute rounded shadow right-[11%] top-[50%] -translate-y-1/2 scale-150"
          src="/exmaple-resume2.png"
          width={306}
          height={396}
        />
        <Image
          alt="example resume"
          className=" absolute rounded shadow right-[28%] top-[55%] -translate-y-1/2 scale-120 h-[28rem] w-[22rem]"
          src="/exmaple-resume1.png"
          width={306}
          height={430}
        />
      </div>
    </section>
  );
}

export default HeroSection;
