"use client";

import { useState, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Link } from "react-scroll";

type NavLinksType = {
  name: string;
  href: string;
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-white opacity-60"
      }`}
    >
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-black text-xs lg:text-sm font-medium transition-colors hover:text-primary px-2 py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-1 sm:space-x-2">
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
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 sm:top-16 bg-background z-40 p-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-base sm:text-lg font-medium py-2 transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
