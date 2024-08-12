"use client";
import { Fragment } from "react";
import { Trash2 } from "lucide-react";
import { deleteService } from "@/actions/dataActions";

const renderServices = (data) => {
  return data.map((item) => (
    <Fragment key={item.id}>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.parentId ? item.parentId : "N/A"}</td>
        <td>{item.priority}</td>
        <td>
          <form action={deleteService.bind(null, item.id)}>
            <button>
              <Trash2 size={20} className="hover:text-error" />
            </button>
          </form>
        </td>
      </tr>

      {item.children &&
        item.children.length > 0 &&
        renderServices(item.children)}
    </Fragment>
  ));
};

function ServiceTable({ data }) {
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
      <tbody>{renderServices(data)}</tbody>
    </table>
  );
}

export default ServiceTable;
