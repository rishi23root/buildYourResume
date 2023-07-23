import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav({editorLink}: {editorLink: string}) {
  const signupLink = editorLink;
  const signinLink = editorLink;
  return (
    <div className="flex items-center justify-between ">
      <Image
        className="w-40 h-12 lg:w-72 lg:h-16 "
        alt="main logo"
        src="/logo.png"
        width={275}
        height={65}
        priority
      />
      <div className="hidden gap-3 fcc lg:gap-12 lg:text-2xl font-base md:flex">
        <Link href={"#about"} className="text-violet-50">
          About
        </Link>
        <Link href={"#features"} className="text-violet-50">
          Features
        </Link>
        <Link href={"#pricing"} className="text-violet-50">
          Pricing
        </Link>
      </div>
      <div className="flex items-center justify-center gap-2 lg:gap-8 ">
        <Link
          href={signupLink}
          className="flex items-center justify-center p-2 border md:px-5 rounded-xl border-stone-500 "
        >
          <div className="font-medium text-center lg:text-2xl text-neutral-200">
            Sign in
          </div>
        </Link>
        <Link
          href={signinLink}
          className="flex items-center justify-center p-2 md:px-5 rounded-xl border-stone-500 bg-gradient-to-r from-blue-600 to-fuchsia-500 "
        >
          <div className="font-medium text-center lg:text-2xl text-neutral-200">
            Sign up
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
