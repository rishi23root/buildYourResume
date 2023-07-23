import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav({editorLink}: {editorLink: string}) {
  const signupLink = editorLink;
  const signinLink = editorLink;
  return (
    <div className="flex items-center justify-between ">
      <Image
        className="h-16 w-72"
        alt="main logo"
        src="/logo.png"
        width={275}
        height={65}
        priority
      />
      <div className="flex items-center justify-center gap-12 text-2xl font-base">
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
      <div className="flex items-center justify-center gap-8 ">
        <Link href={signupLink} className="flex items-center justify-center p-2 px-5 border rounded-xl border-stone-500 ">
          <div className="text-2xl font-medium text-center text-neutral-200">
            Sign in
          </div>
        </Link>
        <Link href={signinLink} className="flex items-center justify-center p-2 px-5 rounded-xl border-stone-500 bg-gradient-to-r from-blue-600 to-fuchsia-500 ">
          <div className="text-2xl font-medium text-center text-neutral-200">
            Sign up
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
