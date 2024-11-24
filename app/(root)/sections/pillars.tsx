import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PillarSection = () => {
  const features = [
    {
      name: "ROBOLAND",
      background: "/grid/grid1.webp",
      className:
        "aspect-square md:aspect-auto md:row-span-6 md:col-span-2 md:col-start-1 md:row-start-1 md:h-[600px]",
    },
    {
      name: "Techknowledge",
      background: "/grid/grid2.webp",
      className:
        "aspect-square md:aspect-auto md:col-span-4 md:row-span-4 md:h-[360px]",
    },
    {
      name: "Futuristech",
      background: "/grid/grid3.webp",
      className:
        "aspect-square md:aspect-auto md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-3 md:h-[300px]",
    },
    {
      name: "Inkubator",
      background: "/grid/grid4.webp",
      className:
        "aspect-square md:aspect-auto md:col-start-5 md:row-start-1 md:col-span-2 md:row-span-3 md:h-[300px]",
    },
  ];
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full px-4 md:py-16">
      <h3 className="text-hilight font-poppins uppercase">
        Our Dynamic Ecosystem
      </h3>
      <h1 className="font-orbitron font-semibold text-4xl md:text-6xl">
        The 4 Pillars
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full max-w-7xl md:h-[600px] md:mb-8 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "overflow-hidden rounded-lg relative filter saturate-50 hover:saturate-100 transition-all duration-300",
              feature.className
            )}
          >
            <Image
              src={feature.background}
              alt={feature.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="p-4 font-orbitron text-white text-3xl font-bold absolute top-3 left-3">
              {feature.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillarSection;
