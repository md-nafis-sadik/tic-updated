import { getMenuItems } from "@/actions/dataActions";
import Link from "next/link";
import MenuTable from "@/components/dashboard_components/MenuTable";

async function MenuPage() {
  const menu = await getMenuItems();
  return (
    <main>
      <div className="flex items-center gap-14 mb-20">
        <h1 className="text-3xl font-bold">Menu</h1>
        <Link
          href="./menu/add"
          className="bg-info rounded-md px-5 py-1 text-sm"
        >
          Add
        </Link>
      </div>
      <MenuTable data={menu} />
    </main>
  );
}

export default MenuPage;
