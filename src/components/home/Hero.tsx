
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-ankan-beige min-h-[550px] min-w-full">
      {/* <div className="relative flex gap-20 h-[650px] min-w-full m-0 p-0"> */}
      <div className="relative flex justify-between h-[550px] min-w-full m-0 p-0">
        <div className="z-0 overflow-clip items-center mb-8 md:mb-0 m-0 p-0">
          <img
            src="/hero.png"
            alt="Paitkar Art"
            // className="w-[800px] -translate-y-10 -translate-x-20 bg-[#D6D4CD] rounded-full"
            className="w-[600px] -translate-y-10 -translate-x-20 bg-[#D6D4CD] rounded-full"
          />
        </div>
        
        {/* <div className="flex flex-col justify-center items-start md:items-start text-center md:mr-20 md:text-left"> */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:mr-20 md:text-left">
          <img
            src="/ankan.png"
            alt="Ankan Logo"
            className="h-40 w-96 mb-4"
          />
          <p className="min-w-full text-lg mb-8 text-center">The Parable of Paitkar</p>
          
          <div className="min-w-full flex flex-wrap justify-center gap-4">
            <Link to="/collections" className="px-8 py-3 bg-[#D6D4CD] border-2 border-[#58504D] rounded-xl text-gray-800 hover:bg-gray-200 transition-colors text-sm">Shop</Link>
            <Link to="/support-artisan" className="px-8 py-3 bg-[#58504D] text-white rounded-xl hover:bg-ankan-darkBrown transition-colors text-sm">Adopt</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
