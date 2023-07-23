import Link from "next/link";
import React from "react";

function Section2({ editorLink }: { editorLink: string }) {
  return (
    <section className=" min-h-[65vh] fc fce ">
      <div className="">
        <div className="text-center text-neutral-200 text-[4.5rem] font-semibold">
          #ForTheStudentsByTheStudents
        </div>
      </div>
      <div className="flex items-center justify-center gap-24 px-12 py-3 shadow bg-gradient-to-r from-blue-600 to-fuchsia-500 rounded-xl">
        <div className=" text-neutral-200 text-[35px] font-semibold">
          Create your Professional Package <br />
          Today !
        </div>
        <div className="flex items-center justify-center p-2 px-4 border rounded-lg bg-neutral-100 border-stone-500">
          <Link
            href={editorLink}
            className="text-xl font-medium text-center text-zinc-700"
          >
            Build My Resume
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Section2;
