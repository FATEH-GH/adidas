"use client";

import React, { useState } from "react";

import { NavList } from "@/constants";
import { ModeToggle } from "./ModeToggle";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "./ui/resizableNavBar";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <section className="max-container  my-4">
      <Navbar className="bg-transparent">
        {/* Desktop Navigation - */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={NavList} />
          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="mx-4">
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {NavList.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 font-bold text-lg dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full justify-center item-center gap-4">
              <ModeToggle />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </section>
  );
};

export default NavBar;
