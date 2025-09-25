import React from 'react';
import { Bus, MapPin, Camera, Shield, Clock, Users } from 'lucide-react';

const services = [
  {
    icon: Bus,
    title: 'Bus Booking',
    description: 'Find the best Buses at competitive prices with our extensive  partnerships.',
    features: ['24/7 Support', 'Best Price Guarantee', 'Flexible Changes']
  },
  {
    icon: MapPin,
    title: 'Hotel Reservations',
    description: 'Book luxury accommodations worldwide with exclusive deals and instant confirmation.',
    features: ['Luxury Properties', 'Instant Booking', 'Special Rates']
  },
  // {
  //   icon: Camera,
  //   title: 'Guided Tours',
  //   description: 'Experience destinations like a local with our expert guides and curated experiences.',
  //   features: ['Local Experts', 'Small Groups', 'Authentic Experiences']
  // },
  // {
  //   icon: Shield,
  //   title: 'Travel Insurance',
  //   description: 'Travel with peace of mind with comprehensive coverage for all your adventures.',
  //   features: ['Medical Coverage', 'Trip Protection', 'Emergency Support']
  // },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our dedicated team is available around the clock to assist with any travel needs.',
    features: ['Instant Response', 'Emergency Assistance', 'Multilingual Support']
  },
  // {
  //   icon: Users,
  //   title: 'Group Travel',
  //   description: 'Specialized services for corporate events, family reunions, and group adventures.',
  //   features: ['Custom Itineraries', 'Group Discounts', 'Event Planning']
  // }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to execution, we handle every detail of your journey with care and expertise
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-8">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;