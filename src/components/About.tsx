import React from 'react';
import { Award, Users, MapPin, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '5K+', label: 'Happy Travelers' },
  { icon: MapPin, value: '60+', label: 'Destinations' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Clock, value: '24/7', label: 'Support Available' }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Experience.webp"
                alt="Travel Experience"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Dream Journey
                <span className="block text-blue-600">Starts Here</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 15 years, WanderLux has been crafting extraordinary travel experiences that go beyond ordinary tourism. We believe that travel is not just about destinations – it's about the stories you create, the people you meet, and the memories that last a lifetime.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of passionate travel experts works tirelessly to curate unique experiences, negotiate exclusive deals, and provide unparalleled service that transforms your vacation dreams into reality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
                View Testimonials
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;