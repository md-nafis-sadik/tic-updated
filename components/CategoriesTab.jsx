"use client";
import Link from "next/link";
import { useState } from "react";
function CategoriesTab({ data }) {
  const [selectTab, setSelectTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectTab(index);
  };

  return (
    <div className="tab">
      <div className="tab-header flex">
        {data.map((item, index) => (
          <Link
            key={index}
            href="#"
            role="tab"
            className={` py-2 px-5 shadow-standard rounded-sm ${
              selectTab === index ? "bg-orange-500 text-white" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="tab-content">{console.log(data[selectTab].name)}</div>
    </div>
  );
}

export default CategoriesTab;
