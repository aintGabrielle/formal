import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const raleway = Raleway({
  subsets: ["latin"],
});
const Navbar = () => {
  const [status, setStatus] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full shadow-md relative px-4 py-3">
      <Link href={"/"} className="w-24 h-12 md:w-28 md:h-16 relative ">
        <Image src={"/logo.png"} fill alt="Logo" className="object-cover" />
      </Link>
      <div
        className={`${raleway.className} font-semibold space-x-5 hidden sm:flex`}
      >
        <Link
          className="hover:text-red-500 duration-200 transition-all ease-in"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="hover:text-red-500 duration-200 transition-all ease-in"
          href={"/"}
        >
          About Us
        </Link>
        <Link
          className="hover:text-red-500 duration-200 transition-all ease-in"
          href={"/"}
        >
          Works
        </Link>
        <Link
          className="hover:text-red-500 duration-200 transition-all ease-in"
          href={"/"}
        >
          Contact
        </Link>
      </div>
      <div className="hidden sm:flex">
        <Button className="bg-red-600 hover:bg-red-400">
          <Link href={"/"}>GET IN TOUCH!</Link>
        </Button>
      </div>
      {/* Mobile Device Code Below */}

      <div
        onClick={() => setStatus(!status)}
        className="text-red-500 flex sm:hidden"
      >
        <IoMenu size={45} />
      </div>
      <div
        className={
          status
            ? "bg-white z-10 top-0 left-0 fixed w-full h-screen flex sm:hidden flex-col justify-between items-center duration-500 transition-all ease-out"
            : "bg-white z-10 top-[-750px] left-0 fixed w-full h-screen flex sm:hidden flex-col justify-between items-center duration-500 transition-all ease-in"
        }
      >
        <div
          className={`text-black gap-4 w-full px-8 py-4 text-2xl flex flex-col ${raleway.className} font-semibold`}
        >
          <Link onClick={() => setStatus(!status)} href={"/"}>
            Home
          </Link>
          <Link onClick={() => setStatus(!status)} href={"/"}>
            About Us
          </Link>
          <Link onClick={() => setStatus(!status)} href={"/"}>
            Works
          </Link>
          <Link onClick={() => setStatus(!status)} href={"/"}>
            Contact
          </Link>
          <Button
            onClick={() => setStatus(!status)}
            className="bg-red-600 hover:bg-red-400"
          >
            <Link href={"/"}>GET IN TOUCH!</Link>
          </Button>
        </div>
        <div
          onClick={() => setStatus(!status)}
          className="text-red-500 flex sm:hidden"
        >
          <IoClose size={50} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
