"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const SplitText = ({
  text,
  className = "",
  staggerAmount = 0.5,
}: {
  text: string;
  className?: string;
  staggerAmount?: number;
}) => {
  const ref = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".char", {
        scrollTrigger: {
          trigger: ".char",
          start: "top 80%",
        },
        y: 100,
        duration: 1,
        stagger: {
          amount: staggerAmount,
        },
        ease: "power4.out",
      });
    },
    { scope: ref }
  );

  return (
    <p
      ref={ref}
      className={cn(
        "text-center font-bold md:text-3xl text-lg font-poppins ",
        className
      )}
    >
      {text.split(" ").map((word, index) => {
        return (
          <span key={index} className="overflow-clip inline-block mr-2">
            {word.split("").map((letter, index) => {
              return (
                <span className="char inline-block" key={index}>
                  {letter}{" "}
                </span>
              );
            })}{" "}
          </span>
        );
      })}
    </p>
  );
};

export default SplitText;
