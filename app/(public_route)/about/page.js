// import PageHeader from "@/components/common/PageHeader";
import Image from "next/legacy/image";
import PageHeader from "@/components/common/PageHeader";

import aboutImg1 from "@/public/images/about/01.jpg";
import aboutImg2 from "@/public/images/about/02.jpg";

import HorizontalCard from "@/components/common/HorizontalCard";

import { FaUsersCog } from "react-icons/fa";

function AboutPage() {
  return (
    <section className="bg-slate-50">
      <PageHeader title="ABOUT OUR TECH IT CENTER" />

      <div className="container p-14">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="relative ">
            <Image
              src={aboutImg1}
              alt="about image 1"
              className="rounded-sm max-w-full border-8 border-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            />
            <Image
              src={aboutImg2}
              alt="about image 2"
              className=" hidden lg:block absolute bottom-0 right-0 transform shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl border-8 border-white"
            />
            <div className="absolute bg-orange-600 text-white text-center p-3 w-36 transform -translate-y-32 border-white border-8">
              <h1 className="font-semibold text-2xl ">5+</h1>
              <p>Years of Experience</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className=" leading-5 tracking-wider text-lg font-medium">
              ABOUT OUR TECH IT CENTER
            </h3>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500 text-3xl font-semibold">
              GOOD QUALIFICATION SERVICES AND BETTER SKILLS
            </h1>
            <p>
              Tech IT Center provides professional, quality qualifications and
              better skills in digital marketing, graphic design, and web
              development. Our experienced team of experts provides tailored
              solutions to help our clients meet their business objectives.
            </p>

            <div className="space-y-3">
              <HorizontalCard
                icon={<FaUsersCog size={30} />}
                title="Our Mission"
                subTitle="Our vision is to build an IT Based Human Resource to make Bangladesh Digital through solving unemployment Problem. Bangladesh will occupy the first place in freelancing sector in near future."
              />
              <HorizontalCard
                icon={<FaUsersCog size={30} />}
                title="Our Mission"
                subTitle="Our vision is to build an IT Based Human Resource to make Bangladesh Digital through solving unemployment Problem. Bangladesh will occupy the first place in freelancing sector in near future."
              />
              <HorizontalCard
                icon={<FaUsersCog size={30} />}
                title="Our Mission"
                subTitle="Our vision is to build an IT Based Human Resource to make Bangladesh Digital through solving unemployment Problem. Bangladesh will occupy the first place in freelancing sector in near future."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
