import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoGalleryProps {
  title: string;
  images: string[];
  bgColor?: string;
}

export default function PhotoGallery({ title, images, bgColor = 'bg-white' }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          {title}
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full pb-[100%] overflow-hidden rounded-xl cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={40} />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={60} />
            </button>

            {/* Image */}
            <img
              src={images[selectedImage]}
              alt={`${title} ${selectedImage + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              className="absolute right-4 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next"
            >
              <ChevronRight size={60} />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 text-white text-lg">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}