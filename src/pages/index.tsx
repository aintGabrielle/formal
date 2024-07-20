import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Wedo from "@/components/Wedo";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});
const index = () => {
  const { theme, setTheme } = useTheme();
  const themeHandler = () => {
    setTheme(`${theme == "light" ? "dark" : "light"}`);
  };
  return (
    <main>
      <Navbar />
      <Hero />
      <Wedo />
    </main>
  );
};

export default index;
