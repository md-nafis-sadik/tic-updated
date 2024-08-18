import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SolutionCard from "./SolutionCard";

function SolutionTab({ businessItems, blockchainItems, serviceList }) {
  return (
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
        <div className="h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-5/6 mx-auto">
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
        <div className=" h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-5/6 mx-auto">
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
        <div className="h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-5/6 mx-auto">
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
        <div className="h-full py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-5/6 mx-auto">
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
  );
}

export default SolutionTab;
