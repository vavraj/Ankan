
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-ankan-brown text-white py-4">
      <div className="flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="mr-2">
            <img 
              src="/ankan-small-logo.svg" 
              alt="Ankan Small Logo" 
              className="w-8 h-8" 
            />
          </Link>
        </div>
        
        <div className="flex-1 flex justify-center">
          <Link to="/">
            <img 
              src="/ankan-logo.svg" 
              alt="Ankan" 
              className="h-6" 
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/cart" className="hover:text-gray-200">
            <ShoppingCart size={20} />
          </Link>
          <Link to="/account" className="hover:text-gray-200">
            <User size={20} />
          </Link>
          <Link to="/search" className="hover:text-gray-200">
            <Search size={20} />
          </Link>
          <button 
            className="hover:text-gray-200 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
