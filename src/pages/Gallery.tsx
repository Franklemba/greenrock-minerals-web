
import { useState } from "react";
import { X } from "lucide-react";

// Gallery image data
const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/PicturePump.png",
    category: "Equipment",
    title: "Industrial Pumping System"
  },
  {
    id: 2,
    src: "/lovable-uploads/PictureConveyor.png",
    category: "Installation",
    title: "Conveyor System Setup"
  },
  {
    id: 3,
    src: "/lovable-uploads/Picture06.png",
    category: "Equipment",
    title: "Heavy Construction Machinery"
  },
  {
    id: 4,
    src: "/lovable-uploads/Picture.png",
    category: "Mining",
    title: "Underground Mining Operations"
  },
  {
    id: 5,
    src: "/lovable-uploads/Picture07.png",
    category: "Equipment",
    title: "Excavation Equipment"
  },
  {
    id: 6,
    src: "/lovable-uploads/Picture07.png",
    category: "Operations",
    title: "Open Pit Mining"
  },
  {
    id: 7,
    src: "/lovable-uploads/PicturePipes.png",
    category: "Facility",
    title: "Processing Plant"
  },
  {
    id: 8,
    src: "/lovable-uploads/PictureHydraulics.png",
    category: "Equipment",
    title: "Hydraulic Systems"
  },
  {
    id: 9,
    src: "/lovable-uploads/PictureConstruction.png",
    category: "Maintenance",
    title: "Equipment Servicing"
  },
  {
    id: 10,
    src: "/lovable-uploads/PicturePoly.png",
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
      <section className="relative">
      
        <div className="relative h-[60vh] w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-800/50 z-10"></div>
                  <img 
                    src="/lovable-uploads/gallery.jpg" 
                    alt="Industrial Gallery" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4 md:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                    Gallery
                    </h2>
                    <p className="text-lg sm:text-xl text-stone-200 max-w-2xl">
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
