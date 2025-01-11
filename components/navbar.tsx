"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo_white.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(10,37,64,0.95)] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="FastNEAR logo"
              width={120}
              height={30}
              className="object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="https://docs.fastnear.com/"
              className="text-white hover:text-primary transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="#pricing"
              className="text-white hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="https://t.me/fast_near"
              className="text-white hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
