import React, { useState, useEffect } from "react";

import Logo from "../assets/img/logo.svg";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Socials from "./Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <img src={Logo} alt="logo" />
        </a>

        {/* Nav */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Socials */}
        <div className="hidden lg:block">
          <Socials textColor='accent' bgColorText="white" />
        </div>

        {/* Navbar Mobile */}
        <div className="lg:hidden">
          <NavbarMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
