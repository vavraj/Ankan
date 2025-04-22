import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SupportArtisanForm from '@/components/artisans/SupportArtisanForm';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const SupportArtisan = () => {
  const { id } = useParams<{ id: string }>();
  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [selectedOption, setSelectedOption] = useState('1000');
  
  // This would normally be fetched from a database
  const artisan = {
    id: id || 'art-001',
    name: 'Kishore Gayan',
    bio: 'Kishore Gayan is a multidisciplinary artist from Jharkhand whose work blends traditional painting techniques with contemporary themes. His art explores the rich cultural heritage of rural communities.',
    image: '/lovable-uploads/kishore.png',
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setShowCustomAmount(value === 'custom');
  };
  
  return (
    <div className="bg-ankan-beige min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        className="h-80 bg-cover bg-center relative opacity-80" 
        style={{ backgroundImage: `url(/lovable-uploads/backgrounds/bg2.png)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white">
          <motion.h1 
            className="text-4xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            SUPPORT AN ARTISAN
          </motion.h1>
          <motion.p 
            className="text-lg max-w-3xl text-center px-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Help preserve the ancient art of Paitkar by directly supporting the artisans of Amadubi village
          </motion.p>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Artist info section - Horizontal alignment of image and text */}
          <motion.div 
            className="flex flex-col md:flex-row items-center mb-12 gap-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Artisan Image - Keeping circular shape but same size */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 shadow-lg border-4 border-white"
            >
              <img 
                src={artisan.image} 
                alt={artisan.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            
            {/* Artisan Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-grow"
            >
              <motion.h2 
                className="text-3xl font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {artisan.name}
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {artisan.bio}
              </motion.p>
              <motion.p 
                className="mb-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Your support helps our artisans preserve traditional craftsmanship while providing sustainable livelihoods for their families and communities.
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Support Options - Now positioned below both image and description */}
          <motion.div 
            className="bg-white p-6 rounded-md shadow-md mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <h3 className="text-xl font-medium mb-4">Support Options</h3>
            <div className="space-y-4">
              {/* Radio options with improved styling */}
              <motion.div 
                className="flex items-center p-3 rounded-md hover:bg-ankan-beige/50 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <input 
                  type="radio" 
                  id="option1" 
                  name="support" 
                  value="1000" 
                  className="mr-3" 
                  checked={selectedOption === '1000'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="option1" className="flex-1 cursor-pointer">
                  <span className="font-medium">₹1,000</span> - Basic Support
                </label>
              </motion.div>
              <motion.div 
                className="flex items-center p-3 rounded-md hover:bg-ankan-beige/50 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <input 
                  type="radio" 
                  id="option2" 
                  name="support" 
                  value="2500" 
                  className="mr-3"
                  checked={selectedOption === '2500'}
                  onChange={handleOptionChange} 
                />
                <label htmlFor="option2" className="flex-1 cursor-pointer">
                  <span className="font-medium">₹2,500</span> - Artisan Support + Digital Thank You Card
                </label>
              </motion.div>
              <motion.div 
                className="flex items-center p-3 rounded-md hover:bg-ankan-beige/50 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <input 
                  type="radio" 
                  id="option3" 
                  name="support" 
                  value="5000" 
                  className="mr-3"
                  checked={selectedOption === '5000'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="option3" className="flex-1 cursor-pointer">
                  <span className="font-medium">₹5,000</span> - Artisan Support + Small Paitkar Artwork
                </label>
              </motion.div>
              <motion.div 
                className="flex items-center p-3 rounded-md hover:bg-ankan-beige/50 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <input 
                  type="radio" 
                  id="option4" 
                  name="support" 
                  value="custom" 
                  className="mr-3"
                  checked={selectedOption === 'custom'}
                  onChange={handleOptionChange}
                />
                <label htmlFor="option4" className="flex-1 cursor-pointer">
                  Enter Custom Amount
                </label>
              </motion.div>
              
              {/* Animated custom amount input */}
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: showCustomAmount ? 'auto' : 0,
                  opacity: showCustomAmount ? 1 : 0
                }}
                className="overflow-hidden mt-3"
              >
                <input 
                  type="number" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ankan-brown/30" 
                  placeholder="Enter amount in ₹" 
                  min="100" 
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Buttons section */}
          <motion.div 
            className="flex gap-4 mb-12 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/checkout?type=support">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-ankan-brown hover:bg-ankan-brown/90 text-white px-6 py-2 rounded-md transition-all shadow-md hover:shadow-lg"
                >
                  Proceed to Checkout
                </Button>
              </motion.div>
            </Link>
            
            <Link to="/workshops">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10 px-6 py-2 rounded-md transition-all"
                >
                  Book a Workshop
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* How Your Support Helps Section */}
          <motion.div 
            className="bg-white p-8 rounded-md shadow-md mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          >
            <h3 className="text-2xl font-medium mb-6 text-center">How Your Support Helps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Support Point 1 */}
              <motion.div 
                className="text-center"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="bg-ankan-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl font-bold text-ankan-brown">01</span>
                </motion.div>
                <h4 className="text-lg font-medium mb-2">Preserves Tradition</h4>
                <p className="text-gray-600">
                  Helps maintain the ancient art of Paitkar for future generations
                </p>
              </motion.div>
              
              {/* Support Point 2 */}
              <motion.div 
                className="text-center"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="bg-ankan-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl font-bold text-ankan-brown">02</span>
                </motion.div>
                <h4 className="text-lg font-medium mb-2">Provides Livelihood</h4>
                <p className="text-gray-600">
                  Creates sustainable income for artisans and their families
                </p>
              </motion.div>
              
              {/* Support Point 3 */}
              <motion.div 
                className="text-center"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="bg-ankan-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl font-bold text-ankan-brown">03</span>
                </motion.div>
                <h4 className="text-lg font-medium mb-2">Empowers Community</h4>
                <p className="text-gray-600">
                  Strengthens the entire artisan community in Amadubi village
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div 
            className="bg-ankan-brown text-white p-8 rounded-md text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-medium mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Support Artisans, Preserve Tradition
            </motion.h3>
            <p className="mb-0">
              Your generosity helps keep the ancient art of Paitkar alive for generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SupportArtisan;