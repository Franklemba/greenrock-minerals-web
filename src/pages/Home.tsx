
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Wrench, Award, Truck, CheckCircle, ArrowRight, FileText } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// Array of slider images with descriptions
const sliderImages = [
  {
    url: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80",
    title: "Mining Equipment",
    description: "Premium equipment for mining operations"
  },
  {
    url: "https://images.unsplash.com/photo-1566731855990-0dae4943368a?auto=format&fit=crop&q=80", 
    title: "Industrial Pumps",
    description: "High-performance pumps for demanding environments"
  },
  {
    url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80",
    title: "Construction Machinery",
    description: "Reliable machinery for construction projects"
  },
  {
    url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80",
    title: "Repair Services",
    description: "Expert maintenance and repair solutions"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return <>
      {/* Hero Image Slider */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {sliderImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh] w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-800/50 z-10"></div>
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 md:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{image.title}</h2>
                    <p className="text-lg sm:text-xl text-stone-200 max-w-2xl">{image.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 z-30" />
          <CarouselNext className="right-4 z-30" />
        </Carousel>
      </section>
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
              Welcome to Greenrock Minerals
            </h2>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Greenrock Minerals Limited is the first choice for mining and industrial clients in Central Africa. 
              We supply, repair, and maintain pumps, hydraulic systems, heavy machinery, and industrial equipment 
              tailored for demanding operations.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-greenrock-600 hover:bg-greenrock-700">
                <Link to="/products">Explore Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-stone-600">
              With decades of experience, we provide comprehensive solutions tailored to the mining and industrial sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-greenrock-50 rounded-lg mb-4">
                <Wrench className="h-8 w-8 text-greenrock-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Equipment Supply</h3>
              <p className="text-stone-600 mb-4">
                Premium mining and construction equipment from trusted manufacturers to maximize productivity and efficiency.
              </p>
              <Link to="/products" className="text-greenrock-600 hover:text-greenrock-700 font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-greenrock-50 rounded-lg mb-4">
                <Award className="h-8 w-8 text-greenrock-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Industrial Servicing</h3>
              <p className="text-stone-600 mb-4">
                Expert maintenance, repair, and technical services for all types of industrial and mining equipment.
              </p>
              <Link to="/products" className="text-greenrock-600 hover:text-greenrock-700 font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-greenrock-50 rounded-lg mb-4">
                <Truck className="h-8 w-8 text-greenrock-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Distribution Network</h3>
              <p className="text-stone-600 mb-4">
                Strategic locations in Kitwe and Lubumbashi ensuring fast delivery and service across DRC and Zambia.
              </p>
              <Link to="/about" className="text-greenrock-600 hover:text-greenrock-700 font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Why Choose Greenrock Minerals
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Our deep understanding of the mining industry in Central Africa allows us to provide solutions that are perfectly tailored to local conditions and requirements.
              </p>
              <ul className="space-y-4">
                {["Industry-leading equipment from trusted manufacturers", "Local presence with international standards", "Comprehensive after-sales support and maintenance", "Technical expertise and industry knowledge", "Fast delivery and reliable service"].map((item, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-greenrock-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>)}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-greenrock-600 hover:bg-greenrock-700">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 rounded-2xl -rotate-6 bg-green-400"></div>
              <img alt="Mining equipment" className="rounded-lg shadow-lg relative" src="/lovable-uploads/f7f86160-158a-4703-bffe-f48de89c5309.png" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-greenrock-600 py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Equipment?
          </h2>
          <p className="text-lg text-greenrock-100 mb-8 max-w-2xl mx-auto">
            Contact our team for expert advice on the best equipment and solutions for your mining or construction project.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white hover:bg-stone-100 text-greenrock-600">
            <Link to="/contact">Get a Quote Today</Link>
          </Button>
        </div>
      </section>
    </>;
}
