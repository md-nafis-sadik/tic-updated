"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function Testimonial() {
  const reviewList = [
    {
      id: "1",
      profile: "/images/client/01.jpg",
      name: "Calvin Carlo",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "2",
      profile: "/images/client/02.jpg",
      name: "Christa Smith",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "3",
      profile: "/images/client/03.jpg",
      name: "Jemina CLone",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
    {
      id: "4",
      profile: "/images/client/04.jpg",
      name: "Smith Vodka",
      designation: "Manager",
      description:
        "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise.",
    },
  ];

  return (
    <section className="text-gray-700">
      <div className="container mx-auto flex flex-col items-center justify-center py-8 space-y-16">
        <div className=" px-5  flex flex-col justify-center items-center space-y-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
            Client&apos;s Review
          </h2>
          <p>
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered Tailwind CSS html page.
          </p>
        </div>

        {/* careusal start  */}

        <div className="p-5 w-3/4">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {reviewList.map((el, index) => (
              <SwiperSlide key={index} className="p-3">
                <div className="flex justify-between items-center p-3 shadow-standard rounded-md">
                  <div className="w-34 h-24 lg:w-68 lg:h-auto lg:rounded-none rounded-full mx-auto">
                    <Image
                      src={el.profile}
                      alt=""
                      width={384}
                      height={400}
                      layout="responsive"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="pt-6 lg:pl-6 text-center lg:text-left space-y-4">
                    <p className="text-base text-slate-900">{el.description}</p>
                    <div>
                      <span className="text-orange-600 block mb-1">
                        {el.name}
                      </span>
                      <span className="text-slate-400 text-sm dark:text-white opacity-60 block">
                        {el.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
