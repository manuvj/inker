import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PillarSection = () => {
  const features = [
    {
      name: "ROBOLAND",
      background: "/grid/grid1.webp",
      className: "row-span-6 h-ful",
    },
    {
      name: "Techknowledge",
      background: "/grid/grid2.webp",
      className: "col-span-2 row-span-3 max-h-[450px]",
    },
    {
      name: "Futuristech",
      background: "/grid/grid3.webp",
      className: "col-start-2 row-start-4 row-span-3 max-h-[390px]",
    },
    {
      name: "Inkubator",
      background: "/grid/grid4.webp",
      className: "col-start-3 row-start-4 row-span-3 max-h-[390px]",
    },
  ];
  return (
    <div className="flex flex-col gap-5 justify-center items-center w-full">
      <h3 className="text-hilight font-poppins uppercase">
        Our Dynamic Ecosystem
      </h3>
      <h1 className="font-orbitron font-semibold text-4xl md:text-6xl">
        The 4 Pillars
      </h1>
      <div className="grid grid-cols-3 grid-rows-6 gap-5 p-4 w-[80vw] h-[800px] py-16">
        {features.map((feature, index) => (
          <div
            key={index}
            // className={`overflow-hidden rounded-lg ${feature.className}`}
            className={cn(
              "overflow-hidden rounded-lg relative object-cover h-full",
              feature.className
            )}
          >
            <Image
              src={feature.background}
              alt={feature.name}
              width={400}
              height={400}
              layout="responsive"
              className="object-cover object-center"
            ></Image>
            <div className="p-4 text-white text-xl font-bold absolute top-10 left-10">
              {feature.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillarSection;
