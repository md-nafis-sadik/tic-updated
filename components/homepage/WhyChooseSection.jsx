"use client";
import * as Unicons from "@iconscout/react-unicons";
import { PencilOff } from "lucide-react";
import Link from "next/link";

function WhyChooseSection() {
  const team = [
    {
      title: "Grow Your Business",
      Icon: PencilOff,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Drive More Sales",
      Icon: PencilOff,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Handled By Expert",
      Icon: PencilOff,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Discussion For Idea",
      Icon: PencilOff,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Increase Conversion",
      Icon: PencilOff,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Sales Growth Idea",
      Icon: PencilOff,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
  ];

  return (
    <section
      id="features"
      className="relative  py-16 bg-transparent bg-gradient-to-b from-white via-orange-50 to-white"
    >
      <div className="container lg mx-auto">
        <div className=" px-5  flex flex-col justify-center items-center">
          <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
            What We Do ?
          </h6>
          <h2 className="text-4xl font-bold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
              Perfect Solution
            </span>{" "}
            For Your Business
          </h2>
          <p className="max-w-prose mt-6 mb-12 text-lg leading-relaxed text-center">
            TIC IT Ltd. focuses on the exact requirements of the clients. We
            design and develop the best and most advanced software for all types
            of businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 w-5/6 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto">
          {team.map((item, key) => {
            const Icon = item.Icon;
            return (
              <div
                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
                key={key}
              >
                <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-orange-500 transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 mx-auto max-w-md">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-orange-500 transition-all duration-300 group-hover:bg-orange-400 text-white">
                    {<Icon size={35} />}
                  </span>
                  <div className="space-y-3 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                    <h1 className="font-semibold text-lg">{item.title}</h1>
                    {item.subtext && <p>{item.subtext}</p>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
