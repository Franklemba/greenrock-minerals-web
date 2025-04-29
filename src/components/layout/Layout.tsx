
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import SEO from "@/components/SEO";

export default function Layout() {
  const location = useLocation();
  
  // Set default SEO values based on current route
  const getSeoProps = () => {
    switch(location.pathname) {
      case '/':
        return {
          title: "Greenrock Minerals Limited | Mining & Industrial Equipment Supplier",
          description: "Central Africa's trusted supplier of mining, industrial, and construction equipment with operations in Zambia and DRC.",
          keywords: "mining equipment, industrial pumps, construction machinery, Zambia, DRC"
        };
      case '/about':
        return {
          title: "About Us | Greenrock Minerals Limited",
          description: "Learn about Greenrock Minerals' history, values, and operational footprint in Central Africa's mining industry.",
          keywords: "mining supplier, industrial equipment, Kitwe, Lubumbashi, mining industry"
        };
      case '/products':
        return {
          title: "Products & Services | Greenrock Minerals Limited",
          description: "Explore our range of mining equipment, industrial pumps, construction machinery, and specialized services.",
          keywords: "mining pumps, hydraulic systems, polyurethane components, acid-proofing"
        };
      case '/gallery':
        return {
          title: "Gallery | Greenrock Minerals Limited",
          description: "View our mining equipment, industrial installations, and on-site operations in Zambia and DRC.",
          keywords: "mining equipment gallery, industrial pumps images, construction projects"
        };
      case '/downloads':
        return {
          title: "Downloads | Greenrock Minerals Limited",
          description: "Download product catalogues, technical datasheets, and service procedures for mining and industrial equipment.",
          keywords: "mining equipment catalogues, technical datasheets, material test certificates"
        };
      case '/contact':
        return {
          title: "Contact Us | Greenrock Minerals Limited",
          description: "Get in touch with Greenrock Minerals for mining and industrial equipment solutions in Zambia and DRC.",
          keywords: "mining equipment supplier contact, industrial equipment Zambia, DRC"
        };
      default:
        return {
          title: "Greenrock Minerals Limited",
          description: "Trusted supplier of mining, industrial, and construction equipment across Zambia and the Democratic Republic of Congo."
        };
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEO {...getSeoProps()} />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="260966555566" />
    </div>
  );
}
