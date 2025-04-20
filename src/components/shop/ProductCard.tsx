
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, ShoppingCart } from 'lucide-react';

// interface ProductCardProps {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
//   return (
//     <div className="group relative border-t border-gray-200 pt-4 pb-2">
//       <div className="relative mb-4">
//         <Link to={`/product/${id}`}>
//           <img 
//             src={image} 
//             alt={title} 
//             className="w-full h-48 object-contain"
//           />
//         </Link>
//         <button 
//           className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black bg-white/80 rounded-full"
//           aria-label="Add to wishlist"
//         >
//           <Heart size={18} />
//         </button>
//       </div>
      
//       <div className="flex flex-col items-center">
//         <Link to={`/product/${id}`} className="text-center">
//           <h3 className="font-medium text-sm">{title}</h3>
//           <p className="text-sm mt-1">₹ {price}</p>
//         </Link>
        
//         <button 
//           className="mt-2 p-1 text-gray-600 hover:text-black"
//           aria-label="Add to cart"
//         >
//           <ShoppingCart size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  
  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
  };
  
  const handleAddToCart = () => {
    setShowCartMessage(true);
    setTimeout(() => setShowCartMessage(false), 2000);
  };

  return (
    <div className="group relative border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-lg">
      {/* Notification message */}
      {showCartMessage && (
        <div className="absolute top-2 left-0 right-0 mx-auto w-4/5 bg-green-100 text-green-800 text-xs text-center py-1 px-2 rounded-md z-10 animate-fade-in">
          Product added to cart!
        </div>
      )}
      
      <div className="relative mb-4 overflow-hidden">
        <Link to={`/product/${id}`}>
          <div className="overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        
        <button 
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300
            ${isWishlisted 
              ? 'bg-red-100 text-red-500' 
              : 'bg-white/90 text-gray-400 hover:text-red-500 hover:bg-red-50'}`}
          aria-label="Add to wishlist"
          onClick={handleWishlistClick}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="flex flex-col items-center">
        <Link to={`/product/${id}`} className="text-center w-full">
          <h3 className="font-medium text-sm line-clamp-2 h-10 mb-1">{title}</h3>
          <p className="text-sm font-semibold">₹ {price.toLocaleString('en-IN')}</p>
        </Link>
        
        <button 
          className="mt-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md w-full transition-all duration-300 hover:scale-105"
          aria-label="Add to cart"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={16} className="mr-2" />
          <span className="text-xs font-medium">ADD TO CART</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;