import Link from "next/link";
import ServiceTable from "@/components/dashboard_components/ServiceTable";
import { getService } from "@/actions/dataActions";
async function ServicePage() {
  const services = await getService();
  
  return (
    <main>
      <div className="text-3xl font-bold flex items-center gap-20">
        <h1>Service Page</h1>
        <Link
          href="./services/add"
          className="bg-info rounded-md px-5 py-1 text-sm"
        >
          Add Service
        </Link>
      </div>

      <div className="overflow-x-auto mt-16 rounded-md p-5 shadow-standard">
        <ServiceTable data={services} />
      </div>
    </main>
  );
}

export default ServicePage;
