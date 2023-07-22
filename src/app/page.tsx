import clsx from "clsx";
import Image from "next/image";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    // make whole page with 10/12 width and center it
    <div className="w-10/12 m-auto border">
      {/* paint each section */}
      <Nav />
    </div>
  );
}
