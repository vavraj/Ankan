
import React from 'react';

const AboutPaitkar = () => {
  return (
    <div className="py-16">
      <div className="h-96 bg-cover bg-center relative mb-16" style={{ backgroundImage: `url(/lovable-uploads/48a7b3ac-9a2f-4a20-a81d-27296738da82.png)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-6">WHAT IS PAITKAR ?</h1>
          <p className="text-lg max-w-3xl text-center px-4">
            A traditional scroll painting form from the Jharkhand region of India, depicting stories from mythology through a unique visual narrative style.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-medium mb-6">History</h2>
            <p className="text-gray-600 mb-4">
              Paitkar paintings originate from the Amadubi village in the Singhbhum district of Jharkhand. This art form dates back to the 10th century, making it one of the oldest scroll painting traditions in India.
            </p>
            <p className="text-gray-600">
              Traditionally, Paitkar artists would travel from village to village, narrating stories through their scrolls, which were called 'Patas'. These stories were mainly from Hindu epics like the Ramayana and Mahabharata.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-medium mb-6">Characteristics</h2>
            <p className="text-gray-600 mb-4">
              Paitkar paintings are characterized by bold outlines, vibrant colors derived from natural sources, and a unique narrative style where multiple scenes from a story are depicted sequentially on a single scroll.
            </p>
            <p className="text-gray-600">
              The artists use handmade paper or cloth for the scrolls, which can range from 5 to 15 feet in length. The colors are traditionally extracted from stones, flowers, and other natural materials.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-6">The Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <img src="/process-1.jpg" alt="Process Step 1" className="w-full h-auto" />
            <img src="/process-2.jpg" alt="Process Step 2" className="w-full h-auto" />
            <img src="/process-3.jpg" alt="Process Step 3" className="w-full h-auto" />
          </div>
          <p className="text-gray-600">
            The creation of a Paitkar painting involves several meticulous steps. First, the canvas is prepared using handmade paper or fabric. Then, the artist sketches the outline of the narrative scenes. Natural colors are prepared from stones, flowers, and other elements. These are applied in layers, with details and embellishments added last.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <img 
              src="/lovable-uploads/1b131b14-16d9-4465-b535-79507272c859.png" 
              alt="Paitkar Art Theme" 
              className="w-full h-auto" 
            />
          </div>
          <p className="text-gray-600">
            Paitkar paintings primarily depict stories from Hindu mythology, especially the Ramayana and Mahabharata. They also illustrate folklore and tribal traditions of the region. Common themes include the adventures of Lord Rama, Krishna's leelas, and tales of local deities and heroes.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Cultural Significance</h2>
          <p className="text-gray-600 mb-4">
            Paitkar paintings are not just art; they are a medium for preserving and transmitting cultural narratives and religious teachings. They have played a crucial role in keeping the oral traditions and mythological stories alive among communities, especially in remote areas where literacy rates were low.
          </p>
          <p className="text-gray-600">
            These scroll paintings also serve as a record of the social, cultural, and religious life of the people of Jharkhand throughout history. They reflect the region's unique blend of tribal and Hindu cultural elements.
          </p>
        </div>
        
        <div className="py-8 bg-ankan-beige text-center px-4 mb-16">
          <p className="text-xl font-medium">Support Artisans, Preserve Tradition</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPaitkar;
