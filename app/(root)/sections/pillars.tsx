import SplitText from "@/components/ui/split-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const PillarSection = () => {
  const features = [
    {
      name: "ROBOLAND",
      des: "An interactive tech hub for all ages, combining education and entertainment to make advanced technology engaging and accessible. Featuring hands-on exhibits, Tech demos, and Meta world experiences, it sparks curiosity and inspires everyone from beginners to tech enthusiasts, accessing grassroots innovation.",
      background: "/grid/roboland.webp",
      className:
        "aspect-square md:aspect-auto md:row-span-6 md:col-span-2 md:col-start-1 md:row-start-1 md:h-[600px]",
    },
    {
      name: "Inkubator",

      des: "Empowering freshers, professionals, and entrepreneurs with future-focused skills, Techknowledge Academy blends cutting-edge technology and hands-on learning. This hub is your gateway to upskilling, reskilling, and thriving in a tech-driven world. Share knowledge. Build futures. Innovate here.",
      background: "/grid/inkubator.webp",
      className:
        "aspect-square md:aspect-auto md:col-start-5 md:row-start-1 md:col-span-2 md:row-span-3 md:h-[300px]",
    },
    {
      name: "Futuristech",
      des: "Dedicated research and development center, where ideas are transformed into practical solutions. This is where technology meets purpose, aiming to address realworld challenges through collaboration and innovation.",
      background: "/grid/futur.webp",
      className:
        "aspect-square md:aspect-auto md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-3 md:h-[300px]",
    },
    {
      name: "Techknowledge",

      des: "Designed to help entrepreneurs and innovators bring their ideas to market. With structured incubation programs, expert mentorship, and access to advanced prototyping labs, it offers a comprehensive support system. The state-of-the-art infrastructure and technology make it a cost-effective solution for startups, reducing capital requirements and providing the best incubator experience.",
      background: "/grid/tech.webp",

      className:
        "aspect-square md:aspect-auto md:col-span-4 md:row-span-4 md:h-[360px]",
    },
  ];
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full px-4 md:py-16">
      <div>
        <SplitText
          text="Our Dynamic Ecosystem"
          className="text-hilight font-poppins uppercase md:text-base"
        ></SplitText>
        <SplitText
          text="The 4 Pillars"
          className="font-orbitron font-semibold text-4xl md:text-6xl"
        ></SplitText>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full max-w-7xl md:h-[600px] md:mb-8 mt-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={cn(
              "group overflow-hidden rounded-lg relative  transition-all duration-300",
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
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="absolute top-3 left-3 flex flex-col z-50">
              <h1 className="p-4 font-orbitron text-white text-3xl font-bold">
                {feature.name}
              </h1>
              <p className="p-4 text-white md:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {feature.des}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillarSection;
