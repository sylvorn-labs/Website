"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-8 md:top-10 left-1/2 -translate-x-1/2 z-50 w-[286px] md:w-auto">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 px-6 py-3.5 rounded-[48px] bg-white/20 backdrop-blur-[32px] border border-white/40">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/full-logo.svg"
            alt="Sylvorn Labs"
            width={83}
            height={20}
            className="h-5 w-auto"
          />
        </Link>

        {/* Separator */}
        <div className="h-6 w-px bg-white/40" />

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/about"
            className="text-white text-xs font-normal leading-4 text-center hover:opacity-80 transition-opacity"
            style={{ fontFamily: "MADETOMMY, system-ui, sans-serif" }}
          >
            About
          </Link>

          {/* Separator */}
          <div className="h-6 w-px bg-white/40" />

          <Link
            href="/stay-notified"
            className="text-white text-xs font-normal leading-4 text-center hover:opacity-80 transition-opacity"
            style={{ fontFamily: "MADETOMMY, system-ui, sans-serif" }}
          >
            Stay Notified
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Nav Container */}
        <div className="flex flex-col rounded-3xl bg-white/20 backdrop-blur-[32px] border border-white/40 overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 h-12">
            {/* Logo */}
            <Link
              href="/"
              className="shrink-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logo/full-logo.svg"
                alt="Sylvorn Labs"
                width={83}
                height={20}
                className="h-5 w-auto"
              />
            </Link>

            {/* Separator */}
            <div className="flex-1 flex justify-end items-center">
              <div className="h-12 w-px bg-white/40 mr-6" />

              {/* Menu Toggle Button */}
              <button
                onClick={toggleMenu}
                className="w-4 h-4 flex items-center justify-center relative"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Menu Items (Mobile) */}
          {isMenuOpen && (
            <>
              {/* Separator Line */}
              <div className="w-full h-px bg-white/40" />

              {/* Menu Links */}
              <div className="flex flex-col px-6 py-4 gap-4">
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-xs font-normal leading-4 hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "MADETOMMY, system-ui, sans-serif" }}
                >
                  About
                </Link>
                <Link
                  href="/stay-notified"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-xs font-normal leading-4 hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "MADETOMMY, system-ui, sans-serif" }}
                >
                  Stay Notified
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
