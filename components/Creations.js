import React from "react";
import Creation from "./Creation";

export default function Creations() {
  return (
    <section className="mt-24 lg:mt-12 font-josefinSans flex flex-col ">
      <h3
        className="p-4 border-2 text-center border-white text-3xl  
      tracking-wide uppercase"
      >
        Our creations
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center p-4 gap-4 md:grid-cols-4 lg:px-48 ">
        <Creation
          image="image-deep-earth.jpg"
          label1="Deep"
          label2="Earth"
          alt="picture of earth"
        />
        <Creation
          image="image-night-arcade.jpg"
          label1="night"
          label2="arcade"
          alt="picture of arcade"
        />
        <Creation
          image="image-soccer-team.jpg"
          label1="soccer"
          label2="team vr"
          alt="picture of soccer player"
        />
        <Creation
          image="image-grid.jpg"
          label1="the"
          label2="grid"
          alt="picture of car"
        />
        <Creation
          image="image-from-above.jpg"
          label1="from up"
          label2="above vr"
          alt="picture of roads"
        />
        <Creation
          image="image-pocket-borealis.jpg"
          label1="pocket"
          label2="borealis"
          alt="picture of borealis"
        />

        <Creation
          image="image-curiosity.jpg"
          label1="the"
          label2="curiosity"
          alt="picture of mars rover"
        />
        <Creation
          image="image-fisheye.jpg"
          label1="make it"
          label2="fisheye"
          alt="picture of fisheye"
        />
      </div>
      <button className="uppercase max-w-[150px] mx-auto  px-4 py-2 mt-4 text-black border-black border-2 transition ease-in hover:bg-black hover:text-white">
        see all
      </button>
    </section>
  );
}
