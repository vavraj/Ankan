import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#E9E4DE]/70 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-ankan-brown">
          <X size={24} />
        </button>
      </div>
      
      <div className="p-8">
        <nav className="flex flex-col gap-6 text-2xl">
          <Link to="/" className="text-4xl font-semibold" onClick={onClose}>HOME</Link>
          
          <h2 className="text-3xl font-medium mt-6 mb-4">SHOP</h2>
          <Link to="/collections" className="text-xl" onClick={onClose}>COLLECTIONS</Link>
          <Link to="/support-artisan" className="text-xl" onClick={onClose}>SUPPORT ARTISAN</Link>
          
          <h2 className="text-3xl font-medium mt-6 mb-4">ABOUT</h2>
          <Link to="/about-paitkar" className="text-xl" onClick={onClose}>About Paitkar</Link>
          <Link to="/makers" className="text-xl" onClick={onClose}>Our Artisans</Link>
          
          <h2 className="text-3xl font-medium mt-6 mb-4">EXPERIENCES</h2>
          <Link to="/workshops" className="text-xl" onClick={onClose}>WORKSHOPS</Link>
          <Link to="/customize" className="text-xl" onClick={onClose}>CUSTOMISE</Link>
          <h2 className="text-3xl font-medium mt-6 mb-4">ACCOUNT</h2>
          <Link to="/account" className="text-xl" onClick={onClose}>MY ACCOUNT</Link>
          <Link to="/cart" className="text-xl" onClick={onClose}>CART</Link>
          <Link to="/rewards" className="text-xl" onClick={onClose}>MY REWARDS</Link>
          <Link to="/contact" className="text-xl" onClick={onClose}>CONTACT US</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
