"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { testimonials } from "@/constants";
import Image from "next/image";

export const InfiniteMovingCards = ({
  direction = "up",
  speed = "fast",
  pauseOnHover = true,
  reverse,
  className,
}: {
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  });
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "up") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "70s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-h-[512px] overflow-hidden [mask-image:linear-gradient(to_top,transparent,white_5%,white_95%,transparent)]  flex justify-center items-center  border-3 border-red-500",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-col gap-4 mx-auto p-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {(reverse ? [...testimonials].reverse() : testimonials).map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl md:w-[450px] border-2 border-white flex items-center justify-center p-4"
            key={item.name}
          >
            <blockquote>
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center ">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="customer1"
                    className="rounded-full object-contain"
                  />
                </div>
                <p className="text-white text-[20px] text-center max-w-sm ">
                  {item.testimonial}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Image src="/star.svg" width={25} height={25} alt="star" />
                  <p className="text-white text-[20px] ">({item.rating})</p>
                </div>
                <p className="text-[35px] font-bold text-center">{item.name}</p>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
