"use client";
import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import TeamCallTOAction from "@/components/team/TeamCallTOAction";
import TeamCard from "@/components/team/TeamCard";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      imgSrc: "/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      imgSrc: "/jane-smith.jpg",
    },
    {
      name: "Michael Johnson",
      role: "Designer",
      imgSrc: "/michael-johnson.jpg",
    },
    {
      name: "Dyayne Johnson",
      role: "Designer",
      imgSrc: "/michael-johnson.jpg",
    },
    {
      name: "Ronanld Johnson",
      role: "Designer",
      imgSrc: "/michael-johnson.jpg",
    },
  ];

  // State to track the number of team members to display
  const [displayCount, setDisplayCount] = useState(4);
  // State to track loading status
  const [loading, setLoading] = useState(false);

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    // Set loading to true
    setLoading(true);
    // Simulate loading delay using setTimeout
    setTimeout(() => {
      // Increment the display count by 4
      setDisplayCount((prevCount) => prevCount + 4);
      // Set loading to false
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed
  };

  return (
    <>
      <PageHeader title="Teams" />

      <section className="bg-gray-50">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-center">
            Office Administration
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2 gap-8">
            {teamMembers.slice(0, displayCount).map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
          {/* Render the "Show More" button if there are more than 4 members */}
          {teamMembers.length > displayCount && (
            <div className="flex justify-center mt-8">
              <button
                className=" hover:bg-slate-800 font-semibold py-2 px-4 rounded hover:text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                onClick={handleShowMore}
                disabled={loading} // Disable the button when loading
              >
                {loading ? "Loading..." : "Show More"}
              </button>
            </div>
          )}
        </div>
        <TeamCallTOAction />
      </section>
    </>
  );
};

export default TeamPage;
