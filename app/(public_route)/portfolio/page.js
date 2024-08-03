import PageHeader from "@/components/common/PageHeader";
import Image from "next/image";
import Link from "next/link";
import CartegoryCard from "@/components/common/CartegoryCard";
import { getParentCategories } from "@/utilities/dataService";
async function PortfolioPage() {
  const projectCategory = await getParentCategories();
  return (
    <>
      <PageHeader title="Portfolio" />
      <main className="bg-gray-100 py-16">
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
            {projectCategory.map((category) => (
              <CartegoryCard
                key={category.id}
                title={category.name}
                img={category.imgUrl}
                link={category.slug}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default PortfolioPage;
