"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";

function TechStack() {
  const stackList = [
    { imgUrl: "/images/tech-stack/android-icon.svg", imgAlt: "Android Icon" },
    { imgUrl: "/images/tech-stack/flutter-icon.svg", imgAlt: "flutter Icon" },
    { imgUrl: "/images/tech-stack/firebase-icon.svg", imgAlt: "firebase Icon" },
    { imgUrl: "/images/tech-stack/react-icon.svg", imgAlt: "react Icon" },
    { imgUrl: "/images/tech-stack/google-maps-icon.svg", imgAlt: "map Icon" },
    { imgUrl: "/images/tech-stack/ios-icon.svg", imgAlt: "ios Icon" },
    { imgUrl: "/images/tech-stack/laravel-icon.svg", imgAlt: "laravel Icon" },
    { imgUrl: "/images/tech-stack/php-icon.svg", imgAlt: "php Icon" },
  ];

  return (
    <section className="text-gray-700 body-font bg-transparent bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-24 space-y-16">
        <div className=" px-5  flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
            Technologies we are using
          </h2>
        </div>

        {/* slider start  */}

        <div className="p-5 w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
            }}
          >
            {stackList.map((sponsor, index) => (
              <SwiperSlide key={index}>
                <div className="border w-full bg-white flex justify-center">
                  <Image
                    src={sponsor.imgUrl}
                    alt={sponsor.imgAlt}
                    width={200} // Adjust the width as needed
                    height={200} // Adjust the height as needed
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
