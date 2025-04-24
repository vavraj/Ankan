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
import { cn } from '@/lib/utils';

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
    <header className='bg-[#58504D] p-2'>
      <div className='bg-[#69615F] rounded-lg'>
      <div className="min-w-full  text-white py-3 z-50">
        <div className="container flex items-center justify-between">
          <div>
            <Link to="/" className="">
              <img 
                src="/lovable-uploads/logo2.png" 
                alt="Ankan Small Logo" 
                className="w-8 h-8 -translate-x-[20px]" 

              />
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img 
                src="/ankanwhite.png" 
                alt="Ankan" 
                className="h-8" 
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-6 translate-x-[40px]">
            <Link to="/cart" className="hover:text-gray-200">
              <ShoppingCart size={24} />
            </Link>
            <Link to="/account" className="hover:text-gray-200">
              <User size={24} />
            </Link>
            <button 
              className="hover:text-gray-200"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={24} />
            </button>
            <button 
              className="hover:text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
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

  </div>
    </header>
  );
};

export default Navbar;
