import React from "react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
export default function Footer() {
  return (
    <footer className="pt-8 font-alata flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left mt-24 bg-black w-full text-white gap-4 md:gap-4 md:px-12 lg:px-48">
      <div>
        <div className="text-2xl px-4">loopstudios</div>
        <div
          className="flex flex-col md:flex-row gap-4 p-4 md:px-4 
                  uppercase text-xs md:gap-12"
        >
          <Link href="/">About</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Events</Link>
          <Link href="/">Products</Link>
          <Link href="/">Supports</Link>
        </div>
      </div>

      <div className="flex flex-col md:items-end pr-4 gap-4">
        <SocialIcons />
        <p className="opacity-30 text-xs mb-12">
          {" "}
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
