import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from "@/components/ui/command";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Sample search data - in a real app, this would come from your product database
  const searchItems = [
    { id: '1', title: 'Ethereal HER', category: 'Art' },
    { id: '2', title: 'Mystic Woods', category: 'Art' },
    { id: '6', title: 'Krishna & Gopiya', category: 'Art' },
    { id: '11', title: 'Cover in Style', category: 'Scarves' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-[#58504D] p-2 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="bg-[#69615F] rounded-lg transition-all duration-300 hover:shadow-inner">
        <div className="min-w-full text-white py-3 z-50">
          <div className="container flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="transition-transform duration-300 hover:scale-110">
                <img 
                  src="/lovable-uploads/logo2.png" 
                  alt="Ankan Small Logo" 
                  className="w-8 h-8" 
                />
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/" className="transition-all duration-300 hover:opacity-80">
                <img 
                  src="/ankanwhite.png" 
                  alt="Ankan" 
                  className="h-8" 
                />
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/cart" className="hover:text-gray-200 transition-transform duration-300 hover:scale-110">
                <ShoppingCart size={24} />
              </Link>
              <Link to="/account" className="hover:text-gray-200 transition-transform duration-300 hover:scale-110">
                <User size={24} />
              </Link>
              <button 
                className="hover:text-gray-200 transition-transform duration-300 hover:scale-110"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button 
                className="hover:text-gray-200 transition-transform duration-300 hover:scale-110"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <Menu size={24} />
              </button>
            </motion.div>
          </div>
        </div>
        
        <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
          <CommandInput placeholder="Search for products..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Products">
              {searchItems.map((item) => (
                <CommandItem 
                  key={item.id}
                  onSelect={() => {
                    setSearchOpen(false);
                    window.location.href = `/product/${item.id}`;
                  }}
                >
                  {item.title}
                  <span className="ml-2 text-sm text-gray-500">{item.category}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu onClose={() => setMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;