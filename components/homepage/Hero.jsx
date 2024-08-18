import Link from "next/link";
import Image from "next/legacy/image";

function Hero() {
  return (
    <section
      className="py-36 md:h-screen h-auto items-center flex relative bg-hero-bg bg-bottom bg-cover"
      id="home"
    >
      <div className="absolute inset-0 -z-1 bg-gradient-to-b from-orange-600/50 dark:from-orange-600/40 via-yellow-600/10 dark:via-orange-600/20 to-transparent"></div>
      <div className="container mx-auto md:px-0 relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-14">
          <div className="lg:col-span-7 md:col-span-6 mt-5 md:mt-0 font-balance">
            <h1 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">
              Best{" "}
              <span className="font-semibold text-orange-500 ">
                Software Development
              </span>{" "}
              Company to Architect The Dream For{" "}
              <span className=" font-semibold text-orange-500">
                Next Generation
              </span>
            </h1>
            <p className="text-slate-600 dark:text-white/70 mb-0 max-w-2xl text-lg">
              Tic Limited. has a global reputation for up to scratch customer
              experience which marks us as one of the best software development
              companies in the world.
            </p>
          </div>
          <div className="lg:col-span-5 md:col-span-6">
            <div className="relative">
              <div className="relative flex justify-end">
                <Image
                  src="/images/hero/01.jpg"
                  width={400}
                  height={400}
                  className="rounded-xl shadow dark:shadow-gray-700"
                  alt=""
                />
                <div className="absolute top-0 translate-y-3/4 start-0 text-center">
                  <Link
                    href="#!"
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link>
                </div>
              </div>
              <div className="absolute md:-start-5 start-0 -bottom-16">
                <Image
                  src="/images/hero/02.jpg"
                  width={280}
                  height={280}
                  className="border-8 border-white dark:border-slate-900 rounded-xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
