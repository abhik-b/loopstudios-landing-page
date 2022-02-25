import React from "react";
import Link from "next/link";
export default function DesktopMenu() {
  return (
    <div
      className="px-12 lg:px-48 py-4 mt-2
                font-alata bg-transparent 
              text-white flex justify-between items-center
                absolute top-0 left-0 right-0 z-20 h-12"
    >
      <p className="font-bold text-3xl">loopstudios</p>
      <div
        className="flex  justify-center gap-4 p-4  
                font-alata  mt-4"
      >
        <Link href="/">About</Link>
        <Link href="/">Careers</Link>
        <Link href="/">Events</Link>
        <Link href="/">Products</Link>
        <Link href="/">Supports</Link>
      </div>
    </div>
  );
}
