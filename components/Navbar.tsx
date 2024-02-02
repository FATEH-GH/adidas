"use client";

import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/Gi";
import AdidasAnimation from "../public/AdidasAnimationLogo.json";
import Lottie from "lottie-react";
import { NavList } from "@/constants";
import Button from "./Button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Overlaymenu from "./Overlaymenu";

const Navbar = () => {
  return (
    <section className="max-container relative z-10">
      <nav className="flex justify-between mx-0 sm:mx-6">
        <div className="h-[125px] w-[125px] xl:h-[175px] xl:w-[175px] flex justify-center">
          <Link href="/" className="flex justify-center">
            <Lottie animationData={AdidasAnimation} loop={false} />
          </Link>
        </div>

        <div className="pr-8 pt-8 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <a>
                <GiHamburgerMenu size="30px" />
              </a>
            </SheetTrigger>
            <SheetContent className="flex item-center justify-center">
              <Overlaymenu />
            </SheetContent>
          </Sheet>
        </div>

        <ul className="max-md:hidden flex items-center gap-24 ">
          {NavList.map((list) => (
            <li key={list.label}>
              <a href={list.href} className=" text-gray-400">
                <p className="text-[35px] md:text-[20px]">{list.label}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
