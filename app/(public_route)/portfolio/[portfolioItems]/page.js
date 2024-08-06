import CategoriesTab from "@/components/CategoriesTab";
import PageHeader from "@/components/common/PageHeader";
import { getCategoriesBySlug } from "@/utilities/dataService";

async function PortfolioItemPage({ params }) {
  const { portfolioItems } = params;
  const categories = await getCategoriesBySlug(portfolioItems);
  const subCategories = categories.subcategories;

  return (
    <>
      <PageHeader title={categories.name} />
      <main className="bg-white">
        <section className="container mx-auto ">
          <CategoriesTab data={subCategories} />
        </section>
      </main>
    </>
  );
}

export default PortfolioItemPage;
