import Image from "next/image";
import Link from "next/link";

const FALLBACK_IMAGE = "/images/fallback-image.png";
function ProjectCard({ data }) {
  return (
    <div className="rounded-lg flex flex-col overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-8 border-white group w-full animate-spinnergrow ">
      <div className="image h-52 overflow-hidden relative group/image hover:scale-110 ease-in duration-150">
        <Image
          src={data.imageUrl ? data.imageUrl : FALLBACK_IMAGE}
          alt="fallback Image"
          layout="fill"
        />

        <div className="bg-black absolute top-0 left-0 w-full h-full opacity-0 group-hover/image:opacity-50"></div>

        <div className="image-show-icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hidden group-hover/image:block">
          <div>
            <Image
              src={data.imageUrl ? data.imageUrl : FALLBACK_IMAGE}
              alt="fallback Image"
              layout="fill"
            />
          </div>
        </div>
      </div>

      <div className="projectHeading pt-5">
        <h1 className="text-center text-3xl font-semibold text-gray-700">
          {data.title}
        </h1>
      </div>

      <div className="card-button p-5 grid grid-cols-2 gap-8">
        <Link href="#" className="btn btn-sm">
          Live Demo
        </Link>
        <Link href="#" className="btn btn-sm">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
