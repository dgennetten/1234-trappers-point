import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const heroSlides = [
  { image: '/images/hero1.jpg', alt: 'Trappers Point Lakefront View' },
  { image: '/images/hero2.jpg', alt: 'Custom Architecture' },
  { image: '/images/hero3.jpg', alt: 'Private Lake Access' },
  { image: '/images/hero4.jpg', alt: 'Luxury Living' },
  { image: '/images/hero5.jpg', alt: 'Natural Beauty' },
];

const highlights = [
  '3+ acres of lakefront land',
  'High-end custom architecture',
  '4 fireplaces, 4-hinge solid wood doors',
  '4-bedroom, 3.5 bath, office, man-cave',
  'Loafing shed + paddock for horses',
  'Close to town, but secluded',
  '50 minutes to Denver International Airport',
  '20 minutes to Rocky Mountain foothills',
  'Irrigation rights from private lake',
  'Kayak, Canoe, Sail and Paddle boats included!',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slideshow */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center text-shadow animate-fade-in">
          1234 Trappers Point
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-center text-shadow">
          Fort Collins Lakefront Estate
        </p>

        {/* Highlights Grid */}
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-center text-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {highlight}
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={40} />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}