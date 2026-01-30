"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Github, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleSectionClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-b-gray-400/10 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row gap-6 lg:gap-10 text-white flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <nav className="hidden md:flex flex-row gap-3 lg:gap-5 absolute right-4 lg:right-8">
            <Link
              target="_blank"
              className="border border-transparent bg-blue-700 rounded-full p-2 hover:bg-blue-600 transition-colors duration-200"
              href={"https://www.linkedin.com/in/aboubacar-traore-495736252"}
              aria-label="LinkedIn"
            >
              <Linkedin color="white" size={20} strokeWidth={1.25} />
            </Link>
            <Link
              target="_blank"
              className="border border-transparent bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors duration-200"
              href={"https://github.com/leodk293"}
              aria-label="GitHub"
            >
              <Github color="white" size={20} strokeWidth={1.25} />
            </Link>
          </nav>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* Social Links - Mobile (Left) */}
            <nav className="flex flex-row gap-3">
              <Link
                className="border border-transparent bg-blue-700 rounded-full p-2"
                href={"/"}
                aria-label="LinkedIn"
              >
                <Linkedin color="white" size={20} strokeWidth={1.25} />
              </Link>
              <Link
                className="border border-transparent bg-black rounded-full p-2"
                href={"/"}
                aria-label="GitHub"
              >
                <Github color="white" size={20} strokeWidth={1.25} />
              </Link>
            </nav>

            {/* Hamburger Menu Button (Right) */}
            <button
              onClick={toggleMenu}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={28} strokeWidth={1.5} />
              ) : (
                <Menu size={28} strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black/20 backdrop-blur-lg border-t border-gray-400/10">
            <div className="flex flex-col items-center gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSectionClick(e, link.href)}
                  className="text-white py-3 px-6 w-full text-center hover:bg-white/10 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
