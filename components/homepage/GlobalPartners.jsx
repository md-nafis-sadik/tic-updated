import Image from "next/image";
import Link from "next/link";

function GlobalPartners() {
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
    {
      imgUrl: "/images/sponsor/techitcenter.png",
      imgAlt: "sponsor rajibraj91 rajibraj",
    },
  ];

  return (
    <section className="text-gray-700 bg-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-24 space-y-16">
        <div className=" px-5  flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
            Our Global Partners
          </h2>
        </div>

        <div className="w-full flex justify-center pt-8">
          <Image
            src="/images/map/map.png"
            alt="map"
            width={1200}
            height={1000}
          />
        </div>

        <div className="flex flex-wrap justify-center mx-auto  w-5/6">
          {sponsorList.map((sponsor, index) => (
            <Link
              key={index}
              href="#"
              className="block w-1/2 py-5 text-center border lg:w-1/4"
            >
              <div>
                <Image
                  src={sponsor.imgUrl}
                  alt={sponsor.imgAlt}
                  width={150}
                  height={150}
                  className="block mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalPartners;
