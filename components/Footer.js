import React from "react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
export default function Footer() {
  return (
    <footer className="pt-8 font-alata flex flex-col justify-center text-center mt-24 bg-black w-full text-white gap-4">
      <div className="text-2xl">loopstudios</div>
      <div
        className="flex flex-col gap-4 p-4  
                  uppercase text-xs "
      >
        <Link href="/">About</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Events</Link>
        <Link href="/">Products</Link>
        <Link href="/">Supports</Link>
      </div>
      <SocialIcons />
      <p className="opacity-30 text-xs mb-12">
        {" "}
        © 2021 Loopstudios. All rights reserved.
      </p>
    </footer>
  );
}
