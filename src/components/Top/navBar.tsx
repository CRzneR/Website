"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm ">
      <div className="max-w-6xl mx-auto  flex items-center  h-16 ">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold tracking-widest text-black"
        >
          <Image
            src="/image/logo_farbe.png"
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>

        <p className="text-[#CEC9C9] ml-auto hover:underline hover:cursor-pointer">
          contact me
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
