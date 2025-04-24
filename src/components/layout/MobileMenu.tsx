import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { type: 'tween', duration: 0.4 } },
    exit: { x: '100%', transition: { type: 'tween', duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5 }
    })
  };

  const menuItems = [
    { type: 'link', text: 'HOME', path: '/', isHeader: true },
    { type: 'header', text: 'SHOP' },
    { type: 'link', text: 'COLLECTIONS', path: '/collections' },
    { type: 'link', text: 'SUPPORT ARTISAN', path: '/support-artisan' },
    { type: 'header', text: 'ABOUT' },
    { type: 'link', text: 'About Paitkar', path: '/about-paitkar' },
    { type: 'link', text: 'Our Artisans', path: '/makers' },
    { type: 'header', text: 'EXPERIENCES' },
    { type: 'link', text: 'WORKSHOPS', path: '/workshops' },
    { type: 'link', text: 'CUSTOMISE', path: '/customize' },
    { type: 'header', text: 'ACCOUNT' },
    { type: 'link', text: 'MY ACCOUNT', path: '/account' },
    { type: 'link', text: 'CART', path: '/cart' },
    { type: 'link', text: 'MY REWARDS', path: '/rewards' },
    { type: 'link', text: 'CONTACT US', path: '/contact' }
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
    >
      {/* Overlay on the right half */}
      <motion.div 
        className="w-[80%] bg-black/30 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Actual menu on the left half */}
      <motion.div 
        className="w-[25%] bg-[#E9E4DE] h-full overflow-y-auto shadow-xl"
        variants={menuVariants}
      >
        <div className="flex justify-end p-4">
          <motion.button 
            onClick={onClose} 
            className="text-ankan-brown transition-transform duration-300 hover:scale-110 hover:rotate-90"
            whileHover={{ rotate: 90 }}
          >
            <X size={24} />
          </motion.button>
        </div>

        <div className="p-8">
          <nav className="flex flex-col gap-6 text-2xl items-center text-center">
            {menuItems.map((item, i) => {
              if (item.type === 'header') {
                return (
                  <motion.h2 
                    key={`header-${i}`}
                    className="text-3xl font-medium mt-6 mb-4 w-full text-center relative"
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <span className="relative">
                      {item.text}
                      <motion.span 
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-ankan-brown" 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      />
                    </span>
                  </motion.h2>
                );
              } else {
                return (
                  <motion.div
                    key={`link-${i}`}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full text-center"
                  >
                    <Link 
                      to={item.path} 
                      className={`${item.isHeader ? "text-4xl font-semibold" : "text-xl"} transition-all duration-300 hover:text-ankan-brown w-full inline-block relative group`} 
                      onClick={onClose}
                    >
                      {item.text}
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-ankan-brown scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </motion.div>
                );
              }
            })}
          </nav>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;