import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
});
const bhineka = localFont({
  src: "../../public/fonts/Bhineka.ttf",
});

const Wedo = () => {
  const taglines = [
    {
      title: "RESULT-DRIVEN ",
    },
    {
      title: "QUICK-THINKING ",
    },
    {
      title: "CREATIVE ",
    },
    {
      title: "CONNECT AUTHENTICALLY ",
    },
    {
      title: "EXCELLENT ",
    },
    {
      title: "FUN-LOVING ",
    },
    {
      title: "CONSISTENT QUALITY ",
    },
    {
      title: "CONTENT THAT SELLS ",
    },
    {
      title: "MORE RESULTS, LESS DRAMA    ",
    },
    {
      title: "TIMELY DELIVERY ",
    },
  ];
  const duplicatesTag = [...taglines, ...taglines];
  const Images = [
    "/villar.png",
    "/intern.png",
    "/wavebg.png",
    "/yellow.png",
    "/redyellow.png",
    "/instaribbon.png",
  ];
  return (
    <div className="w-full flex flex-col items-center py-9 gap-8">
      <h1 className={`${bhineka.className} text-4xl md:text-4xl lg:text-7xl`}>
        What we do?
      </h1>
      <motion.div
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        className="h-auto md:w-[90vw] lg:w-[80vw] px-3 sm:px-0 grid grid-cols-2 md:grid-cols-4 gap-4  "
      >
        <div className="flex flex-col flex-wrap gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/448444173_497990832568277_2820356943556944056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rpC3GfYMsTIQ7kNvgGMBN9M&_nc_ht=scontent.fmnl30-3.fna&oh=00_AYD0Phs0IEJ33v2a8ifId_6aMKRXMz4zWC3zPiNiDon99A&oe=669FC4D8"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/451090434_514534197580607_3525799447263492213_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rsmzFdtWzdoQ7kNvgHYTKgx&_nc_ht=scontent.fmnl30-2.fna&oh=00_AYA3E0rYgTakkd1RbgbDfI7LsRwpmBxqrmzQko8A-eIMKw&oe=669FD12B"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/449829547_513956487638378_7590735594575616046_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=INqxijJCsbgQ7kNvgFN9rvW&_nc_ht=scontent.fmnl30-2.fna&oh=00_AYDYXw3a8jP5QY6NHIqVErnPtASIdjj2KPfhR80nuCsguA&oe=669FC6F1"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/448498588_497980799235947_3463812838676072296_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zALypGHqpG8Q7kNvgGQkMsG&_nc_ht=scontent.fmnl30-1.fna&oh=00_AYCzy9NWxyndZ1i1GDH-n0UXdGwxGxGmAtXTVisnO4CzpQ&oe=669FCB00"
              alt="Witty"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/448498588_497980799235947_3463812838676072296_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zALypGHqpG8Q7kNvgGQkMsG&_nc_ht=scontent.fmnl30-1.fna&oh=00_AYCzy9NWxyndZ1i1GDH-n0UXdGwxGxGmAtXTVisnO4CzpQ&oe=669FCB00"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/440127236_471277518572942_7903662256989823276_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A8cn_mYqSLAQ7kNvgHXjDMM&_nc_ht=scontent.fmnl30-1.fna&oh=00_AYD2vJeqz5zcwRA9d-2lci_vHSF3wHwAeNmVJwpSRoawUw&oe=669FC0C3"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/435593616_456972263336801_7191772698760946341_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=sSiFFUR3cx4Q7kNvgHjv3xz&_nc_ht=scontent.fmnl30-1.fna&oh=00_AYAujqrEqD3LMDOqutlgQuW0JdGmu4oYvE0TX6Q1UhJWhA&oe=669FE029"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/447678068_495821509451876_565154944574494900_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zZsMep7ZfaYQ7kNvgHQF3Cy&_nc_ht=scontent.fmnl30-3.fna&oh=00_AYAU6ks7KL8DHOdrQWC-vT_xyEu2XTTzfrZyfviCPQyikw&oe=669FC9D1"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/447782752_495821492785211_2668993952393402792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DOGkmQeIlA8Q7kNvgGls4OU&_nc_ht=scontent.fmnl30-2.fna&oh=00_AYD40SMNqO-VQHf_oWJCoyvFNv_A-XXI8VcKe4ECA5ADug&oe=669FDC4B"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap gap-3">
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/447783614_495821472785213_1817238598118327700_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=j_BVPnpVfU0Q7kNvgGLp4FC&_nc_ht=scontent.fmnl30-3.fna&oh=00_AYDTYsyabJB4RLX5PgjlpCyOEsHGN2ncGPVT_ouilxBrsQ&oe=669FE8AF"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/447895115_495821436118550_1370712077437868317_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yoJHmS74QIoQ7kNvgFijXWm&_nc_ht=scontent.fmnl30-1.fna&oh=00_AYB797yWOFgnGYcYIxBDf0Nzjju7yvGUebuGvL0XQkxQlw&oe=669FE32E"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg shadow-md shadow-black/50"
              src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/447895115_495821436118550_1370712077437868317_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yoJHmS74QIoQ7kNvgFijXWm&_nc_ht=scontent.fmnl30-1.fna&oh=00_AYB797yWOFgnGYcYIxBDf0Nzjju7yvGUebuGvL0XQkxQlw&oe=669FE32E"
              alt=""
            />
          </div>
        </div>
      </motion.div>
      {/* SCROLLING BELOW */}
      <div className="relative w-full overflow-hidden mt-12">
        <motion.div
          className="flex"
          animate={{
            x: ["0%", "-120%"],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {duplicatesTag.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-yellow-400"
              // style={{ width: `${100 / taglines.length}%` }}
            >
              <div
                className={`flex flex-col items-center justify-center flex-wrap w-full h-full px-8 py-4  text-red-600 text-xl md:text-2xl ${raleway.className} font-semibold`}
              >
                {slide.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Wedo;
