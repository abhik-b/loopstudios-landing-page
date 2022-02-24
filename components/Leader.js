import React from "react";
import Image from "next/image";

export default function Leader() {
  return (
    <section className="p-4 mt-24 text-center flex flex-col ">
      <Image
        src={"/images/mobile/image-interactive.jpg"}
        alt="interactive"
        layout="responsive"
        height={230}
        width={300}
      />
      <h2 className="text-4xl  font-josefinSans uppercase  m-4 mt-8">
        The leader in interactive VR{" "}
      </h2>
      <p className="max-w-[300px] self-center text-gray-500 font-alata ">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </section>
  );
}
