"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";
import { logout } from "@/actions/authActions";

const FALLBACK_IMAGE = "/images/fallback-image.png";

function DropdownUser({ user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {user.name}
          </span>
        </span>

        <span className="h-12 w-12 border-2 rounded-full overflow-hidden relative">
          <Image
            fill
            src={user.image ? user.image : FALLBACK_IMAGE}
            alt="User"
          />
        </span>

        <ChevronDown />
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <User size={22} />
              My Profile
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <Settings size={22} />
              Account Settings
            </Link>
          </li>
        </ul>
        <form action={logout}>
          <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <LogOut size={22} />
            Log Out
          </button>
        </form>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
}

export default DropdownUser;
