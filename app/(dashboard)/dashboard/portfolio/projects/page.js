import Modal from "@/components/dashboard_components/Modal";
import ProjectTable from "@/components/dashboard_components/ProjectTable";
import { getProjects } from "@/utilities/dataService";
import Link from "next/link";
async function ProjectPage() {
  const data = await getProjects();
  return (
    <main>
      <div className="header-section flex gap-8 items-center">
        <h1 className="text-2xl font-bold ">Projects</h1>
        {/* <Modal buttonText="Add Project">
          <CategoryForm data={data} />{" "}
        </Modal> */}
        <Link className="btn btn-sm btn-info " href="./projects/add">
          Add Project
        </Link>
      </div>

      <div className="overflow-x-auto mt-16 rounded-md p-5 shadow-standard">
        <ProjectTable data={data} />
      </div>
    </main>
  );
}

export default ProjectPage;
