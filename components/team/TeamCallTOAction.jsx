import Image from "next/image";
import img1 from "@/public/images/client/01.jpg";
import img2 from "@/public/images/client/02.jpg";
import img3 from "@/public/images/client/03.jpg";
import img4 from "@/public/images/client/04.jpg";
import Link from "next/link";

function TeamCallTOAction() {
  return (
    <div className="relative py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-orange-500 to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-orange-400 to-orange-300 dark:to-indigo-600"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            <Image
              loading="lazy"
              width="400"
              height="400"
              src={img1}
              alt="member photo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={img2}
              alt="member photo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={img3}
              alt="member photo"
              className="z-10 h-16 w-16 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={img4}
              alt="member photo"
              className="relative h-12 w-12 rounded-full object-cover"
            />
            <Image
              loading="lazy"
              width="200"
              height="200"
              src={img1}
              alt="member photo"
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>

          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Join Our Amazing Team
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              Be part of experts people around the country using latest
              technology in modern User Interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/career"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:bg-orange-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Career
                </span>
              </Link>
              <Link
                href="/about"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent before:bg-orange-500/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-orange-500 dark:text-white">
                  About Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCallTOAction;
