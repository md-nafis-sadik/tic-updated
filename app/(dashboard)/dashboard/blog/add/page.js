import BlogForm from "@/components/dashboard_components/BlogForm";
import { getBlogCategory } from "@/actions/dataActions";
async function BlogAddPage() {
  const blogCategories = await getBlogCategory();

  return (
    <div className=" px-8 space-y-8">
      <div className="flex justify-between">
        <h1 className="text-2xl">Add Post</h1>
      </div>

      <BlogForm data={blogCategories} />
    </div>
  );
}

export default BlogAddPage;
