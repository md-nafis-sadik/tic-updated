"use client";
import { useState, Suspense } from "react";
import PageHeader from "@/components/common/PageHeader";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import blogData from "@/data/blogData";
import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}

function BlogContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const initialBlogsToShow = 6; // Number of initial blogs to show

  // State to track the number of blogs to display
  const [blogsToShow, setBlogsToShow] = useState(initialBlogsToShow);
  // State to track loading status
  const [loading, setLoading] = useState(false);
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState(
    category ? Number(category) : null
  );

  // Function to handle the "Load More" button click
  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setBlogsToShow((prevCount) => prevCount + 3);
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed
  };

  // Function to handle category filter
  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    setBlogsToShow(initialBlogsToShow);
  };

  // Function to reset category filter (show all posts)
  const handleShowAll = () => {
    setSelectedCategory(null);
    setBlogsToShow(initialBlogsToShow);
  };

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? blogData.posts.filter((post) => post.categoryId === selectedCategory)
    : blogData.posts;

  return (
    <>
      <PageHeader
        title="Latest News"
        topHeading="Blog"
        description="Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page."
      />
      <section className="relative md:py-16 py-16" id="blog">
        <div className="container mx-auto px-10">
          {/* Category buttons */}
          <div className="flex flex-wrap justify-center space-x-4 mb-8">
            {/* "All" button */}
            <button
              className={`px-4 py-2 rounded hover:bg-orange-500 hover:text-white ${
                selectedCategory === null
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={handleShowAll}
            >
              All
            </button>
            {/* Category buttons based on data */}
            {blogData.categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded hover:bg-orange-500 hover:text-white ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleCategoryFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          {/* Render blog posts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
            {filteredPosts.slice(0, blogsToShow).map((item, key) => (
              <BlogCard key={key} item={item} />
            ))}
          </div>
          {/* Render the "Load More" button */}
          {filteredPosts.length > initialBlogsToShow &&
            blogsToShow < filteredPosts.length && (
              <div className="flex justify-center mt-8">
                <button
                  className="font-semibold text-gray-700 py-2 px-4 rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:bg-slate-800 hover:text-white"
                  onClick={handleLoadMore}
                  disabled={loading} // Disable the button when loading
                >
                  {loading ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
        </div>
      </section>

      {/* Contact section */}
      <div className="flex flex-col justify-center items-center pb-24">
        <h1 className="text-2xl font-semibold">Have Question? Get in touch!</h1>
        <p className="text-slate-600  px-5 md:w-2/5 text-center mt-5">
          This is just a simple text made for this unique and awesome template,
          you can replace it with any text.
        </p>
        <Button asChild className="bg-orange-500 mt-8 text-white">
          <Link href="#">Contact Us</Link>
        </Button>
      </div>
    </>
  );
}
