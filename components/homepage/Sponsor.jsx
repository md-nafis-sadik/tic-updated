"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";

const sponsorList = [
  {
    imgUrl: "/images/sponsor/01.png",
    imgAlt: "Tech IT Center",
  },
  {
    imgUrl: "/images/sponsor/eshoper.png",
    imgAlt: "Eshopper Ecommerce Website",
  },
  {
    imgUrl: "/images/sponsor/hostnate.png",
    imgAlt: "Hostnate | hosting company",
  },
  {
    imgUrl: "/images/sponsor/techitcenter.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: "/images/sponsor/eshoper.png",
    imgAlt: "Eshopper Ecommerce Website",
  },
  {
    imgUrl: "/images/sponsor/hostnate.png",
    imgAlt: "Hostnate | hosting company",
  },
  {
    imgUrl: "/images/sponsor/techitcenter.png",
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
];

function Sponsor() {
  return (
    <div className="p-5">
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
        }}
      >
        {sponsorList.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <Image
              src={sponsor.imgUrl}
              alt={sponsor.imgAlt}
              width={200} // Adjust the width as needed
              height={200} // Adjust the height as needed
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sponsor;
