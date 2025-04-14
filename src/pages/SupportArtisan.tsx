
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SupportArtisanForm from '@/components/artisans/SupportArtisanForm';
import { Button } from '@/components/ui/button';

const SupportArtisan = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally be fetched from a database
  const artisan = {
    id: id || 'art-001',
    name: 'Kishore Gayan',
    bio: 'Kishore Gayan is a multidisciplinary artist from Jharkhand whose work blends traditional painting techniques with contemporary themes. His art explores the rich cultural heritage of rural communities.',
    image: '/lovable-uploads/c792593b-eafa-4374-b050-ca9e82ad1c03.png',
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium mb-6">Support an Artisan</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img 
              src={artisan.image} 
              alt={artisan.name} 
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-4">{artisan.name}</h2>
            <p className="text-gray-600 mb-6">{artisan.bio}</p>
            <p className="mb-6">
              Your support helps our artisans preserve traditional craftsmanship while providing sustainable livelihoods for their families and communities.
            </p>
            
            <div className="flex gap-4 mb-6">
              <Button 
                className="bg-ankan-brown hover:bg-ankan-brown/90 text-white"
                onClick={() => document.getElementById('support-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Support this Artisan
              </Button>
              
              <Link to="/workshops">
                <Button 
                  variant="outline"
                  className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10"
                >
                  Book a Workshop
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div id="support-form" className="max-w-lg mx-auto">
          <SupportArtisanForm 
            artisanId={artisan.id}
            artisanName={artisan.name}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportArtisan;
