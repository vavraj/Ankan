
import React, { useState } from 'react';
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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Sample search data - in a real app, this would come from your product database
  const searchItems = [
    { id: '1', title: 'Ethereal HER', category: 'Art' },
    { id: '2', title: 'Mystic Woods', category: 'Art' },
    { id: '6', title: 'Krishna & Gopiya', category: 'Art' },
    { id: '11', title: 'Cover in Style', category: 'Scarves' },
  ];

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
          <button 
            className="hover:text-gray-200"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={20} />
          </button>
          <button 
            className="hover:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
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
      
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
