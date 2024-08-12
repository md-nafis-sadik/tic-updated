"use client";
import { useState } from "react";
import Link from "next/link";
import navLinkData from "@/data/navLinkData";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus } from "lucide-react";

function NavLink({ onLinkClick }) {
  return (
    <>
      {navLinkData.map((navLink, index) => (
        <NavItem key={index} navLink={navLink} />
      ))}
    </>
  );
}

function NavItem({ navLink }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuHoveredIndex, setSubMenuHoveredIndex] = useState(null);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  const handleSubMenuMouseEnter = (index) => {
    setSubMenuHoveredIndex(index);
  };

  const handleSubMenuMouseLeave = () => {
    setSubMenuHoveredIndex(null);
  };

  return (
    <li
      className="px-5 py-8 cursor-pointer group/subMenu"
      onMouseEnter={navLink.children ? handleMouseEnter : null}
      onMouseLeave={navLink.children ? handleMouseLeave : null}
    >
      <div className="flex justify-between gap-2 items-center font-semibold group-hover/subMenu:text-orange-500 hover:text-orange-500">
        <Link className="" href={navLink.url}>
          {navLink.name}
        </Link>
        {navLink.children &&
          navLink.children.length > 0 &&
          (isSubMenuOpen ? <Minus size={15} /> : <Plus size={15} />)}
      </div>
      {/* check existing submenu  */}
      {navLink.children && navLink.children.length > 0 && (
        <div
          className={`absolute bg-white  top-full rounded-xl ${
            isSubMenuOpen ? "block" : "hidden"
          } `}
        >
          <ul>
            {navLink.children.map((menu, index) => (
              <li
                key={index}
                className=" group/childMenu relative"
                onMouseEnter={() => handleSubMenuMouseEnter(index)}
                onMouseLeave={handleSubMenuMouseLeave}
              >
                <div className=" w-full px-5 py-2  flex justify-between items-center hover:bg-orange-500 hover:text-white">
                  <Link href={menu.url}>{menu.name}</Link>
                  {menu.children &&
                    menu.children.length > 0 &&
                    (subMenuHoveredIndex === index ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    ))}
                </div>
                <Separator />
                {/* SubMenu Child Item  */}
                <div
                  className={`absolute top-0 left-full w-56 shadow-md ${
                    isSubMenuOpen && subMenuHoveredIndex === index
                      ? "block"
                      : "hidden"
                  }`}
                >
                  <ul className="bg-white rounded-xl">
                    {menu.children &&
                      menu.children.map((childMenu, childIndex) => (
                        <li key={childIndex} className="text-black">
                          <div className=" w-full px-5 py-2 hover:bg-orange-500 hover:text-white">
                            <Link
                              href={childMenu.url}
                              className=" hover:text-white"
                            >
                              {childMenu.name}
                            </Link>
                          </div>
                          <Separator />
                        </li>
                      ))}
                  </ul>
                </div>
                {/* SubMenu Child Item end  */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default NavLink;
