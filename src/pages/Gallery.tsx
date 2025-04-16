
import { useState } from "react";
import { X } from "lucide-react";

// Gallery image data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1505562130589-9879683e72da?auto=format&fit=crop&q=80",
    category: "Equipment",
    title: "Industrial Pumping System"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504477271656-e0bbe9f6b493?auto=format&fit=crop&q=80",
    category: "Installation",
    title: "Conveyor System Setup"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1573548842355-73bb50e50323?auto=format&fit=crop&q=80",
    category: "Equipment",
    title: "Heavy Construction Machinery"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&q=80",
    category: "Mining",
    title: "Underground Mining Operations"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1573587790094-68ae0cf8fcfb?auto=format&fit=crop&q=80",
    category: "Equipment",
    title: "Excavation Equipment"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1536825211030-094de935f680?auto=format&fit=crop&q=80",
    category: "Operations",
    title: "Open Pit Mining"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80",
    category: "Facility",
    title: "Processing Plant"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1588462707351-97469bed0806?auto=format&fit=crop&q=80",
    category: "Equipment",
    title: "Hydraulic Systems"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1617781699596-3c9ada89711f?auto=format&fit=crop&q=80",
    category: "Maintenance",
    title: "Equipment Servicing"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1595079572308-2418198d4930?auto=format&fit=crop&q=80",
    category: "Components",
    title: "Polyurethane Parts"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80",
    category: "Installation",
    title: "Pump Installation"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1505466607503-0930dcd2b938?auto=format&fit=crop&q=80",
    category: "Site",
    title: "Mining Site Preparation"
  },
];

// Filter categories
const categories = [
  "All",
  "Equipment",
  "Installation",
  "Maintenance",
  "Mining",
  "Operations",
  "Components",
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    category: string;
  }>(null);

  // Filter images based on selected category
  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 py-16 sm:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-lg text-stone-300">
              Explore our equipment, installations, and operations in action.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-greenrock-600 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map(image => (
              <div 
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 w-full p-4">
                    <p className="text-greenrock-300 text-sm font-medium">
                      {image.category}
                    </p>
                    <h3 className="text-white text-lg font-bold">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show message if no results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-stone-500 text-lg">
                No images found in this category.
              </p>
            </div>
          )}
          
          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedImage(null)}>
              <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute -top-12 right-0 p-2 text-white hover:text-greenrock-300 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="bg-stone-900 p-4">
                  <p className="text-greenrock-400 text-sm font-medium">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-white text-xl font-bold">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
