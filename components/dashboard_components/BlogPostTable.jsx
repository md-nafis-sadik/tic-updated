import Image from "next/image";
import { Trash2 } from "lucide-react";
import { deleteBlogPost } from "@/actions/dataActions";

function BlogPostTable({ data }) {
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
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={30}
                />
              ) : (
                "N/A"
              )}
            </td>
            <td>{item.title}</td>
            <td>{item.categoryId ? item.categoryId : "N/A"}</td>

            <td>
              <form action={deleteBlogPost.bind(null, item.id)}>
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

export default BlogPostTable;
