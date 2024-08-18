function IndustryCard({ icon: Icon, title }) {
  return (
    <div className=" bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 m-auto rounded-md relative group px-8 py-4 z-0 overflow-hidden flex flex-col justify-center items-center space-y-5 shadow-standard w-40 h-36">
      <div className="z-[-1] h-full w-[200%]  bg-gradient-to-br from-red-400 via-orange-400 to-yellow-400 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"></div>

      <div className="p-5 bg-white rounded-md group-hover:bg-white">
        <Icon size={24} />
      </div>
      <h3 className="  text-white">{title} </h3>
    </div>
  );
}

export default IndustryCard;
