import { getBlogCategory } from "@/actions/dataActions";
import BlogCategoryForm from "../../../../../../components/dashboard_components/BlogCategoryForm";

async function BlogCategoryAddPage() {
  const categories = await getBlogCategory();

  return (
    <div className="space-y-20">
      <h1 className="text-3xl font-bold">Add Blog Category</h1>

      <div className="w-1/3">
        <BlogCategoryForm data={categories} />
      </div>
    </div>
  );
}

export default BlogCategoryAddPage;
