import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Sparkles, Award, GraduationCap, Calendar } from "lucide-react";
import { getProjectsByMainCategory } from "../services/projectData";


// Category configuration
const categories = [
  { id: 'all', name: 'All', icon: Sparkles, color: 'var(--color-accent)' },
  { id: 'apex', name: 'Apex', icon: Award, color: 'var(--color-accent)' },
  { id: 'events', name: 'Events', icon: Calendar, color: 'var(--color-highlight)' },
  { id: 'academy', name: 'Academy', icon: GraduationCap, color: 'var(--color-secondary)' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedGallery) return;

      switch (e.key) {
        case "ArrowLeft":
          showPrevImage();
          break;
        case "ArrowRight":
          showNextImage();
          break;
        case "Escape":
          closeGallery();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedGallery, currentImageIndex]);

  const openGallery = async (gallery) => {
    setIsLoading(true);
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
    setTimeout(() => setIsLoading(false), 500);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const showPrevImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedGallery.images.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    if (!selectedGallery) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedGallery.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Filter galleries by category
  // Load and filter project data dynamically
  const [filteredGalleries, setFilteredGalleries] = useState([]);

  useEffect(() => {
    if (selectedCategory === "all") {
      const all = [
        ...getProjectsByMainCategory("Apex"),
        ...getProjectsByMainCategory("Academy"),
        ...getProjectsByMainCategory("Events"),
      ];
      setFilteredGalleries(all);
    } else {
      const data = getProjectsByMainCategory(
        selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
      );
      setFilteredGalleries(data);
    }
  }, [selectedCategory]);

  return (
    <section
      className="relative py-22 sm:py-16 lg:py-20 xl:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
          <div 
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border mb-4 sm:mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              color: "var(--color-accent)",
              borderColor: "var(--color-accent)",
              backgroundColor: "var(--overlay-accent-light)",
            }}
          >
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Our Work
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ 
              color: "var(--color-primary)",
              fontFamily: 'var(--font-heading)',
              lineHeight: '1.1'
            }}
          >
            Projects{" "}
            <span style={{ color: "var(--color-accent)" }}>
              Gallery
            </span>
          </h2>

          <p
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ color: "var(--color-neutral)" }}
          >
            Explore the highlights of our initiatives and the impact we've created
            through innovative solutions across multiple domains.
          </p>
        </div>

        {/* Category Tabs */}
        <div 
          className={`flex justify-center mb-8 sm:mb-10 lg:mb-12 xl:mb-16 transition-all duration-1000 delay-600 px-2 sm:px-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div 
            className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 p-2 sm:p-3 lg:p-2 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-white)',
              borderColor: 'var(--color-gray-200)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-1 sm:gap-2 !px-2 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-base transition-all duration-300 ${
                    isActive ? 'scale-105' : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: isActive ? category.color : 'transparent',
                    color: isActive ? 'var(--color-white)' : 'var(--color-gray-600)',
                    boxShadow: isActive ? `0 8px 24px ${category.color}30` : 'none',
                  }}
                >
                  <Icon size={14} className="sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden text-xs">{category.name.slice(0, 8)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGalleries.length > 0 ? (
            filteredGalleries.map((gallery, index) => {
              const categoryConfig = categories.find(cat => cat.id === gallery.category) || categories[0];
              
              return (
                <div
                  key={gallery.id}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 hover:-translate-y-2"
                  style={{
                    backgroundColor: "var(--color-white)",
                    boxShadow: "var(--shadow-card)",
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  }}
                  onClick={() => openGallery(gallery)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 25px 80px rgba(10, 9, 3, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "var(--shadow-card)";
                  }}
                >
                  {/* Image container with overlay */}
                  <div className="relative overflow-hidden">
                    <img
                      src={
                            gallery.photos && gallery.photos.length > 0
                              ? `${import.meta.env.BASE_URL}${gallery.photos[0]}`
                              : `${import.meta.env.BASE_URL}images/default-cover.jpg`
                          }
                      alt={gallery.title}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${categoryConfig.color}CC, ${categoryConfig.color}99)`,
                      }}
                    />

                    {/* View button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <button
                        className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-base text-white transform scale-90 group-hover:scale-100 transition-transform duration-300"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                          border: "2px solid rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        View Gallery
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div
                      className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                      style={{
                        backgroundColor: categoryConfig.color,
                        color: "var(--color-white)",
                      }}
                    >
                      <categoryConfig.icon size={10} className="sm:w-3 sm:h-3" />
                      <span className="hidden sm:inline">{categoryConfig.name}</span>
                    </div>

                    {/* Image count badge */}
                    <div
                      className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        color: "var(--color-primary)",
                      }}
                    >
                      {gallery.images.length}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-opacity-80 transition-all duration-300 line-clamp-2"
                      style={{ 
                        color: "var(--color-primary)",
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      {gallery.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-2 sm:line-clamp-3"
                      style={{ color: "var(--color-neutral)" }}
                    >
                      {gallery.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{
                      backgroundColor: categoryConfig.color,
                    }}
                  />
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12 sm:py-16 lg:py-20">
              <div 
                className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full mb-4 sm:mb-6"
                style={{ backgroundColor: 'var(--overlay-accent-light)' }}
              >
                <Sparkles size={24} className="sm:w-8 sm:h-8" style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3"
                style={{ color: 'var(--color-primary)' }}
              >
                No Projects Found
              </h3>
              <p className="text-sm sm:text-base" style={{ color: 'var(--color-neutral)' }}>
                No projects available in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="relative max-w-6xl w-full">
            {/* Header Controls */}
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-start sm:items-center p-1 sm:p-6 gap-4">
              <div className="text-white">
                <h3 className="text-lg sm:text-2xl font-bold mb-1 !text-white">{selectedGallery.title}</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-4 text-xs sm:text-sm">
                  <span className="text-gray-300">
                    {currentImageIndex + 1} of {selectedGallery.images.length}
                  </span>
                  <div 
                    className="px-2 sm:px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: categories.find(cat => cat.id === selectedGallery.category)?.color || 'var(--color-accent)',
                    }}
                  >
                    {categories.find(cat => cat.id === selectedGallery.category)?.name || 'Project'}
                  </div>
                </div>
              </div>

              <button
                onClick={closeGallery}
                className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex-shrink-0"
              >
                <X size={10} className="sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative mt-16 sm:mt-20">
              {isLoading ? (
                <div className="flex items-center justify-center h-60 sm:h-96">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : (
                <>
                  <img
                    src={selectedGallery.images[currentImageIndex]}
                    alt={`${selectedGallery.title} - Image ${currentImageIndex + 1}`}
                    className="w-full max-h-[50vh] sm:max-h-[70vh] object-contain rounded-lg sm:rounded-2xl"
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={showPrevImage}
                    className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 p-2 sm:p-4 rounded-full backdrop-blur-md text-white transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
                  </button>

                  <button
                    onClick={showNextImage}
                    className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 p-2 sm:p-4 rounded-full backdrop-blur-md text-white transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <ChevronRight size={20} className="sm:w-7 sm:h-7" />
                  </button>
                </>
              )}
            </div>

            {/* Description */}
            <div className="mt-4 sm:mt-6 text-center text-white px-2">
              <p className="max-w-3xl mx-auto text-xs sm:text-sm lg:text-base text-gray-300 leading-relaxed">
                {selectedGallery.description}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-2 overflow-x-auto pb-3 sm:pb-4">
              {selectedGallery.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${
                    index === currentImageIndex
                      ? "ring-4 ring-white scale-110"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: 'transparent',
                    padding: '0',
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 sm:w-20 h-12 sm:h-14 object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}