
// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface WorkshopInfoProps {
//   onBookWorkshop?: () => void;
// }

// const WorkshopInfo: React.FC<WorkshopInfoProps> = ({ onBookWorkshop }) => {
//   return (
//     <div className="py-0">
//       <div className="bg-cover bg-center relative mb-16 h-[400px]" style={{ backgroundImage: `url(/lovable-uploads/backgrounds/bg2.png)` }}>
//         <div className="absolute inset-0 bg-ankan-brown bg-opacity-70 flex flex-col justify-center items-center text-white">
//           <h1 className="text-3xl font-bold mb-6">Trainings & Workshops</h1>
//           <p className="text-lg max-w-3xl text-center">
//             Ankan workshops cover traditional art techniques and modern business practices, bridging the gap between heritage and innovation. Join us to support and uplift Jharkhand's artistic community.
//           </p>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 mb-16">
//         <h2 className="text-2xl font-medium text-center mb-10">BOOK A WORKSHOP</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           <div className="border border-gray-300 p-8">
//             <h2 className="text-xl font-medium mb-4 text-center">01</h2>
//             <h3 className="text-lg font-medium mb-6 text-center">BOOK A SLOT</h3>
//             <p className="text-gray-600 text-center">
//               Look at the upcoming workshops and book a slot most favourable for you
//             </p>
//           </div>
          
//           <div className="border border-gray-300 p-8">
//             <h2 className="text-xl font-medium mb-4 text-center">02</h2>
//             <h3 className="text-lg font-medium mb-6 text-center">MAKE PAYMENT</h3>
//             <p className="text-gray-600 text-center">
//               Make your payment to secure your seat and let us get on to assembling your own little Paitkar kit
//             </p>
//           </div>
//         </div>
        
//         <div className="text-center">
//           <Button 
//             onClick={onBookWorkshop}
//             className="bg-ankan-brown hover:bg-ankan-brown/90 text-white px-8 py-3"
//           >
//             Book a Workshop Now
//           </Button>
//         </div>
//       </div>
      
//       <div className="bg-ankan-beige py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-medium mb-8">Lookbook</h2>
//           <p className="text-gray-600 mb-8">
//             Let us take you through a visual narrative of what our workshops look like
//           </p>
          
//           <div className="relative">
//             <div className="overflow-hidden">
//               <div className="flex">
//                 <img
//                   src="/lovable-uploads/backgrounds/bg2.png"
//                   alt="Workshop"
//                   className="w-full h-auto"
//                 />
//               </div>
//             </div>
            
//             <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
//               <ChevronLeft size={20} />
//             </button>
            
//             <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkshopInfo;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface WorkshopInfoProps {
  onBookWorkshop?: () => void;
}

const WorkshopInfo: React.FC<WorkshopInfoProps> = ({ onBookWorkshop }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/lovable-uploads/backgrounds/bg2.png",
    "/lovable-uploads/backgrounds/bg3.png",
    "/lovable-uploads/backgrounds/bg4.png",
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="py-0 overflow-x-hidden">
      <motion.div 
        className="bg-cover bg-center relative mb-16 h-96"
        style={{ backgroundImage: `url(${images[0]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-ankan-brown bg-opacity-70 flex flex-col justify-center items-center text-white">
          <motion.h1 
            className="text-4xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Trainings & Workshops
          </motion.h1>
          <motion.p 
            className="text-lg max-w-3xl text-center px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ankan workshops cover traditional art techniques and modern business practices, bridging the gap between heritage and innovation. Join us to support and uplift Jharkhand's artistic community.
          </motion.p>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 mb-16">
        <motion.h2 
          className="text-2xl font-medium text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          BOOK A WORKSHOP
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            className="border border-gray-300 p-10 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-medium mb-4 border-2 border-ankan-brown rounded-full w-12 h-12 flex items-center justify-center">01</span>
              <h3 className="text-xl font-medium mb-6 text-center">BOOK A SLOT</h3>
              <p className="text-gray-600 text-center">
                Look at the upcoming workshops and book a slot most favourable for you
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="border border-gray-300 p-10 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-medium mb-4 border-2 border-ankan-brown rounded-full w-12 h-12 flex items-center justify-center">02</span>
              <h3 className="text-xl font-medium mb-6 text-center">MAKE PAYMENT</h3>
              <p className="text-gray-600 text-center">
                Make your payment to secure your seat and let us get on to assembling your own little Paitkar kit
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            onClick={onBookWorkshop}
            className="bg-ankan-brown hover:bg-ankan-brown/90 text-white px-8 py-6 rounded-md text-lg transition-all duration-300 hover:scale-105"
          >
            Book a Workshop Now
          </Button>
        </motion.div>
      </div>
      
      <div className="bg-ankan-brown py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl text-ankan-lightBeige font-medium mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lookbook
          </motion.h2>
          <motion.p 
            className="text-ankan-beige mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let us take you through a visual narrative of what our workshops look like
          </motion.p>
          
          <div className="relative">
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex relative h-96">
                {images.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={`Workshop ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1 : 1.1,
                    }}
                    transition={{ duration: 0.8 }}
                  />
                ))}
              </div>
            </motion.div>
            
            <motion.button 
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300"
              onClick={prevImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            <motion.button 
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-50 transition-colors duration-300"
              onClick={nextImage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
            
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-ankan-brown' : 'bg-gray-300'}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopInfo;