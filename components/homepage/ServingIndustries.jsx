import IndustryCard from "./IndustryCard";
import { PencilOff } from "lucide-react";

function ServingIndustries() {
  return (
    <section className="text-gray-700 body-font bg-transparent bg-orange-50">
      <div className="container mx-auto flex flex-col items-center justify-center py-24">
        <div className=" px-5  flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
            Industry We Serve
          </h2>
          <p className="max-w-prose mt-6 mb-12 text-lg leading-relaxed text-center">
            Bridge Your Business with the Virtual World
          </p>
        </div>

        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-5 w-4/5 mx-auto">
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
          <IndustryCard title={"Healthcare"} icon={PencilOff} />
        </div>
      </div>
    </section>
  );
}

export default ServingIndustries;
