import { Trash2 } from "lucide-react";
import { deleteCategory } from "@/actions/dataActions";
import { Fragment } from "react";

const renderCategoryItems = (data) => {
  return data.map((category) => (
    <Fragment key={category.id}>
      <tr key={category.id}>
        <th>{category.id}</th>
        <td>{category.name}</td>
        <td>{category.parentId ? category.parentId : "N/A"}</td>
        <td>{category.priority ? category.priority : "N/A"}</td>
        <td>
          <form action={deleteCategory.bind(null, category.id)}>
            <button>
              <Trash2 size={20} className="hover:text-error" />
            </button>
          </form>
        </td>
      </tr>
      {category.subcategories &&
        category.subcategories.length > 0 &&
        renderCategoryItems(category.subcategories)}
    </Fragment>
  ));
};
function CategoryTable({ data }) {
  return (
    <table className="table table-zebra">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Parent</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderCategoryItems(data)}</tbody>
    </table>
  );
}

export default CategoryTable;
