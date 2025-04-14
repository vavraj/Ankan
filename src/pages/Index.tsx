
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureSection />
      
      {/* Paitkar Introduction */}
      <section className="py-16 px-6 bg-ankan-brown text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">THE PARABLE OF PAITKAR</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Paitkar painting is a folk art form that is only practised in Amadubi village in Jharkhand's East Singhbhum district. This ancient scroll painting tradition dates back to the 10th century.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                Created by artists known as 'Chitrakars,' these paintings utilize natural materials for colors and depict stories from Hindu mythology and tribal traditions.
              </p>
              <Link to="/about-paitkar">
                <Button className="bg-white text-ankan-brown hover:bg-gray-100">
                  Learn More About Paitkar
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="/lovable-uploads/1b131b14-16d9-4465-b535-79507272c859.png" 
                alt="Paitkar Art" 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Support Artisans */}
      <section className="py-16 px-6 bg-ankan-beige">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-ankan-brown">SUPPORT THE ARTISANS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/c792593b-eafa-4374-b050-ca9e82ad1c03.png" 
                alt="Paitkar Artisans" 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Today, only 7-8 artists continue the Paitkar tradition in Amadubi village. Your support helps preserve this invaluable cultural heritage and provides sustainable livelihoods for the artisans and their families.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                Join us in our mission to keep this ancient art form alive for future generations by supporting an artisan or participating in our workshops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/support-artisan">
                  <Button className="bg-ankan-brown hover:bg-ankan-darkBrown text-white px-6">
                    Support an Artisan
                  </Button>
                </Link>
                <Link to="/workshops">
                  <Button variant="outline" className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10 px-6">
                    Book a Workshop
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Shop our Collection */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">SHOP OUR COLLECTION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-md mb-4">
                <img 
                  src="/lovable-uploads/bd8e299f-a4b7-423f-8bd4-006ca140972a.png" 
                  alt="Artwork" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Paitkar Art</h3>
              <p className="text-gray-600 mb-4">Original artwork by Jharkhand's master craftsmen</p>
              <Link to="/collections?category=art">
                <Button variant="outline" className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10">
                  View Collection
                </Button>
              </Link>
            </div>
            
            <div className="group">
              <div className="overflow-hidden rounded-md mb-4">
                <img 
                  src="/lovable-uploads/6ae69a1c-d348-439e-a610-aa048fab1784.png" 
                  alt="Scarves" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Luxury Scarves</h3>
              <p className="text-gray-600 mb-4">Wearable art featuring traditional Paitkar motifs</p>
              <Link to="/collections?category=scarves">
                <Button variant="outline" className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10">
                  View Collection
                </Button>
              </Link>
            </div>
            
            <div className="group">
              <div className="overflow-hidden rounded-md mb-4">
                <img 
                  src="/lovable-uploads/49b8d50b-86ce-4499-ae9f-2fc12290a7a9.png" 
                  alt="Home Decor" 
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">Home Decor</h3>
              <p className="text-gray-600 mb-4">Bring the beauty of Paitkar into your home</p>
              <Link to="/collections?category=home">
                <Button variant="outline" className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10">
                  View Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 px-6 bg-ankan-brown text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Artisans, Preserve Tradition</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join us in our mission to preserve the ancient art of Paitkar and empower the artisans of Jharkhand
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/collections">
              <Button className="bg-white text-ankan-brown hover:bg-gray-100 px-8 py-6 text-lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/support-artisan">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Support an Artisan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
