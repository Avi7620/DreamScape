import React from 'react';
import { Plane, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">WanderLux</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating unforgettable travel experiences for adventurers worldwide. Your journey to extraordinary begins here.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maldives</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Paris</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tokyo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Santorini</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bali</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">+91 7776082355</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="text-gray-400">dreamcape@gmail.com</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-3 py-2 rounded-l-lg flex-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 DreamScape. All rights reserved. Made By Avinash Jadhav (7620487617).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;