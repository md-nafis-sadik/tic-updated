import Modal from "@/components/dashboard_components/Modal";
import CategoryForm from "@/components/dashboard_components/CategoryForm";
import { getParentCategories } from "@/utilities/dataService";
import CategoryTable from "@/components/dashboard_components/CategoryTable";
async function CategoryPage() {
  const data = await getParentCategories();

  return (
    <main>
      <div className="header-section flex gap-8 items-center">
        <h1 className="text-2xl font-bold ">Category</h1>
        <Modal buttonText="Add Category">
          <CategoryForm data={data} />{" "}
        </Modal>
      </div>

      <div className="overflow-x-auto mt-16 rounded-md p-5 shadow-standard">
        <CategoryTable data={data} />
      </div>
    </main>
  );
}

export default CategoryPage;
