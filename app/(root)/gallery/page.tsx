"use client";

import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Page = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-screen flex flex-col gap-12 justify-center items-center w-full bg-[url('/heroImage.webp')] bg-cover bg-center relative p-8 md:p-16 lg:p-32 max-sm:py-32">
      <div className="absolute inset-0 bg-white opacity-45"></div>
      <div className="relative z-30 flex flex-col gap-12 justify-center items-center">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="font-orbitron capitalize font-semibold text-4xl md:text-6xl">
            gallery
          </h1>
          <h3 className="text-hilight font-poppins uppercase text-sm md:text-base">
            Discover the moments that define us!
          </h3>
        </div>
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full px-4 md:px-8 lg:px-24"
          orientation={isMobile ? "vertical" : "horizontal"}
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center"
              >
                <Image
                  src={`/gallery/image${index + 1}.png`}
                  alt={`Image ${index + 1}`}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Page;
