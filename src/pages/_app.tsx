import "@/styles/globals.css";
import "@/styles/typography.css";
import { Raleway } from "next/font/google";
import type { AppProps } from "next/app";
import NextThemeProvider from "@/components/next-theme-provider";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextThemeProvider defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemeProvider>
    </>
  );
}
