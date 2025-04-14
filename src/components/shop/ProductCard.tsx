
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  return (
    <div className="group relative border-t border-gray-200 pt-4 pb-2">
      <div className="relative mb-4">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-contain"
          />
        </Link>
        <button 
          className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black bg-white/80 rounded-full"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>
      
      <div className="flex flex-col items-center">
        <Link to={`/product/${id}`} className="text-center">
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-sm mt-1">₹ {price}</p>
        </Link>
        
        <button 
          className="mt-2 p-1 text-gray-600 hover:text-black"
          aria-label="Add to cart"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
