"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import AdidasAnimation from "../public/AdidasAnimationLogo.json";
import Image from "next/image";
import { GetInTouch, Help, Products } from "@/constants";

import { Waypoint } from "react-waypoint";
import React, { useState } from "react";

const Footer = () => {
  let [renderLottie, setRenderLottie] = useState(false);
  return (
    <footer className="mb-12 mt-24" id="Contact Us">
      <div className=" max-container flex flex-wrap gap-8 lg:flex-row lg:justify-between lg:items-center">
        <div className="px-4">
          <h2 className="h-[125px] w-[125px] xl:h-[175px] xl:w-[175px]">
            <Link href="/">
              <Waypoint onEnter={() => setRenderLottie(true)} />
              {renderLottie && (
                <Lottie animationData={AdidasAnimation} loop={false} />
              )}
            </Link>
          </h2>
          <div className="max-md:max-w-[400px] max-w-[350px]">
            <p className="text-[16px] xl:text-[18px]  ">
              Get shoes ready for the new term at your nearest Adidas store.
              Find Your perfect Size In Store, Get Rewards.
            </p>
          </div>
          <div className="flex items-center gap-4 pt-6 ">
            <Link href="/">
              <Image
                src="/facebook.svg"
                height={40}
                width={40}
                alt="facebook icon"
              />
            </Link>
            <Link href="/">
              <Image
                src="/twitter.svg"
                height={40}
                width={40}
                alt="twitter icon"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.svg"
                height={40}
                width={40}
                alt="instagram icon"
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-24 px-4">
          <div>
            <h2 className="font-extrabold text-[20px] pb-4">Products</h2>
            <ul className="flex flex-col gap-2">
              {Products.map((product) => (
                <li
                  className="hover:text-gray-500 font-bold"
                  key={product.label}
                >
                  <Link href={product.href}>{product.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-extrabold text-[20px] pb-4">Help</h2>
            <ul className="flex flex-col gap-2">
              {Help.map((help) => (
                <li className="hover:text-gray-500 font-bold" key={help.label}>
                  <Link href={help.href}>{help.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-6">
          <h2 className="font-extrabold text-[20px] pb-4">Get in touch</h2>
          <ul className="flex flex-col gap-2">
            {GetInTouch.map((info) => (
              <li key={info.label} className="hover:text-gray-500 font-bold">
                <Link href={info.href}>{info.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center mt-10 md:flex-row md:justify-between md:px-8 ">
          <p>Copyright. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className="border-2 border-slate-600 rounded-full mx-10 mt-4" />
    </footer>
  );
};

export default Footer;
