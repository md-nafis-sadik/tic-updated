import CategoriesTab from "@/components/CategoriesTab";
import PageHeader from "@/components/common/PageHeader";
import { getCategoriesBySlug } from "@/utilities/dataService";

async function PortfolioItemPage({ params }) {
  const { portfolioItems } = params;
  const category = await getCategoriesBySlug(portfolioItems);
  const subCategories = category.subcategories;
  const projects = subCategories[0].projects;

  return (
    <>
      <PageHeader title={category.name} />
      <main>
        <section className="container mx-auto py-14 ">
          <CategoriesTab data={subCategories} />
        </section>
      </main>
    </>
  );
}

export default PortfolioItemPage;
