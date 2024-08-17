import { PencilOff } from "lucide-react";

function Overview() {
  return (
    <section className="text-gray-700 body-font bg-transparent bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-24">
        <div className=" px-5  flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
            Empowering Businesses Globally
          </h2>
          <p className="max-w-prose mt-6 mb-12 text-lg leading-relaxed text-center">
            Our company is trusted by organizations worldwide to boost
            productivity, streamline operations, and enhance customer
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 w-full">
          <div className="bg-white flex flex-col rounded-md justify-center items-center p-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <PencilOff size={30} className="text-orange-500" />
            <h3 className="text-3xl font-bold pt-3">50+</h3>
            <p>Projects</p>
          </div>
          <div className="bg-white flex flex-col rounded-md justify-center items-center p-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <PencilOff size={30} className="text-orange-500" />
            <h3 className="text-3xl font-bold pt-3">40+</h3>
            <p>Products</p>
          </div>
          <div className="bg-white flex flex-col rounded-md justify-center items-center p-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <PencilOff size={30} className="text-orange-500" />
            <h3 className="text-3xl font-bold pt-3">100+</h3>
            <p>Experts</p>
          </div>
          <div className="bg-white flex flex-col rounded-md justify-center items-center p-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <PencilOff size={30} className="text-orange-500" />
            <h3 className="text-3xl font-bold pt-3">100+</h3>
            <p>Countries</p>
          </div>
          <div className="bg-white flex flex-col rounded-md justify-center items-center p-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <PencilOff size={30} className="text-orange-500" />
            <h3 className="text-3xl font-bold pt-3">500+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="bg-white flex flex-col rounded-md justify-center items-center p-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <PencilOff size={30} className="text-orange-500" />
            <h3 className="text-3xl font-bold pt-3">10+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
