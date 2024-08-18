import PageHeader from "@/components/common/PageHeader";
import ServiceCard from "@/components/service/ServiceCard";
import services from "@/data/serviceData";
import Link from "next/link";

function Page() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Best Software, Application, Digital & IT Solutions"
        description="we prioritize innovation, reliability, and client satisfaction. Let's
          accelerate together to your goal with our best software & IT service
          today."
      />
      <section className="">
        <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.keys(services).map((key, value) => (
            <Link key={key} href={`/services/${key}`}>
              <ServiceCard
                key={key}
                // url={service.url}
                title={services[key].title}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Page;
