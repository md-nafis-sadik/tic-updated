function HorizontalCard({ icon, title, subTitle }) {
  return (
    <li className="flex items-center gap-8 py-5 px-2 border-1 rounded-lg bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-lg transition-all ease-linear duration-100 ">
      <div className="flex-shrink-0 bg-orange-500 rounded-full flex items-center justify-center w-16 h-16 text-white">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="font-semibold text-md leading-8">{title}</h4>
        <p className="text-sm font-medium">{subTitle}</p>
      </div>
    </li>
  );
}

export default HorizontalCard;
