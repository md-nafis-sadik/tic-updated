"use client";
import { Fragment } from "react";
import { Trash2 } from "lucide-react";
import { deleteBlogCategory } from "@/actions/dataActions";
const renderCategoryItems = (data) => {
  return data.map((category) => (
    <Fragment key={category.id}>
      <tr>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td>{category.parentId ? category.parentId : "N/A"}</td>
        <td>{category.priority ? category.priority : "N/A"}</td>
        <td>
          <form action={deleteBlogCategory.bind(null, category.id)}>
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
function BlogCategoryTable({ data }) {
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

export default BlogCategoryTable;
