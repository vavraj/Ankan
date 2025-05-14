import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-ankan-beige min-h-[400px] sm:min-h-[500px] md:min-h-[600px] min-w-full">
      <div className="relative flex flex-col md:flex-row md:gap-20 h-auto md:h-[650px] min-w-full m-0 p-0">
        {/* Hero Image - Full width on mobile, positioned on desktop */}
        <div className="z-0 overflow-clip items-center m-0 p-0 w-full md:w-auto">
          <img
            src="/hero.png"
            alt="Paitkar Art"
            className="w-full md:w-[745px] max-w-[100vw] md:-translate-y-12 md:-translate-x-20 bg-[#D6D4CD] rounded-full"
          />
        </div>
        
        {/* Content section - Centered on mobile, positioned on desktop */}
        <div className="flex flex-col justify-center items-center md:items-start px-4 py-8 md:py-0 md:px-0 md:mr-20 text-center md:text-left -mt-8 md:mt-0">
          <img
            src="/ankan.png"
            alt="Ankan Logo"
            className="h-24 sm:h-32 md:h-40 w-64 sm:w-80 md:w-96 mb-4"
          />
          <p className="min-w-full text-base sm:text-lg mb-6 md:mb-8 text-center md:text-left">The Parable of Paitkar</p>
          
          <div className="min-w-full flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            <Link to="/collections" className="px-6 sm:px-8 py-2 sm:py-3 bg-[#D6D4CD] border-2 border-[#58504D] rounded-xl text-gray-800 hover:bg-gray-200 transition-colors text-xs sm:text-sm">Shop</Link>
            <Link to="/support-artisan" className="px-6 sm:px-8 py-2 sm:py-3 bg-[#58504D] text-white rounded-xl hover:bg-ankan-darkBrown transition-colors text-xs sm:text-sm">Adopt</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;