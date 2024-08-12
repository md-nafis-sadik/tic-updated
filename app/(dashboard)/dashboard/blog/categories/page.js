import { getBlogCategory } from "@/actions/dataActions";
import Link from "next/link";
import BlogCategoryTable from "@/components/dashboard_components/BlogCategoryTable";
async function BlogCategoryPage() {
  const categories = await getBlogCategory();

  return (
    <main>
      <div className="header-section flex gap-8 items-center">
        <h1 className="text-2xl font-bold ">Blog Category</h1>
        {/* <Modal buttonText="Add Project">
      <CategoryForm data={data} />{" "}
    </Modal> */}
        <Link className="btn btn-sm btn-info " href="./categories/add">
          Add Category
        </Link>
      </div>

      <div className="overflow-x-auto mt-16 rounded-md p-5 shadow-standard">
        <BlogCategoryTable data={categories} />
      </div>
    </main>
  );
}

export default BlogCategoryPage;
