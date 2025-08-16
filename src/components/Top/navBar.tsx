"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
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

        {/* Contact Link - jetzt rechtsbündig */}
        <a
          href="mailto:kontakt@christophrenz.de"
          className="mix-blend-difference hover:underline text-white"
          aria-label="Kontakt per E-Mail (kontakt@christophrenz.de)"
          title="E-Mail an kontakt@christophrenz.de senden"
        >
          Contact me
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
