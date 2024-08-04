"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

function CategoriesTab({ data }) {
  const [selectTab, setSelectTab] = useState(0);
  const tabContentRef = useRef(null);

  const handleTabClick = (index) => {
    setSelectTab(index);
    // Scroll the tab content area into view
    if (tabContentRef.current) {
      tabContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-tab">
      <div className="tab-header flex">
        {data.map((item, index) => (
          <button
            key={index}
            role="tab"
            className={`py-2 px-5 shadow-standard rounded-sm ${
              selectTab === index ? "bg-orange-500 text-white" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div
        className="tab-content-area w-full border-2 mt-14 bg-white"
        ref={tabContentRef} // Attach the ref to the content area
      >
        <div className="project-container p-16 grid grid-cols-1 md:grid-cols-3 gap-14">
          {data.map((item) => (
            <ProjectCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesTab;
