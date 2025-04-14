
import React from 'react';
import ArtisanProfile from '@/components/about/ArtisanProfile';

const Artisans = () => {
  const artisans = [
    {
      name: 'JODU CHITRAKAR',
      image: '/lovable-uploads/c4b4b02c-0dc6-499d-8732-f11ff546d9ea.png',
      description: 'Jodu Chitrakar is a master Paitkar artist with over 40 years of experience. Born in Amadubi village, he learned the art form from his father at a young age and has since become one of the most respected practitioners of this traditional craft in Jharkhand.',
    },
    {
      name: 'SANJAY CHITRAKAR',
      image: '/lovable-uploads/2fdf3a0c-2776-44a8-9351-19d5645cb6fb.png',
      description: 'Sanjay Chitrakar represents the younger generation of Paitkar artists. Blending traditional techniques with contemporary themes, he has helped evolve the art form while maintaining its cultural essence. His works have been exhibited in major cities across India.',
    },
    {
      name: 'MANJU DEVI',
      image: '/lovable-uploads/b7089c17-3273-4d1d-80ec-79b809e7ecec.png',
      description: 'Manju Devi is known for her intricate detailing and vibrant color palette. As one of the few women traditional Paitkar artists, she has broken barriers in a traditionally male-dominated art form and mentors young girls from her village in the craft.',
    },
    {
      name: 'RAVI CHITRAKAR',
      image: '/lovable-uploads/79085d76-3d10-4ca0-8991-1c88556fff15.png',
      description: 'Ravi Chitrakar specializes in large-format Paitkar scrolls that tell complex mythological narratives. His work is characterized by a dynamic composition style and meticulous attention to narrative continuity across the scroll.',
    },
    {
      name: 'MEENA CHITRAKAR',
      image: '/lovable-uploads/88bc88e5-d777-4e55-aab2-be6584304d36.png',
      description: 'Meena Chitrakar has been practicing Paitkar art for over two decades. Her specialty lies in depicting scenes from tribal folklore, blending traditional Paitkar techniques with stories specific to the indigenous communities of Jharkhand.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-16">MEET THE MAKERS</h1>
      
      <div className="mb-12">
        <p className="text-lg text-center max-w-3xl mx-auto">
          Immerse yourself in the rich tapestry of heritage and storytelling, where every stroke of paitkar art weaves a legacy of culture, tradition, and timeless craftsmanship.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {artisans.map((artisan, index) => (
          <ArtisanProfile 
            key={index}
            name={artisan.name}
            image={artisan.image}
            description={artisan.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Artisans;
