import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <div className="inline-flex items-center justify-start h-16 w-96 gap-14">
      <Image className="h-16 w-72" alt="main logo" src="https://via.placeholder.com/274x65" width={275} height={65} priority/>
      <div className="flex items-center justify-center gap-6 w-96 h-11">
        <div className="text-xl font-medium text-violet-50">About</div>
        <div className="text-xl font-medium text-violet-50">Features</div>
        <div className="text-xl font-medium text-violet-50">Pricing</div>
      </div>
      <div className="flex items-center justify-center gap-4 rounded-lg">
        <div className="w-28 h-11 rounded-lg border border-stone-500 justify-center items-center gap-2.5 flex">
          <div className="h-10 text-2xl font-medium text-center w-28 text-neutral-200">
            Sign in
          </div>
        </div>
        <div className="w-32 h-10 bg-gradient-to-r from-blue-600 to-fuchsia-500 rounded-lg border border-stone-500 justify-center items-center gap-2.5 flex">
          <div className="w-32 h-10 text-2xl font-medium text-center text-neutral-200">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
