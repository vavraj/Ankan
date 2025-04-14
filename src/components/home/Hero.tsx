
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-ankan-beige min-h-[600px] md:py-16 flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <div className="max-w-md">
            <img
              src="/lovable-uploads/d99b446b-c722-492b-9e0f-358da93bf2ca.png"
              alt="Paitkar Art"
              className="w-full rounded-full"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <img
            src="/ankan-logo.svg"
            alt="Ankan"
            className="h-20 mb-4"
          />
          <p className="text-lg mb-8">The Parable of Paitkar</p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/collections" className="ankan-btn-secondary">Shop</Link>
            <Link to="/about" className="ankan-btn-primary">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
