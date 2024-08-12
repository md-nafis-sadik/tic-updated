"use client";
import * as Unicons from "@iconscout/react-unicons";
import Link from "next/link";

function WhyChooseSection() {
  const team = [
    {
      title: "Grow Your Business",
      Icon: Unicons.UilAdjustCircle,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Drive More Sales",
      Icon: Unicons.UilCircuit,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Handled By Expert",
      Icon: Unicons.UilFire,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Discussion For Idea",
      Icon: Unicons.UilShoppingBasket,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Increase Conversion",
      Icon: Unicons.UilFlower,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Sales Growth Idea",
      Icon: Unicons.UilFlipH,
      subtext:
        "The phrasal sequence of the is now so that many campaign and benefit",
    },
  ];

  return (
    <section id="features" className="relative  py-16">
      <div className="container lg mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
          <div>
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              What We Do ?
            </h6>

            <h3 className="text-3xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-sky-500">
                Perfect Solution
              </span>
              <br />
              For Your Business
            </h3>
          </div>

          <div>
            <p className="text-slate-400 dark:text-slate-300 max-w-xl">
              TIC IT Ltd. focuses on the exact requirements of the clients. We
              design and develop the best and most advanced software for all
              types of businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {team.map((item, key) => {
            const Icon = item.Icon;
            return (
              <div
                className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
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
