import React from "react";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
  // weight: "100",
});

const raleway = Raleway({ subsets: ["latin"] });
const Hero = () => {
  return (
    <section className="h-auto w-full relative grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center px-8 p-4 space-y-4 w-full h-full ">
        <div>
          <h1
            className={`${raleway.className} tracking-widest text-xl sm:text-2xl lg:text-4xl`}
          >
            Hello! We are
          </h1>
          <h1
            className={`${bhineka.className} w-fit tracking-widest text-4xl sm:text-5xl lg:text-8xl text-[#D61F27]`}
          >
            Insta Post PH
          </h1>
        </div>
        <div className="w-fit">
          <p
            className={`${raleway.className}  text-sm md:text-lg lg:text-xl text-gray-500 `}
          >
            Content marketing and social media markerting agency, helping
            businesesses thrive in the digital space, by delivering instant
            high-end quality content that sells.
          </p>
        </div>
        <Button className="w-fit bg-red-600">
          <Link href={"/"} className="flex gap-2 items-center">
            GET IN TOUCH <FaArrowRight size={15} />
          </Link>
        </Button>
      </div>
      <div className="static w-full h-auto px-8 sm:px-4 lg:px-0 sm:py-8">
        <img src="intern.png" className="h-auto max-w-full" />
      </div>
    </section>
  );
};

export default Hero;
