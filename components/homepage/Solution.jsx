import { FaBlenderPhone } from "react-icons/fa6";
import SolutionTab from "./SolutionTab";

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
    <section className="py-16 overflow-hidden">
      <div className="container px-4  mx-auto flex flex-col justify-center items-center space-y-3">
        <h3 className="text-4xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-sky-500">
            Our Solutions
          </span>
        </h3>

        <p className="max-w-xl text-lg text-center">
          We provide a time-worthy business solution to every type of business.
          Find out your one and level up your success stairs.
        </p>

        <SolutionTab
          serviceList={serviceList}
          businessItems={businessItems}
          blockchainItems={blockchainItems}
        />
      </div>
    </section>
  );
}

export default Solution;
