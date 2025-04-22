
// import React from 'react';
// import { Link } from 'react-router-dom';

// const FeatureSection = () => {
//   return (
//     <div className="bg-[#D6D4CD] py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-semibold mb-2">Welcome to <span className="font-bold">अंकन</span></h2>
//           <p className="text-gray-700">Where Heritage Meets Artistry,</p>
//           <p className="text-gray-700">One Scroll at a Time.</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center">
//             <div className="mb-4 rounded-lg overflow-hidden">
//               <img 
//                 src="/lovable-uploads/fig1.png" 
//                 alt="Explore Our Collection" 
//                 className="w-full h-64 object-cover rounded-3xl"
//               />
//             </div>
//             <Link to="/collections" className="px-6 py-2 bg-[#D9D9D9] border-2 border-[#58504D]/70 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors">
//               Explore Our Collection
//             </Link>
//           </div>
          
//           <div className="flex flex-col items-center">
//             <div className="mb-4 rounded-lg overflow-hidden">
//               <img 
//                 src="/lovable-uploads/fig2.png" 
//                 alt="Learn About Paitkar" 
//                 className="w-full h-64 object-cover rounded-3xl"
//               />
//             </div>
//             <Link to="/about-paitkar" className="px-6 py-2 bg-[#D9D9D9] border-2 border-[#58504D]/70 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors">
//               Learn About Paitkar
//             </Link>
//           </div>
          
//           <div className="flex flex-col items-center">
//             <div className="mb-4 rounded-lg overflow-hidden">
//               <img 
//                 src="/lovable-uploads/fig3.png" 
//                 alt="Customise your Art" 
//                 className="w-full h-64 object-cover rounded-3xl"
//               />
//             </div>
//             <Link to="/customize" className="px-6 py-2 bg-[#D9D9D9] border-2 border-[#58504D]/70 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors">
//               Customise your Art
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeatureSection = () => {
  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <motion.div 
      className="bg-[#D6D4CD] py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-semibold mb-2"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ times: [0, 0.5, 1], duration: 0.8 }}
          >
            Welcome to <span className="font-bold">अंकन</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-gray-700">Where Heritage Meets Artistry,</p>
            <p className="text-gray-700">One Scroll at a Time.</p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Feature Card 1 */}
          <motion.div 
            className="flex flex-col items-center"
            variants={item}
          >
            <motion.div 
              className="mb-4 rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                src="/lovable-uploads/fig1.png" 
                alt="Explore Our Collection" 
                className="w-full h-64 object-cover rounded-3xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/collections" className="px-6 py-2 bg-[#D9D9D9] border-2 border-[#58504D]/70 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors inline-block">
                Explore Our Collection
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Feature Card 2 */}
          <motion.div 
            className="flex flex-col items-center"
            variants={item}
          >
            <motion.div 
              className="mb-4 rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                src="/lovable-uploads/fig2.png" 
                alt="Learn About Paitkar" 
                className="w-full h-64 object-cover rounded-3xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about-paitkar" className="px-6 py-2 bg-[#D9D9D9] border-2 border-[#58504D]/70 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors inline-block">
                Learn About Paitkar
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Feature Card 3 */}
          <motion.div 
            className="flex flex-col items-center"
            variants={item}
          >
            <motion.div 
              className="mb-4 rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                src="/lovable-uploads/fig3.png" 
                alt="Customise your Art" 
                className="w-full h-64 object-cover rounded-3xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/customize" className="px-6 py-2 bg-[#D9D9D9] border-2 border-[#58504D]/70 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors inline-block">
                Customise your Art
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;