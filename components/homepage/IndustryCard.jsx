function IndustryCard({ icon: Icon, title }) {
  return (
    <div className=" bg-white m-auto rounded-md relative group px-8 py-4 z-0 overflow-hidden flex flex-col justify-center items-center space-y-5 shadow-sm">
      <div className="z-[-1] h-full w-[200%]  bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[300%] duration-500 origin-bottom-right"></div>

      <div className="p-5 bg-orange-100 rounded-md group-hover:bg-white">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold group-hover:text-white">{title} </h3>
    </div>
  );
}

export default IndustryCard;
