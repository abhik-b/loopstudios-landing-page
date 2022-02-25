import React from "react";
import Image from "next/image";
import { useScreenWidth } from "../hooks/ScreenWidth";
export default function Creation({ label1, label2, image, alt }) {
  const desktop = useScreenWidth({ width: 768 });
  return (
    <div className="relative h-32 md:h-96 w-full lg:w-3/4 place-self-center">
      <Image
        src={`/images/${desktop ? "desktop" : "mobile"}/${image}`}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-3/4 h-full bottom-0  gradient-bg"></div>
      <p className="text-3xl  -bottom-1 absolute text-white  uppercase p-4">
        <span>{label1}</span>
        <br />
        <span>{label2}</span>
      </p>
    </div>
  );
}
