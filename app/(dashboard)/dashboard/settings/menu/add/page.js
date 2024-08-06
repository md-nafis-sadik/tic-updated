import { getMenuItems } from "@/actions/dataActions";
import MenuForm from "@/components/dashboard_components/MenuForm";

async function AddMenuPage() {
  const menu = await getMenuItems();
  return (
    <main className="space-y-14">
      <h1 className="text-3xl font-bold">Add Menu</h1>
      <MenuForm data={menu} />
    </main>
  );
}

export default AddMenuPage;
