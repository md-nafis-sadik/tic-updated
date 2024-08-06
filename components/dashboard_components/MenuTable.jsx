import { deleteMenuItem } from "@/actions/dataActions";
import { Trash2 } from "lucide-react";
import { Fragment } from "react";

const renderMenuItems = (menuItems) => {
  return (
    <>
      {menuItems.map((menuItem) => (
        <Fragment key={menuItem.id}>
          <tr>
            <td className="py-4 px-6">{menuItem.id}</td>
            <td className="py-4 px-6">{menuItem.name}</td>
            <td className="py-4 px-6">
              {menuItem.parentId ? menuItem.parentId : "N/A"}
            </td>
            <td className="py-4 px-6">
              {menuItem.priority ? menuItem.priority : "N/A"}
            </td>
            <td className="py-4 px-6">
              <form action={deleteMenuItem.bind(null, menuItem.id)}>
                <button>
                  <Trash2 size={20} className="hover:text-error" />
                </button>
              </form>
            </td>
          </tr>
          {menuItem.children &&
            menuItem.children.length > 0 &&
            renderMenuItems(menuItem.children)}
        </Fragment>
      ))}
    </>
  );
};
function MenuTable({ data = [] }) {
  return (
    <table className="table table-zebra">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Parent Category</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderMenuItems(data)}</tbody>
    </table>
  );
}

export default MenuTable;
