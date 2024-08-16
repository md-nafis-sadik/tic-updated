import Image from "next/legacy/image";
import Link from "next/link";
import aboutImg from "@/public/images/about/about.jpg";

function AboutSection() {
  return (
    <>
      <section className="relative md:py-24 py-16  overflow-hidden" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={aboutImg}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                  Who We Are ?
                </h6>
                <h3 className="text-4xl font-bold">
                  We provide{" "}
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
                    Best IT Solution
                  </span>{" "}
                  in town
                </h3>

                <p className="text-slate-500 max-w-2xl  mt-5">
                  Tech IT Center provides professional, quality qualifications
                  and better skills in digital marketing, graphic design, and
                  web development. Our experienced team of experts provides
                  tailored solutions to help our clients meet their business
                  objectives.
                </p>

                <div className="relative mt-10">
                  <Link
                    href="/portfolio"
                    className="py-2 px-3 btn bg-orange-500 hover:bg-gray-800  text-white rounded-md"
                  >
                    View Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
    </>
  );
}

export default AboutSection;
