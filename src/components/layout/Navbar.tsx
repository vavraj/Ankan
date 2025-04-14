
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
    <header>
      {/* Top navbar with icons */}
      <div className="bg-[#635651] text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <Link to="/" className="ml-2">
              <img 
                src="/lovable-uploads/670d19da-f457-4457-8577-c99d89c28663.png" 
                alt="Ankan Small Logo" 
                className="w-6 h-6" 
              />
            </Link>
          </div>
          
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/37000d57-adc7-438e-bae2-2514f602eac5.png" 
                alt="Ankan" 
                className="h-6" 
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/cart" className="hover:text-gray-200">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/account" className="hover:text-gray-200">
              <User size={20} />
            </Link>
            <button 
              className="hover:text-gray-200"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="hover:text-gray-200"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation links - not shown on mobile */}
      <div className="hidden md:block bg-[#e9e5df] py-3">
        <div className="container mx-auto">
          <nav className="flex justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link to="/collections" className="text-gray-800 hover:text-ankan-brown font-medium">
                  SHOP
                </Link>
              </li>
              <li className="relative group">
                <button className="text-gray-800 hover:text-ankan-brown font-medium flex items-center">
                  ABOUT
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
                  <Link to="/about-paitkar" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    About Paitkar
                  </Link>
                  <Link to="/makers" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Our Artisans
                  </Link>
                </div>
              </li>
              <li>
                <Link to="/support-artisan" className="text-gray-800 hover:text-ankan-brown font-medium">
                  SUPPORT ARTISAN
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-gray-800 hover:text-ankan-brown font-medium">
                  WORKSHOPS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-ankan-brown font-medium">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
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
