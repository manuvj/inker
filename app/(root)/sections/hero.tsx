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
      className="relative h-screen bg-[url('/heroImage.webp')] bg-cover bg-center"
    >
      <div className="absolute top-1/2 -translate-y-3/4 md:left-32 flex flex-col">
        <Image
          src="/heroLogo.webp"
          alt="Acme Inc"
          width={800}
          height={500}
          draggable={false}
        />
        <h1 className="md:text-5xl text-lg font-orbitron font-bold text-white leading-[0.3rem] ml-4">
          {"A Hub for Futuristic Technologies".split(" ").map((word, index) => {
            return (
              <span key={index} className="overflow-clip inline-block mr-2">
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
