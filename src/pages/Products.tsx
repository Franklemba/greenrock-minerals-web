
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, CheckCircle } from "lucide-react";

export default function Products() {
  // Product categories data
  const categories = [
    {
      id: "pumps",
      title: "Pumps & Fluid Handling",
      description: "High-performance pumps for mining, dewatering, and industrial processes.",
      image: "/lovable-uploads/PicturePump.png",
      features: [
        "Submersible pumps for mine dewatering",
        "Slurry pumps for mineral processing",
        "High-pressure pumps for hydraulic systems",
        "Chemical dosing pumps",
        "Complete pumping stations"
      ]
    },
    {
      id: "polyurethane",
      title: "Polyurethane Components",
      description: "Custom polyurethane components designed for extreme wear resistance in mining applications.",
      image: "/lovable-uploads/PicturePoly.png",
      features: [
        "Screen panels and sieve bends",
        "Hydrocyclone liners",
        "Wear-resistant linings",
        "Impact pads and scrapers",
        "Custom molded parts"
      ]
    },
    {
      id: "conveyor",
      title: "Conveyor Systems",
      description: "Complete conveyor solutions for efficient material handling in mining and industrial applications.",
      image: "/lovable-uploads/PictureConveyor.png",
      features: [
        "Conveyor belts and components",
        "Idlers and pulleys",
        "Drive systems",
        "Transfer chutes",
        "Belt tracking and alignment systems"
      ]
    },
    {
      id: "hydraulic",
      title: "Hydraulic & Pneumatic Systems",
      description: "Power transmission solutions for heavy machinery and industrial applications.",
      image: "/lovable-uploads/PictureHydraulics.png",
      features: [
        "Hydraulic pumps and motors",
        "Cylinders and actuators",
        "Valves and control systems",
        "Hoses, fittings, and couplings",
        "Pneumatic tools and components"
      ]
    },
    {
      id: "construction",
      title: "Construction Machinery",
      description: "Heavy equipment for construction and mining operations.",
      image: "/lovable-uploads/PictureConstruction.png",
      features: [
        "Loaders and excavators",
        "Cranes and lifting equipment",
        "Compactors and rollers",
        "Concrete equipment",
        "Earthmoving machinery"
      ]
    },
    {
      id: "acid",
      title: "Acid-Proofing Services",
      description: "Specialized protective coatings and linings for harsh chemical environments.",
      image: "/lovable-uploads/PictureAcid.png",
      features: [
        "Acid-resistant coatings",
        "Chemical-resistant linings",
        "Tank and vessel protection",
        "Concrete protection systems",
        "Pipe and equipment coatings"
      ]
    },
    {
      id: "constructionService",
      title: "Construction Services",
      description: "Providing superior quality construction services to clients for over 5years.",
      image: "/lovable-uploads/PictureCivil.png" ,
      features: [
        "New Constructional Projects",
        "Renovations & Tenants Up-fits",
        "Road Construction",
        "Heavy Civil Construction",
        "Design-build and Design-bid-build"
      ]
    },
    {
      id: "hdpe",
      title: "HDPE pipes supply",
      description: "We supply high-quality HDPE pipes ideal for water, sewage, and industrial applications.",
      image: "/lovable-uploads/PicturePipes.jpg" ,
      features: [
        "Light-weight and Flexible",
        "Leak-Free Joints",
        "Environmentally Friendly",
        "UV and Weather Resistance",
        "Cost Effective"
      ]
    },
    {
      id: "millball",
      title: "Mill Ball supply",
      description: "We supply high-quality mill balls designed for grinding operations in mining and industrial processes.",
      image: "/lovable-uploads/PictureMillBall.jpg",
      features: [
        "Superior Wear Resistance",
        "Available in various sizes",
        "Customized Solutions",
        "Corrosion Resistance",
        "High Impact Toughness"
      ]
    }
  ];

  // Services data
  const services = [
    {
      title: "Installation & Commissioning",
      description: "Professional installation and commissioning of all equipment we supply to ensure optimal performance from day one."
    },
    {
      title: "Maintenance & Repair",
      description: "Scheduled maintenance programs and rapid response repair services to minimize downtime and extend equipment life."
    },
    {
      title: "Technical Consulting",
      description: "Expert advice on equipment selection, system design, and process optimization for mining and industrial applications."
    },
    {
      title: "Training",
      description: "Comprehensive training programs for operators and maintenance personnel to maximize equipment efficiency and safety."
    }
  ];

  const brandLogos = [
    "/lovable-uploads/logo01.jpg",
    "/lovable-uploads/logo02.jpg",
    "/lovable-uploads/logo03.jpg",
    "/lovable-uploads/logo04.png",
    "/lovable-uploads/logo05.png",
   "/lovable-uploads/logo01.jpg",
    "/lovable-uploads/logo02.jpg",
    "/lovable-uploads/logo03.jpg",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
      <div className="relative h-[60vh] w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-800/50 z-10"></div>
                  <img 
                    src="/lovable-uploads/galleryConstructionServ.jpg" 
                    alt="Industrial Pumps" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 md:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                    Products & Services
                    </h2>
                    <p className="text-lg sm:text-xl text-stone-200 max-w-2xl">
                    Comprehensive equipment solutions for mining, industrial, and construction applications.
                    </p>
                  </div>
        </div>

      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-stone-600">
              We offer a comprehensive selection of high-quality equipment specifically chosen for the demands of African mining and industrial environments.
            </p>
          </div>
          
          <div className="space-y-24">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-stone-600 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-greenrock-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-greenrock-600 hover:bg-greenrock-700">
                    <Link to="/contact" className="flex items-center">
                      Request Quote <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="absolute -inset-4 bg-greenrock-500/10 rounded-2xl rotate-3"></div>
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="rounded-lg shadow-lg relative w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-stone-600">
              We provide comprehensive support services to ensure your equipment performs at its best throughout its lifecycle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-greenrock-600 hover:bg-greenrock-700">
              <Link to="/contact">Contact Our Service Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-stone-600">
              We collaborate with world-leading manufacturers to bring you the highest quality equipment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
               {brandLogos.map((logo, index) => (
              <div key={index} className="h-14 bg-stone-100 rounded-lg flex items-center justify-center">
              <img src={logo} alt={`Brand ${index + 1}`} className="h-12" /> 
              {/* <div className="text-stone-400 font-bold">{logo}</div> */}
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-greenrock-600 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-greenrock-100 mb-8 max-w-2xl mx-auto">
            Our team can help you find the perfect equipment for your specific requirements.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white hover:bg-stone-100 text-greenrock-600">
            <Link to="/contact" className="flex items-center">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
