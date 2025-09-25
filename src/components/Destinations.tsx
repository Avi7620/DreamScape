import React, { useState } from 'react';
import { Star, MapPin, Calendar, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'kashmir',
    location: 'India',
    image: '/images/kashmir.jpeg'
,
    rating: 4.9,
    reviews: 234,
    price: '$2,899',
    duration: '7 days',
    description: 'Overwater bungalows and crystal-clear lagoons',
    features: ['All-Inclusive', 'Private Beach', 'Water Sports']
  },
  {
    id: 2,
    name: 'Paris',
    location: 'France',
    image: '/images/tajmahal.jpg',
    rating: 4.8,
    reviews: 567,
    price: '$1,599',
    duration: '5 days',
    description: 'The city of love and lights awaits you',
    features: ['Cultural Tours', 'Fine Dining', 'Museums']
  },
  {
    id: 3,
    name: 'Tokyo',
    location: 'Japan',
    image: '/images/goa2.jpg',
    rating: 4.9,
    reviews: 432,
    price: '$2,199',
    duration: '6 days',
    description: 'Modern metropolis meets ancient tradition',
    features: ['Guided Tours', 'Traditional Cuisine', 'Cultural Sites']
  },
  {
    id: 4,
    name: 'Santorini',
    location: 'Greece',
    image: '/images/Kerala_Main.jpg',
    rating: 4.7,
    reviews: 298,
    price: '$1,899',
    duration: '4 days',
    description: 'Stunning sunsets and whitewashed villages',
    features: ['Sunset Views', 'Wine Tasting', 'Historic Sites']
  },
  {
    id: 5,
    name: 'Bali',
    location: 'Indonesia',
    image: '/images/jaipur3.jpg'
,
    rating: 4.8,
    reviews: 387,
    price: '$1,299',
    duration: '8 days',
    description: 'Tropical paradise with rich culture',
    features: ['Beach Resorts', 'Temple Tours', 'Spa Treatments']
  },
  {
    id: 6,
    name: 'Dubai',
    location: 'UAE',
    image: '/images/palace.jpeg',
    rating: 4.6,
    reviews: 445,
    price: '$2,599',
    duration: '5 days',
    description: 'Luxury shopping and architectural marvels',
    features: ['Luxury Hotels', 'Desert Safari', 'Shopping']
  }
];

const Destinations: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breathtaking locations handpicked by our travel experts for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                  <p className="text-white/80 text-sm">{destination.description}</p>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{destination.duration}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {destination.reviews} reviews
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{destination.price}</p>
                    <p className="text-sm text-gray-500">per person</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button 
                  className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform flex items-center justify-center space-x-2 ${
                    hoveredCard === destination.id ? 'scale-105 shadow-lg' : ''
                  }`}
                >
                  <span>Book Now</span>
                  <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                    hoveredCard === destination.id ? 'translate-x-1' : ''
                  }`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;