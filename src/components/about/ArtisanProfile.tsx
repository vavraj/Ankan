
import React from 'react';

interface ArtisanProfileProps {
  name: string;
  image: string;
  description: string;
}

const ArtisanProfile: React.FC<ArtisanProfileProps> = ({ 
  name, 
  image, 
  description 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-12">
      <div className="w-full md:w-1/2">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-lg font-medium mb-4">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ArtisanProfile;
