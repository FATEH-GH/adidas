"use client";

import React from "react";
import { useState } from "react";
import Button from "./Button";
import { infos } from "@/constants";
import Image from "next/image";
import ShoeCard from "./ShoeCard";
import bigshoe1 from "../public/bigshoe1.png";
import bigshoe2 from "../public/bigshoe2.png";
import bigshoe3 from "../public/bigshoe3.png";
import { motion } from "framer-motion";

let shoes: any[] = [bigshoe1, bigshoe2, bigshoe3];

const Hero = () => {
  const [BigShoe, setBigShoe] = useState(bigshoe1);
  return (
    <section
      id="home"
      className="max-container flex flex-col xl:flex-row mb-8 mt-[160px]"
    >
      <div className="xl:w-1/2 ">
        <h1 className="text-orange-500 text-2xl md:text-3xl lg:text-5xl px-6 ">
          Our Summer collection
        </h1>

        <h2 className="font-bold text-[60px] md:text-[80px] py-6 px-6">
          The New Arrival
          <br /> <span className="text-orange-500">Adidas</span> Shoes
        </h2>
        <p className="text-[20px] text-gray-500 pb-8 px-6 md:max-w-md">
          Discover stylish Adidas arrivals, quality confort, and innovation for
          your active life.
        </p>
        <Button
          text="Shop now"
          styles="flex juatify-center p-4 gap-4 text-white text-[22px] bg-orange-500 rounded-3xl mx-6"
          icon="/arrow-right.svg"
        />

        <div className="flex flex-wrap justify-between py-10 px-6">
          {infos.map((info) => (
            <div key={info.label}>
              <h4 className="font-bold text-[42px] ">{info.number}</h4>
              <p className="text-gray-500">{info.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-1 flex-col justify-center items-center xl:h-screen w-screen bg-hero bg-center bg-cover relative z-0 xl:-mt-48">
        <motion.div
          key={BigShoe.src}
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={BigShoe}
            width={600}
            height={500}
            alt="BigShoe"
            className="rotate-12 object-contain relative z-0 py-8"
          />
        </motion.div>
        <div className="flex absolute -bottom-12 gap-4">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                image={shoe}
                changeBigShoe={(image) => setBigShoe(image)}
                bigShoe={BigShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
