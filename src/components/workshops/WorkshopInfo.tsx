
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WorkshopInfoProps {
  onBookWorkshop?: () => void;
}

const WorkshopInfo: React.FC<WorkshopInfoProps> = ({ onBookWorkshop }) => {
  return (
    <div className="py-16">
      <div className="h-80 bg-cover bg-center relative mb-16" style={{ backgroundImage: `url(/lovable-uploads/bd8e299f-a4b7-423f-8bd4-006ca140972a.png)` }}>
        <div className="absolute inset-0 bg-ankan-brown bg-opacity-70 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold mb-6">Trainings & Workshops</h1>
          <p className="text-lg max-w-3xl text-center">
            Ankan workshops cover traditional art techniques and modern business practices, bridging the gap between heritage and innovation. Join us to support and uplift Jharkhand's artistic community.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-medium text-center mb-10">BOOK A WORKSHOP</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="border border-gray-300 p-8">
            <h2 className="text-xl font-medium mb-4 text-center">01</h2>
            <h3 className="text-lg font-medium mb-6 text-center">BOOK A SLOT</h3>
            <p className="text-gray-600 text-center">
              Look at the upcoming workshops and book a slot most favourable for you
            </p>
          </div>
          
          <div className="border border-gray-300 p-8">
            <h2 className="text-xl font-medium mb-4 text-center">02</h2>
            <h3 className="text-lg font-medium mb-6 text-center">MAKE PAYMENT</h3>
            <p className="text-gray-600 text-center">
              Make your payment to secure your seat and let us get on to assembling your own little Paitkar kit
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={onBookWorkshop}
            className="bg-ankan-brown hover:bg-ankan-brown/90 text-white px-8 py-3"
          >
            Book a Workshop Now
          </Button>
        </div>
      </div>
      
      <div className="bg-ankan-beige py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-medium mb-8">Lookbook</h2>
          <p className="text-gray-600 mb-8">
            Let us take you through a visual narrative of what our workshops look like
          </p>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex">
                <img
                  src="/lovable-uploads/958996aa-bc95-4f7f-b55b-2f2207462b4f.png"
                  alt="Workshop"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <ChevronLeft size={20} />
            </button>
            
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopInfo;
