"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import NavButton from "./NavButton";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-20 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto md:p-0 p-5 flex justify-between items-center ">
        <Logo />
        <MenuItem />
        <NavButton />
      </div>
    </nav>
  );
}

export default Header;
