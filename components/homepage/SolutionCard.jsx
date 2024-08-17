import Link from "next/link";

function SolutionCard({ icon, title, description }) {
  return (
    <Link href={"#"} className="animate-spinnergrow ">
      <div className="bg-white flex justify-between gap-x-10 items-center p-3 space-y-3 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  hover:-translate-y-5 transition-all ease-linear duration-300 hover:bg-orange-100 ">
        <div className="flex justify-center items-center bg-orange-500 p-3 text-white rounded-full">
          <div className="text-3xl">{icon}</div>
        </div>
        <div>
          <h3 className="font-semibold text-base ">{title}</h3>
          <p className="text-sm text-slate-700">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default SolutionCard;
