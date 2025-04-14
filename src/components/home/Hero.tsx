
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-ankan-beige min-h-[600px] flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <img
            src="/lovable-uploads/0fafbaea-0aa1-4e67-9c97-517092bb9660.png"
            alt="Paitkar Art"
            className="w-full max-w-md"
          />
        </div>
        
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <img
            src="/lovable-uploads/37000d57-adc7-438e-bae2-2514f602eac5.png"
            alt="Ankan Logo"
            className="h-auto w-64 mb-4"
          />
          <p className="text-lg mb-8">The Parable of Paitkar</p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/collections" className="px-8 py-2 bg-ankan-beige border border-gray-400 rounded-md text-gray-800 hover:bg-gray-200 transition-colors">Shop</Link>
            <Link to="/about" className="px-8 py-2 bg-ankan-brown text-white rounded-md hover:bg-ankan-darkBrown transition-colors">Read</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
