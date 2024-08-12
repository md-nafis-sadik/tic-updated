import { getService } from "@/actions/dataActions";
import ServiceForm from "@/components/dashboard_components/ServiceForm";

async function ServiceAddPage() {
  const services = await getService();

  return (
    <div className="space-y-20">
      <h1 className="text-3xl font-bold">Add Service</h1>

      <div className="w-2/3">
        <ServiceForm data={services} />
      </div>
    </div>
  );
}

export default ServiceAddPage;
