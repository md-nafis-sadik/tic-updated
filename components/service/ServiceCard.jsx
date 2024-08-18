import serviceCardImg from "@/public/images/service/servicecard.jpg";
import Image from "next/legacy/image";
import Link from "next/link";

function ServiceCard({ title }) {
  return (
    <div className="text-center relative group">
      <div className="bg-white border-8 border-white pb-5 shadow-md space-y-3 rounded-md overflow-hidden">
        <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <p className="text-white"></p>
        </div>
        <Image
          src={serviceCardImg}
          alt="service card image"
          width={500}
          height={200}
        />
        <h1 className="font-semibold text-xl">{title}</h1>
      </div>
    </div>
  );
}

export default ServiceCard;
