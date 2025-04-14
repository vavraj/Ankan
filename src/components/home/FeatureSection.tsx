
import React from 'react';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <div className="bg-ankan-beige py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-2">Welcome to <span className="font-bold">अंकन</span></h2>
          <p className="text-gray-700">Where Heritage Meets Artistry,</p>
          <p className="text-gray-700">One Scroll at a Time.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/dff63d9f-ca5a-4975-bd4a-7e05c1815e29.png" 
                alt="Explore Our Collection" 
                className="w-full h-64 object-cover"
              />
            </div>
            <Link to="/collections" className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100 transition-colors">
              Explore Our Collection
            </Link>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/dcd8df0b-a773-4113-b4b8-492708052b76.png" 
                alt="Learn About Paitkar" 
                className="w-full h-64 object-cover"
              />
            </div>
            <Link to="/about-paitkar" className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100 transition-colors">
              Learn About Paitkar
            </Link>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/96f4a251-d153-4cde-a318-d5a6cf8e6f66.png" 
                alt="Customise your Art" 
                className="w-full h-64 object-cover"
              />
            </div>
            <Link to="/customise" className="px-6 py-2 bg-white border border-gray-300 rounded-md text-gray-800 hover:bg-gray-100 transition-colors">
              Customise your Art
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
