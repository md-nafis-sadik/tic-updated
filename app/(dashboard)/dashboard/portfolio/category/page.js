import Modal from "@/components/dashboard_components/Modal";
import ModalButton from "@/components/dashboard_components/ModalButton";
function CategoryPage() {
  return (
    <main>
      <div className="header-section flex gap-8">
        <h1 className="text-xl font-bold text-slate-700">Category</h1>
        <ModalButton />
      </div>

      <div className="overflow-x-auto mt-16 rounded-md p-5 shadow-standard">
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
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default CategoryPage;
