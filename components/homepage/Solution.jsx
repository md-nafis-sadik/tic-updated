import { FaBlenderPhone } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SolutionCard from "./SolutionCard";

const serviceList = [
  { title: "Business", value: "business" },
  { title: "Blockchain", value: "blockchain" },
  { title: "E-Commerce", value: "ecommerce" },
  { title: "Hospitality", value: "hospitality" },
  { title: "Healthcare", value: "healthcare" },
];

const businessItems = [
  {
    icon: <FaBlenderPhone />,
    title: "ERP",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    icon: <FaBlenderPhone />,
    title: "HR Manager",
    description: "Human Resource Management System HR Software (HRMS)",
  },
  {
    icon: <FaBlenderPhone />,
    title: "Flight Booking Software",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    icon: <FaBlenderPhone />,
    title: "ERP",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    icon: <FaBlenderPhone />,
    title: "ERP",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    icon: <FaBlenderPhone />,
    title: "ERP",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
];

const blockchainItems = [
  {
    icon: <FaBlenderPhone />,
    title: "ERP",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    icon: <FaBlenderPhone />,
    title: "HR Manager",
    description: "Human Resource Management System HR Software (HRMS)",
  },
  {
    icon: <FaBlenderPhone />,
    title: "Flight Booking Software",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    icon: <FaBlenderPhone />,
    title: "ERP",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    icon: <FaBlenderPhone />,
    title: "ERP",
    description: "Business ERP Solution / Product / Shop / Company Management",
  },
];

function Solution() {
  return (
    <section className="pt-16 overflow-hidden">
      <div className="container px-4  mx-auto flex flex-col justify-center items-center space-y-3">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-orange-500">
          Our Solution
        </h2>

        <p className="max-w-xl text-lg text-center">
          We provide a time-worthy business solution to every type of business.
          Find out your one and level up your success stairs.
        </p>

        {/* Tab Section  */}

        <Tabs defaultValue="business" className=" w-full  flex flex-col pt-10">
          <TabsList className="h-full w-full gap-5 bg-transparent flex flex-wrap">
            {serviceList.map((service, index) => (
              <TabsTrigger
                key={index}
                value={service.value}
                className="flex flex-wrap px-6 py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-base rounded-md hover:shadow-xl hover:text-orange-500 data-[state=active]:bg-orange-500 data-[state=active]:text-white  data-[state=active]:shadow-xl"
              >
                {service.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="business">
            <div className="h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {businessItems.map((item, index) => (
                <SolutionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain" className="">
            <div className=" h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {blockchainItems.map((item, index) => (
                <SolutionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ecommerce" className="">
            <div className="h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {blockchainItems.map((item, index) => (
                <SolutionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hospitality" className="">
            <div className=" py-10 h-96 grid grid-cols-1 md:grid-cols-3 gap-10">
              {blockchainItems.map((item, index) => (
                <SolutionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Solution;
