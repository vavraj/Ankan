
import React from 'react';
import { Link } from 'react-router-dom';

interface ShoppingBagProps {
  items: {
    id: string;
    title: string;
    price: number;
    image: string;
  }[];
  total: number;
}

const ShoppingBag: React.FC<ShoppingBagProps> = ({ items, total }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
      <div className="max-w-sm mx-auto">
        <h2 className="text-xl font-medium text-center mb-4">SHOPPING BAG</h2>
        
        <div className="max-h-64 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain"
                />
                <p className="ml-4 text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/checkout" className="ankan-btn-primary w-full py-3 mt-4">
          CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default ShoppingBag;
