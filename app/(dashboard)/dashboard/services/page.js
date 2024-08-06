import Link from "next/link";
function ServicePage() {
  return (
    <div className="text-3xl font-bold flex items-center gap-20">
      <h1>Service Page</h1>
      <Link
        href="./services/add"
        className="bg-info rounded-md px-5 py-1 text-sm"
      >
        Add Service
      </Link>
    </div>
  );
}

export default ServicePage;
