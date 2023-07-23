import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection({ editorLink }: { editorLink: string }) {
  return (
    <section className="fcb min-h-[55vh] my-10 flex-wrap justify-center md:gap-20 gap-8  lg:justify-between xl:justify-between ">
      {/* text  */}
      <div className="flex flex-col justify-between h-full gap-8  md:max-w-[35em] max-w-[20em] ">
        <div className="  flex-col justify-start items-start gap-[2rem] flex  ">
          <div className="text-neutral-200 text-[1.5rem] font-semibold md:text-[3rem]">
            Build Your Professional
            <br />
            Resume with Simple Login
          </div>
          <div className="flex flex-col items-start justify-between p-4 ">
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-zinc-400 text-[17px] font-medium">
                Find Your Starting Point, Craft Your Perfect Resume
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-zinc-400 text-[17px] font-medium">
                Master the Art of Resume Writing with Best Practices
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-zinc-400 text-[17px] font-medium">
                Unlock Success with Mentor-Recommended Templates
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-zinc-400 text-[17px] font-medium">
                Get Noticed by HR - Make Your Resume Irresistible
              </div>
            </div>
            <div className="flex items-start justify-start gap-1 ">
              <Image
                className="w-[22px] h-[17px]"
                alt="arrow svg"
                src="/arrow.svg"
                width={22}
                height={17}
              />
              <div className=" text-zinc-400 text-[17px] font-medium">
                Rise Above the Rest - Stand Out from Your Peers
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <div className="p-4 px-16 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-500 border-stone-500 w-fit">
          <Link
            href={editorLink}
            className="text-center text-neutral-200 md::text-[2.3rem] font-medium" >
            Build Your Resume
          </Link>
        </div>
      </div>

      {/* images  */}
      <div className="relative w-[26em] h-[30em] xl:scale-[1.20] lg:scale-[.9] scale-[.7] translate-x-6 lg:-translate-x-2 xl:-translate-x-16  ">
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
