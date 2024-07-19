import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const index = () => {
  const { theme, setTheme } = useTheme();
  const themeHandler = () => {
    setTheme(`${theme == "light" ? "dark" : "light"}`);
  };
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default index;
