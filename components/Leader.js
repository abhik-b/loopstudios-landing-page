import React from "react";
import Image from "next/image";
import { useScreenWidth } from "../hooks/ScreenWidth";

export default function Leader() {
  const desktop = useScreenWidth({ width: 768 });
  return (
    <section className="p-4 md:px-12 lg:px-48 mt-24 text-center lg:text-left flex flex-col md:flex-row min-h-[640px] ">
      <div>
        <Image
          src={"/images/mobile/image-interactive.jpg"}
          alt="interactive"
          layout="intrinsic"
          height={desktop ? 400 : 230}
          width={desktop ? 600 : 300}
        />
      </div>
      <div>
        <div className="flex flex-col bg-white lg:max-h-min lg:max-w-lg lg:pl-24 lg:pr-12 lg:py-24 lg:self-end lg:mt-[15%] lg:-ml-[20%] relative z-20">
          <h2 className="text-4xl    font-josefinSans uppercase  m-4 mt-8 lg:m-0">
            The leader in interactive VR{" "}
          </h2>
          <p className="max-w-[300px] lg:max-w-max  self-center lg:self-start text-gray-500 font-alata ">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}
