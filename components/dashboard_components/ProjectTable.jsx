import { Trash2 } from "lucide-react";
import { deleteProjects } from "@/actions/dataActions";
import Image from "next/image";

function ProjectTable({ data }) {
  return (
    <table className="table table-zebra">
      {/* head */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project) => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={100}
                  height={70}
                />
              ) : (
                "N/A"
              )}
            </td>
            <td>{project.title}</td>
            <td>{project.categoryId ? project.categoryId : "N/A"}</td>

            <td>
              <form action={deleteProjects.bind(null, project.id)}>
                <button>
                  <Trash2 size={20} className="hover:text-error" />
                </button>
              </form>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectTable;
