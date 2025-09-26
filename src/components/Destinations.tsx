import React, { useState } from 'react';
import { Star, MapPin, Calendar, ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Kashmir',
    location: 'Kashmir',
    image: '/images/kashmir.jpeg',
    rating: 4.9,
    reviews: 234,
    price: '₹25,000',
    duration: '7 days',
    description: 'Experience the breathtaking beauty of snow-capped mountains, serene Dal Lake, and the vibrant local markets. Ideal for trekking, skiing, and relaxing in nature.',
    features: ['Shikara Ride on Dal Lake', 'Trekking in Gulmarg', 'Local Handicrafts Shopping']
  },
  {
    id: 2,
    name: 'Taj Mahal',
    location: 'Agra',
    image: '/images/tajmahal.jpg',
    rating: 4.8,
    reviews: 567,
    price: '₹15,000',
    duration: '5 days',
    description: 'Visit the iconic white marble mausoleum, explore the historic Agra Fort, and enjoy traditional Mughlai cuisine.',
    features: ['Sunrise at Taj Mahal', 'Guided Agra Fort Tour', 'Mughlai Culinary Experience']
  },
  {
    id: 3,
    name: 'Goa Beach',
    location: 'Goa',
    image: '/images/goa2.jpg',
    rating: 4.9,
    reviews: 432,
    price: '₹20,000',
    duration: '6 days',
    description: 'Relax on golden sandy beaches, enjoy vibrant nightlife, and explore Portuguese heritage sites.',
    features: ['Sunbathing and Water Sports', 'Beach Party Nights', 'Old Goa Churches Tour']
  },
  {
    id: 4,
    name: 'Kerala',
    location: 'Kerala',
    image: '/images/Kerala_Main.jpg',
    rating: 4.7,
    reviews: 298,
    price: '₹19,000',
    duration: '4 days',
    description: 'Witness stunning sunsets over whitewashed buildings, enjoy local wines, and explore volcanic beaches.',
    features: ['Sunset at Oia', 'Wine Tasting in Vineyards', 'Volcanic Beach Exploration']
  },
  {
    id: 5,
    name: 'Rajasthan',
    location: 'Rajasthan',
    image: '/images/jaipur3.jpg',
    rating: 4.8,
    reviews: 387,
    price: '₹15,000',
    duration: '8 days',
    description: 'Discover majestic forts, vibrant bazaars, and royal palaces while experiencing traditional Rajasthani culture.',
    features: ['Amber Fort Tour', 'Camel Safari in Thar Desert', 'Rajasthani Folk Dance']
  },
  {
    id: 6,
    name: 'Shau Palace',
    location: 'Kolhapur',
    image: '/images/palace.jpeg',
    rating: 4.6,
    reviews: 445,
    price: '₹10,000',
    duration: '5 days',
    description: 'Explore the grandeur of Shau Palace, shop for local Kolhapuri handicrafts, and enjoy regional cuisine.',
    features: ['Palace Guided Tour', 'Kolhapuri Leather Shopping', 'Local Cuisine Tasting']
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


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;