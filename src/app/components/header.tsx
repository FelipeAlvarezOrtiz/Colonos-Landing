"use client";

import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-scroll";
import Image from "next/image";
import LogoLosColonos from "../../assets/images/Logo_LC.webp";
import "../css/header.css";

type NavLinksType = {
  name: string;
  href: string;
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLinksType[] = [
    {
      name: "Inicio",
      href: "root",
    },
    {
      name: "Nosotros",
      href: "history",
    },
    {
      name: "Productos",
      href: "products",
    },
    {
      name: "Contacto",
      href: "contact",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all bg-white opacity-90  border-0 duration-200 `}
    >
      <div className="w-full flex h-14 sm:h-16 items-center justify-between px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center w-full space-x-2 lg:space-x-6 cursor-pointer">
          {navLinks.map((link, index) => {
            if (index === 2) {
              return (
                <div key={link.name} className="inline-flex items-center">
                  <div className="relative h-[78px] w-[208px] flex items-center justify-center">
                    <div className="absolute top-15 left-0 w-[208px] h-[100px] bg-white opacity-90 border-0 rounded-b-full" />
                    <Image
                      src={LogoLosColonos}
                      alt="Logo Los Colonos"
                      width={208}
                      height={90}
                      className="absolute top-10 w-32"
                    />
                  </div>
                  <Link
                    key={link.name}
                    to={link.href}
                    className="item-navbar ml-4 notosans"
                  >
                    {link.name}
                  </Link>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                className="item-navbar notosans"
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex w-full justify-between items-center md:hidden space-x-1 sm:space-x-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="h-8 w-8 sm:h-9 sm:w-9"
          >
            {isMenuOpen ? (
              <LuX className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <LuMenu className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </button>
          <Image
            src={LogoLosColonos}
            alt="Logo Los Colonos"
            width={60}
            height={60}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden text-[#1a3b2a] fixed inset-0 top-14 sm:top-16 z-40 p-4 w-[60%] bg-white">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <div key={`${link.name}-${index}`} className="py-2">
                <Link
                  to={link.href}
                  className="text-base sm:text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                <hr className="text-[#1a3b2a] mt-2" />
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
