import React from "react";
import Image from "next/image";
export default function Creation({ label1, label2, image, alt }) {
  return (
    <div className="relative h-32 w-full">
      <Image src={`${image}`} alt={alt} layout="fill" />
      <div className="absolute w-3/4 h-full bottom-0  gradient-bg"></div>
      <p className="text-3xl  -bottom-1 absolute text-white  uppercase p-4">
        <span>{label1}</span>
        <br />
        <span>{label2}</span>
      </p>
    </div>
  );
}
