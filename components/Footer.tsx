"use client";

import Link from "next/link";
import Image from "next/image";
import { GetInTouch, Help, Products } from "@/constants";
import DarkAdidas from "../public/AdidasDark.png";
import LightAdidas from "../public/AdidasLight.png";

import React from "react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();

  const logoFooter = theme === "dark" ? DarkAdidas : LightAdidas;
  return (
    <footer className="mb-12 mt-24" id="Contact Us">
      <div className=" max-container flex flex-wrap gap-8 lg:flex-row lg:justify-between lg:items-center">
        <div className="px-4">
          <h2 className="h-[125px] w-[125px] xl:h-[175px] xl:w-[175px]">
            <Link
              href="/"
              className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
            >
              <Image
                src={DarkAdidas}
                alt="logo"
                width={100}
                height={100}
                className="hidden dark:block  bg-transparent"
              />
              <Image
                src={LightAdidas}
                alt="logo"
                width={80}
                height={100}
                className="dark:hidden bg-transparent"
              />
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
                className="bg-white rounded-full p-1"
              />
            </Link>
            <Link href="/">
              <Image
                src="/twitter.svg"
                height={40}
                width={40}
                alt="twitter icon"
                className="bg-white rounded-full p-1"
              />
            </Link>
            <Link href="/">
              <Image
                src="/instagram.svg"
                height={40}
                width={40}
                alt="instagram icon"
                className="bg-white rounded-full p-1"
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
          <p>Copyright 2025. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className="border-2 border-slate-600 rounded-full mx-10 mt-4" />
    </footer>
  );
};

export default Footer;
