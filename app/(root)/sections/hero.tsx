"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.from(".char", {
        y: 100,
        duration: 1,
        stagger: 0.03,
        ease: "power4.out",
      });
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      id="home"
      className="relative h-screen bg-[url('/heroImage.png')] bg-cover bg-center overflow-hidden"
    >
      <div className="absolute w-full h-full bg-white/15"></div>
      <div className=" bg-gradient-to-t from-white from-60% to-[rgba(0,0,0,0)] blur-md h-28 w-[calc(100%+25px)] absolute -translate-x-3 translate-y-6 bottom-0 left-0"></div>
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <Image
          src="/heroLogo.webp"
          alt="Acme Inc"
          width={600}
          height={300}
          draggable={false}
          className=""
        />
        <h1 className="md:text-3xl text-2xl font-orbitron font-bold text-white leading-[0.3rem] max-sm:leading-none ml-4 overflow-clip">
          {"A Hub for Futuristic Technologies".split(" ").map((word, index) => {
            return (
              <span key={index} className="inline-block mr-2 h-full">
                {word.split("").map((letter, index) => {
                  return (
                    <span className="char inline-block" key={index}>
                      {letter}
                    </span>
                  );
                })}{" "}
              </span>
            );
          })}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
