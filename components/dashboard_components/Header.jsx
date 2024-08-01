"use client";
import Image from "next/image";
import Link from "next/link";
import DropdownUser from "./DropdownUser";
import { AlignJustify } from "lucide-react";
import useStore from "@/stores/useStore";

function Header({ user }) {
  const { sidebarOpen, setSidebarOpen } = useStore();
  const handleToggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="sticky top-0 z-10 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center  justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 relative h-16">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={handleToggleMenu}
            className="z-20 block rounded-sm border border-stroke bg-white p-2 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <AlignJustify />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={120}
              height={40}
              src={"/images/logo/logo.png"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7 absolute right-10 ">
          {/* <!-- User Area --> */}
          <DropdownUser user={user} />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
