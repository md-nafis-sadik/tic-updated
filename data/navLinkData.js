const navLinkData = [
  { name: "Home", url: "/" },

  {
    name: "Services",
    url: "/services",
    children: [
      {
        name: "Domain",
        url: "/services/domain",
        children: [
          { name: "Domain Search", url: "#" },
          { name: ".BD Domain", url: "#" },
          { name: "Email Server", url: "/services/domain/emailServer" },
          { name: "DNS Service", url: "#" },
          {
            name: "Installation Services",
            url: "/services/domain/installationServices",
          },
          {
            name: "Website Maintainace",
            url: "/services/domain/websiteMaintanance",
          },
        ],
      },
      {
        name: "Hosting",
        url: "/services/hosting",
        children: [
          { name: "Shared Hosting", url: "#" },
          { name: "Premium Hosting", url: "#" },
          { name: "Reseller Hosting", url: "#" },
          { name: "WordPress Hosting", url: "#" },
          { name: "VPS Hosting", url: "#" },
        ],
      },
      {
        name: "Digital Marketing",
        url: "/services/digitalMarketing",
        children: [
          { name: "Search Engine Optimization", url: "#" },
          { name: "Social Media Marketing", url: "#" },
          { name: "Digital Advertising", url: "#" },
          { name: "Email Marketing", url: "#" },
          { name: "Local SEO Services", url: "#" },
        ],
      },
      {
        name: "Web Development",
        url: "/services/webDevelopment",
        children: [
          { name: "PHP Application", url: "#" },
          { name: "Mobile Application", url: "#" },
          { name: "E-commerce Application", url: "#" },
          { name: "Custom Application", url: "#" },
          { name: "ERP Application", url: "#" },
        ],
      },
      {
        name: "Web Design",
        url: "/services/webDesign",
        children: [
          { name: "HTML5 & CSS Design", url: "#" },
          { name: "E-Commerce Design", url: "#" },
          { name: "PSD to HTML Conversion", url: "#" },
          { name: "Website Redesign", url: "#" },
          { name: "Blog Development", url: "#" },
        ],
      },

      {
        name: "Graphic Design",
        url: "/services/graphicDesign",
        children: [
          { name: "Logo Design Services", url: "#" },
          { name: "Banner Design Services", url: "#" },
          { name: "Background Removal", url: "#" },
          { name: "UI/UX Design", url: "#" },
        ],
      },
      { name: "Woocommerce Solution", url: "#" },
      { name: "Software Development", url: "#" },
      { name: "App Development", url: "#" },
    ],
  },

  {
    name: "Packages",
    url: "/packages",
    children: [{ name: "Ecommerce Packages", url: "/packages/ecommerce" }],
  },

  { name: "Portfolio", url: "/portfolio" },
  {
    name: "Company",
    url: "#",
    children: [
      { name: "About Us", url: "/about" },
      { name: "Team", url: "/team" },
      { name: "Blog", url: "/blog" },
      { name: "Gallery", url: "/gallery" },
      { name: "Event", url: "/event" },
    ],
  },
];

export default navLinkData;
