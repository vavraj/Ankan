import React, { useState, useEffect } from 'react';
import FilterBar from '@/components/shop/FilterBar';
import ProductCard from '@/components/shop/ProductCard';
import { motion } from 'framer-motion';

const Shop = () => {
  const [products] = useState([
    {
      id: '1',
      title: 'Ethereal HER',
      price: 3800,
      image: '/lovable-uploads/etheralher.png',
    },
    {
      id: '2',
      title: 'Mystic Woods',
      price: 2500,
      image: '/lovable-uploads/mysticwoods.png',
    },
    {
      id: '3',
      title: 'Subtle Breeze',
      price: 2200,
      image: '/lovable-uploads/subtlebreeze.png',
    },
    {
      id: '4',
      title: 'Enchanted Garden',
      price: 3200,
      image: '/lovable-uploads/enchantedgarden.png',
    },
    {
      id: '5',
      title: 'Divine Essence',
      price: 4500,
      image: '/lovable-uploads/divine.png',
    },
    {
      id: '6',
      title: 'Krishna & Gopiya',
      price: 3000,
      image: '/lovable-uploads/krishna.png',
    },
    {
      id: '7',
      title: 'Tales Untold',
      price: 5500,
      image: '/lovable-uploads/tales.png',
    },
    {
      id: '8',
      title: 'Paint Me',
      price: 1500,
      image: '/lovable-uploads/paint.png',
    },
    {
      id: '9',
      title: 'Melt Here',
      price: 1000,
      image: '/lovable-uploads/melt.png',
    },
    {
      id: '10',
      title: 'Earthy Comfort',
      price: 2500,
      image: '/lovable-uploads/earthy.png',
    },
    {
      id: '11',
      title: 'Cover in Style',
      price: 5000,
      image: '/lovable-uploads/coverinstyle.png',
    },
  ]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a small delay for the animation to start after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const filterBarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={filterBarVariants}
      >
        <FilterBar />
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.2 }
            }}
          >
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated scroll indicator */}
      {products.length > 8 && (
        <motion.div 
          className="flex justify-center mt-12 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="p-2 rounded-full border border-gray-200"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Shop;