
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Wrench, Award, Truck, CheckCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-stone-900 to-stone-800 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Leading Supplier of Mining & Industrial Equipment
            </h1>
            <p className="text-lg sm:text-xl text-stone-200 mb-8">
              Providing premium equipment, expert services, and reliable solutions for mining and construction industries in DRC and Zambia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-greenrock-600 hover:bg-greenrock-700">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/contact" className="flex items-center">
                  Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
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
                {[
                  "Industry-leading equipment from trusted manufacturers",
                  "Local presence with international standards",
                  "Comprehensive after-sales support and maintenance",
                  "Technical expertise and industry knowledge",
                  "Fast delivery and reliable service"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-greenrock-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-greenrock-600 hover:bg-greenrock-700">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -inset-4 bg-greenrock-500/10 rounded-2xl -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1505466607503-0930dcd2b938?auto=format&fit=crop&q=80" 
                alt="Mining equipment" 
                className="rounded-lg shadow-lg relative"
              />
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
    </>
  );
}
