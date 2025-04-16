
import { MapPin, Users, History, Building, Layers, Globe } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About Greenrock Minerals
            </h1>
            <p className="text-lg text-stone-300">
              A leading supplier of mining and industrial equipment in Central Africa with a focus on quality, reliability, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-stone-600 mb-4">
                Greenrock Minerals Limited was founded with a clear mission: to provide high-quality mining and industrial equipment to businesses operating in the challenging environments of the Democratic Republic of Congo and Zambia.
              </p>
              <p className="text-lg text-stone-600 mb-4">
                With our deep understanding of procurement, distribution, and servicing for mining and industrial clients, we've established ourselves as a trusted partner in the region's resource sector.
              </p>
              <p className="text-lg text-stone-600">
                Our team brings decades of combined experience and a commitment to excellence that ensures our clients receive the best equipment and support for their operations.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1588462707351-97469bed0806?auto=format&fit=crop&q=80" 
                  alt="Mining equipment" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80" 
                  alt="Industrial facility" 
                  className="rounded-lg shadow-md mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1536825211030-094de935f680?auto=format&fit=crop&q=80" 
                  alt="Mine site" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573587790094-68ae0cf8fcfb?auto=format&fit=crop&q=80" 
                  alt="Mining equipment" 
                  className="rounded-lg shadow-md mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values and Approach */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Our Values & Approach
            </h2>
            <p className="text-lg text-stone-600">
              At Greenrock Minerals, we're guided by a set of core principles that define how we do business and serve our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-8 w-8 text-greenrock-600" />,
                title: "Quality First",
                description: "We partner with the world's leading manufacturers to provide only the highest quality equipment that can withstand the demanding conditions of mining operations."
              },
              {
                icon: <Users className="h-8 w-8 text-greenrock-600" />,
                title: "Client-Focused",
                description: "Every solution we provide is tailored to our clients' specific needs, ensuring they get exactly what their operation requires to maximize productivity."
              },
              {
                icon: <Globe className="h-8 w-8 text-greenrock-600" />,
                title: "Local Expertise",
                description: "Our team's deep understanding of local conditions and requirements allows us to provide solutions that are perfectly suited to the Central African context."
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-stone-100">
                <div className="inline-flex items-center justify-center p-3 bg-greenrock-50 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Our Operational Footprint
            </h2>
            <p className="text-lg text-stone-600">
              Strategically located to serve the mining and industrial sectors throughout the Copperbelt region.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start mb-4">
                <div className="inline-flex items-center justify-center p-3 bg-greenrock-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-greenrock-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-1">Kitwe, Zambia</h3>
                  <p className="text-stone-500">Main Distribution Center</p>
                </div>
              </div>
              <p className="text-stone-600 mb-4">
                Our Zambian headquarters provides comprehensive equipment supply and servicing for the entire Copperbelt region, with a fully-stocked warehouse and technical workshop facilities.
              </p>
              <ul className="text-stone-600">
                <li className="mb-2">• Equipment sales and distribution</li>
                <li className="mb-2">• Technical services and repairs</li>
                <li className="mb-2">• Spare parts inventory</li>
                <li>• Technical training facilities</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100 hover:shadow-lg transition-shadow">
              <div className="flex gap-4 items-start mb-4">
                <div className="inline-flex items-center justify-center p-3 bg-greenrock-50 rounded-lg">
                  <MapPin className="h-6 w-6 text-greenrock-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-1">Lubumbashi, DRC</h3>
                  <p className="text-stone-500">Regional Operations Hub</p>
                </div>
              </div>
              <p className="text-stone-600 mb-4">
                Our DRC facility serves the growing mining sector in the southeastern region, offering equipment solutions and technical support tailored to local requirements.
              </p>
              <ul className="text-stone-600">
                <li className="mb-2">• Equipment import and distribution</li>
                <li className="mb-2">• On-site technical services</li>
                <li className="mb-2">• Maintenance and repair services</li>
                <li>• Local client support team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-stone-600">
              Meet the experienced team guiding Greenrock Minerals to deliver excellence in mining and industrial equipment supply.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Mwamba",
                position: "Managing Director",
                bio: "With over 20 years in mining equipment distribution across Central Africa, Alex leads our strategic vision and operations."
              },
              {
                name: "Sarah Musonda",
                position: "Technical Director",
                bio: "A mechanical engineer with extensive experience in industrial equipment maintenance and optimization for mining applications."
              },
              {
                name: "David Kabwe",
                position: "Operations Manager",
                bio: "Specializes in supply chain optimization and distribution logistics throughout the Copperbelt region."
              }
            ].map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-stone-100">
                <div className="h-48 bg-stone-200 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-stone-400" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{person.name}</h3>
                <p className="text-greenrock-600 font-medium mb-3">{person.position}</p>
                <p className="text-stone-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
