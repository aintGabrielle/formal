import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({ subsets: ["latin"] });
const Hero = () => {
  return (
    <section className="h-[80vh] w-full relative grid grid-cols-1 md:grid-cols-2">
      <div className="bg-red-400 p-4 space-y-4 w-full h-full sm:px-16 sm:py-24 md:px-24 md:py-24 lg:px-32 lg:py-24">
        <div>
          <h1
            className={`${raleway.className} tracking-widest text-xl sm:text-2xl lg:text-4xl`}
          >
            Hello! We are
          </h1>
          <h1
            className={`${bhineka.className} w-fit tracking-widest text-4xl sm:text-5xl lg:text-6xl text-[#D61F27]`}
          >
            Insta Post PH
          </h1>
        </div>
        <div className="w-fit">
          <p
            className={`${raleway.className}  text-sm md:text-lg lg:text-2xl text-gray-500 w-fit`}
          >
            Content marketing and social media markerting agency, helping
            businesesses thrive in the digital space, by delivering instant
            high-end quality content that sells.
          </p>
        </div>
      </div>
      <div className="w-full h-">
        <div className="w-full h-auto relative bg-slate-400">
          <Image
            src={"/intern.png"}
            className="object-contain rounded-xl"
            fill
            alt="Intern"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
