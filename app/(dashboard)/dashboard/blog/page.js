import { getBlogPost } from "@/actions/dataActions";
import Link from "next/link";
import BlogPostTable from "@/components/dashboard_components/BlogPostTable";
async function BlogPage() {
  const posts = await getBlogPost();

  return (
    <main>
      <div className="header-section flex gap-8 items-center">
        <h1 className="text-2xl font-bold ">Blog Posts</h1>

        <Link className="btn btn-sm btn-info " href="./blog/add">
          Add Post
        </Link>
      </div>

      <div className="overflow-x-auto mt-16 rounded-md p-5 shadow-standard">
        <BlogPostTable data={posts} />
      </div>
    </main>
  );
}

export default BlogPage;
