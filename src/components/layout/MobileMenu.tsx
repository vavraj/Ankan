
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-ankan-beige z-50 overflow-y-auto">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-ankan-brown">
          <X size={24} />
        </button>
      </div>
      
      <div className="p-8">
        <nav className="flex flex-col gap-6">
          <h2 className="text-2xl font-medium mb-4">EXPLORE OUR COLLECTION</h2>
          <Link to="/collections" className="text-lg" onClick={onClose}>ADOPT AN ARTISAN</Link>
          <Link to="/workshops" className="text-lg" onClick={onClose}>BOOK A WORKSHOP</Link>
          <Link to="/rewards" className="text-lg" onClick={onClose}>REWARDS</Link>
          
          <h2 className="text-2xl font-medium mt-6 mb-4">ANKAN WORLD</h2>
          <Link to="/makers" className="text-lg" onClick={onClose}>MEET THE MAKERS</Link>
          <Link to="/about" className="text-lg" onClick={onClose}>LOVE IT AS WE DO</Link>
          
          <h2 className="text-2xl font-medium mt-6 mb-4">ACCOUNT</h2>
          <Link to="/login" className="text-lg" onClick={onClose}>SIGN IN</Link>
          <Link to="/orders" className="text-lg" onClick={onClose}>MY ORDERS</Link>
          <Link to="/contact" className="text-lg" onClick={onClose}>CONTACT US</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
