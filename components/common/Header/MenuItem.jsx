"use client";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function MenuItem() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex items-center">
      {/* For Desktop Menu  */}
      <ul className="hidden md:flex items-center">
        <NavLink />
      </ul>

      {/* For Mobile Menu  */}
      <div className="md:hidden ">
        {/* Show/Hide hamburger  */}
        <div className="z-50 flex items-center justify-center">
          {isMenuOpen ? (
            <IoMdClose
              size={30}
              className="text-orange-500"
              onClick={toggleMenu}
            />
          ) : (
            <RxHamburgerMenu
              size={30}
              className="text-orange-500"
              onClick={toggleMenu}
            />
          )}
        </div>
        {/* Show menu  */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white top-20">
            <ul className="flex flex-col ">
              <NavLink onLinkClick={handleLinkClick} />
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu End */}
    </div>
  );
}

export default MenuItem;
