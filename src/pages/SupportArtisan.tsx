
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
    <div className="bg-ankan-beige min-h-screen">
      <div className="h-80 bg-cover bg-center relative" style={{ backgroundImage: `url(/lovable-uploads/0283ee9a-417b-496c-a165-bf79a53dc62f.png)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-6">SUPPORT AN ARTISAN</h1>
          <p className="text-lg max-w-3xl text-center px-4">
            Help preserve the ancient art of Paitkar by directly supporting the artisans of Amadubi village
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src={artisan.image} 
                alt={artisan.name} 
                className="w-full h-auto object-cover rounded-md shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-medium mb-4">{artisan.name}</h2>
              <p className="text-gray-600 mb-6">{artisan.bio}</p>
              <p className="mb-8">
                Your support helps our artisans preserve traditional craftsmanship while providing sustainable livelihoods for their families and communities.
              </p>
              
              <div className="bg-white p-6 rounded-md shadow-md mb-8">
                <h3 className="text-xl font-medium mb-4">Support Options</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="option1" 
                      name="support" 
                      value="1000" 
                      className="mr-3" 
                      defaultChecked 
                    />
                    <label htmlFor="option1" className="flex-1">
                      <span className="font-medium">₹1,000</span> - Basic Support
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="option2" 
                      name="support" 
                      value="2500" 
                      className="mr-3" 
                    />
                    <label htmlFor="option2" className="flex-1">
                      <span className="font-medium">₹2,500</span> - Artisan Support + Digital Thank You Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="option3" 
                      name="support" 
                      value="5000" 
                      className="mr-3" 
                    />
                    <label htmlFor="option3" className="flex-1">
                      <span className="font-medium">₹5,000</span> - Artisan Support + Small Paitkar Artwork
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="option4" 
                      name="support" 
                      value="custom" 
                      className="mr-3" 
                    />
                    <label htmlFor="option4" className="flex-1">
                      Enter Custom Amount
                    </label>
                  </div>
                  <div id="customAmount" className="hidden mt-3">
                    <input 
                      type="number" 
                      className="ankan-input" 
                      placeholder="Enter amount in ₹" 
                      min="100" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link to="/checkout?type=support">
                  <Button 
                    className="bg-ankan-brown hover:bg-ankan-brown/90 text-white"
                  >
                    Proceed to Checkout
                  </Button>
                </Link>
                
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
          
          <div className="bg-white p-8 rounded-md shadow-md mb-12">
            <h3 className="text-2xl font-medium mb-6 text-center">How Your Support Helps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-ankan-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ankan-brown">01</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Preserves Tradition</h4>
                <p className="text-gray-600">
                  Helps maintain the ancient art of Paitkar for future generations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ankan-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ankan-brown">02</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Provides Livelihood</h4>
                <p className="text-gray-600">
                  Creates sustainable income for artisans and their families
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-ankan-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ankan-brown">03</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Empowers Community</h4>
                <p className="text-gray-600">
                  Strengthens the entire artisan community in Amadubi village
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-ankan-brown text-white p-8 rounded-md text-center">
            <h3 className="text-2xl font-medium mb-4">Support Artisans, Preserve Tradition</h3>
            <p className="mb-0">
              Your generosity helps keep the ancient art of Paitkar alive for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportArtisan;
