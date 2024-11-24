import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('/heroImage.webp')] bg-cover bg-center">
      <div className="absolute top-1/2 -translate-y-3/4 md:left-32 flex flex-col">
        <Image
          src="/heroLogo.webp"
          alt="Acme Inc"
          width={800}
          height={500}
          draggable={false}
        />
        <h1 className="md:text-5xl text-lg font-orbitron font-bold text-white leading-[0.3rem] ml-4">
          A Hub for Futuristic Technologies
        </h1>
      </div>{" "}
    </div>
  );
};

export default Hero;
