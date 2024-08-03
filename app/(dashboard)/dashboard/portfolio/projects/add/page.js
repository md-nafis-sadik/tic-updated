import ProjectAdd from "@/components/dashboard_components/ProjectAdd";
import { getParentCategories } from "@/utilities/dataService";

async function ProjectAddPage() {
  const data = await getParentCategories();
  return (
    <div>
      <ProjectAdd data={data} />
    </div>
  );
}

export default ProjectAddPage;
