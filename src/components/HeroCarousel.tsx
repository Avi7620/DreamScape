import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const destinations = [
  {
   
  id: 1,
  image: '/images/kashmir3.jpg',
  title: 'Kashmir Valley',
  location: 'Kashmir',
  description: 'A paradise on Earth with snow-capped peaks, serene lakes, and lush valleys.'
},
{
  id: 2,
  image: '/images/tajmahal.jpg',
  title: 'Taj Mahal',
  location: 'Agra',
  description: 'An eternal symbol of love and one of the Seven Wonders of the World.'
},
{
  id: 3,
  image: '/images/goa2.jpg',
  title: 'Goa Beach',
  location: 'Goa',
  description: 'Golden sands, vibrant nightlife, and endless waves of the Arabian Sea.'
},
{
  id: 4,
  image: '/images/Kerala_Main.jpg',
  title: 'Kerala',
  location: 'Kerala',
  description: 'The enchanting backwaters, houseboats, and rich traditions of God’s Own Country.'
}

];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, nextSlide]);

  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {destinations.map((destination, index) => (
          <div
            key={destination.id}
            className="min-w-full h-full relative flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${destination.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="text-center text-white z-10 px-4 max-w-4xl mx-auto">
              <div className="transform transition-all duration-1000 delay-300 opacity-100">
                <div className="flex items-center justify-center mb-4 animate-fade-in-up">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg font-medium">{destination.location}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
                  {destination.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-400">
                  {destination.description}
                </p>
                {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-600">
                  Explore Now
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;