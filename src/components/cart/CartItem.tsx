
import React from 'react';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  item: {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
    style: string;
    color: string;
  };
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  onRemove, 
  onUpdateQuantity 
}) => {
  return (
    <div className="border-b border-gray-200 py-4 flex">
      <div className="w-24 h-24 flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600">Style {item.style}</p>
            <p className="text-sm text-gray-600">{item.color}</p>
          </div>
          
          <p className="font-medium">₹ {item.price}</p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <button 
              className="w-8 h-8 border border-gray-300 flex items-center justify-center"
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
            >
              -
            </button>
            <span className="w-8 h-8 border-t border-b border-gray-300 flex items-center justify-center">
              {item.quantity}
            </span>
            <button 
              className="w-8 h-8 border border-gray-300 flex items-center justify-center"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
          </div>
          
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
