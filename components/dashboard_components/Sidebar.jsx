"use client";

import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import {
  LayoutDashboard,
  ArrowLeft,
  UserCog,
  Settings,
  ChevronDown,
} from "lucide-react";
import useStore from "@/stores/useStore";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useStore();
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment); // Split and filter out empty segments
  const lastSegment = segments[segments.length - 1];

  const trigger = useRef(null);
  const sidebar = useRef(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const handleToggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(sidebar);
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = (event) => {
      const { target } = event;
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [setSidebarOpen, sidebar, sidebarOpen, trigger]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event) => {
      const { key } = event;
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [setSidebarOpen, sidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-20 flex h-screen w-72 flex-col overflow-y-hidden bg-neutral text-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <Link href="/dashboard">
          <Image
            width={186}
            height={32}
            src={"/images/logo/logo.png"}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden text-white bg-boxdark rounded-full p-2"
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={pathname === pathname.includes("dashboard")}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard"
                        className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          lastSegment === "dashboard" &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                      >
                        <LayoutDashboard size={18} />
                        Dashboard
                      </Link>
                    </>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <Link
                  href="/dashboard/profile"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <UserCog size={18} />
                  Profile
                </Link>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Services --> */}
              <li>
                <Link
                  href="/dashboard/services"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("services") &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <UserCog size={18} />
                  Services
                </Link>
              </li>
              {/* <!-- Services --> */}

              {/* <!-- Portfolio --> */}
              <SidebarLinkGroup
                activeCondition={pathname === pathname.includes("portfolio")}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard/portfolio"
                        className={`group relative flex items-center  rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname.includes("portfolio") &&
                          "bg-graydark dark:bg-meta-4"
                        } justify-between`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <Settings size={18} />
                          Portfolio
                        </div>

                        <ChevronDown />
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5 mt-4 flex flex-col gap-3 pl-6">
                          <li>
                            <Link
                              href="/dashboard/portfolio/category"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/dashboard/portfolio/category" &&
                                "text-white"
                              }`}
                            >
                              Category
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/dashboard/portfolio/projects"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/dashboard/portfolio/projects" &&
                                "text-white"
                              }`}
                            >
                              Projects
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/dashboard/portfolio/projects/add"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname ===
                                  "/dashboard/portfolio/projects/add" &&
                                "text-white"
                              }`}
                            >
                              Add Projects
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Portfolio End --> */}

              {/* Blog Menu Start  */}

              <SidebarLinkGroup
                activeCondition={pathname === pathname.includes("blog")}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard/blog"
                        className={`group relative flex items-center  rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname.includes("blog") &&
                          "bg-graydark dark:bg-meta-4"
                        } justify-between`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <Settings size={18} />
                          Blog
                        </div>

                        <ChevronDown />
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5 mt-4 flex flex-col gap-3 pl-6">
                          <li>
                            <Link
                              href="/dashboard/blog"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/dashboard/blog" && "text-white"
                              }`}
                            >
                              Posts
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dashboard/blog/add"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/dashboard/blog/add" &&
                                "text-white"
                              }`}
                            >
                              Add Post
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dashboard/blog/categories"
                              className={`group relative flex items-center gap-2 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/dashboard/blog/categories" &&
                                "text-white"
                              }`}
                            >
                              Categories
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </>
                  );
                }}
              </SidebarLinkGroup>

              {/* Blog Menu End  */}

              <li>
                <Link
                  href="/dashboard/team"
                  className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes("team") && "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <UserCog size={18} />
                  Team
                </Link>
              </li>

              {/* <!-- Menu Item Settings --> */}
              <SidebarLinkGroup
                activeCondition={pathname === pathname.includes("settings")}
              >
                {(handleClick, open) => {
                  return (
                    <>
                      <Link
                        href="/dashboard/settings"
                        className={`group relative flex items-center  rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          pathname.includes("settings") &&
                          "bg-graydark dark:bg-meta-4"
                        } justify-between`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <Settings size={18} />
                          Settings
                        </div>

                        <ChevronDown />
                      </Link>

                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/dashboard/settings/menu"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/dashboard/settings/menu" &&
                                "text-white"
                              }`}
                            >
                              Menu
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </>
                  );
                }}
              </SidebarLinkGroup>

              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
}

export default Sidebar;
