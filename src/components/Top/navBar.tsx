"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="px-4 py-2 text-sm font-medium text-black/80 hover:text-purple-700 transition-colors"
  >
    {label}
  </Link>
);

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Über Mich" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Kontakt" },
];

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto px-4 flex items-center  h-16">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-widest text-black"
        >
          <Image src="/image/logo.png" alt="Logo" width={30} height={30} />
        </Link>

        {/* Navigation Items */}
        <div className="flex mx-auto">
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
