import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-end justify-between w-full ">
      <Image
        alt="logo"
        className="h-20 w-96"
        src="/logo.png"
        width={350}
        height={80}
      />
      <div className="flex flex-col items-end justify-end w-[60%] gap-2 h-full py-2">
        <Link
          href={"mailto:contact@buildyourresume.online"}
          className="text-base font-medium text-right text-white w-96 "
        >
          contact@buildyourresume.online
        </Link>
        <div className="h-px border border-white w-96"></div>
      </div>
    </div>
  );
}

export default Footer;
