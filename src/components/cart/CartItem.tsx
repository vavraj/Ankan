
// import React from 'react';
// import { Trash2 } from 'lucide-react';

// interface CartItemProps {
//   item: {
//     id: string;
//     title: string;
//     price: number;
//     image: string;
//     quantity: number;
//     style: string;
//     color: string;
//   };
//   onRemove: (id: string) => void;
//   onUpdateQuantity: (id: string, quantity: number) => void;
// }

// const CartItem: React.FC<CartItemProps> = ({ 
//   item, 
//   onRemove, 
//   onUpdateQuantity 
// }) => {
//   return (
//     <div className="border-b border-gray-200 py-4 flex">
//       <div className="w-24 h-24 flex-shrink-0">
//         <img 
//           src={item.image} 
//           alt={item.title} 
//           className="w-full h-full object-contain"
//         />
//       </div>
      
//       <div className="ml-4 flex-1">
//         <div className="flex justify-between">
//           <div>
//             <h3 className="font-medium">{item.title}</h3>
//             <p className="text-sm text-gray-600">Style {item.style}</p>
//             <p className="text-sm text-gray-600">{item.color}</p>
//           </div>
          
//           <p className="font-medium">₹ {item.price}</p>
//         </div>
        
//         <div className="flex items-center justify-between mt-4">
//           <div className="flex items-center">
//             <button 
//               className="w-8 h-8 border border-gray-300 flex items-center justify-center"
//               onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
//             >
//               -
//             </button>
//             <span className="w-8 h-8 border-t border-b border-gray-300 flex items-center justify-center">
//               {item.quantity}
//             </span>
//             <button 
//               className="w-8 h-8 border border-gray-300 flex items-center justify-center"
//               onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//             >
//               +
//             </button>
//           </div>
          
//           <button 
//             className="text-gray-500 hover:text-gray-700"
//             onClick={() => onRemove(item.id)}
//           >
//             <Trash2 size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
import React, { useState } from 'react';
import { Trash2, Heart } from 'lucide-react';

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
  const [isSaved, setIsSaved] = useState(false); // Track if the item is saved

  const handleSaveClick = () => {
    setIsSaved(!isSaved); // Toggle saved state
  };

  return (
    <div className="p-6 flex flex-col sm:flex-row">
      <div className="w-28 h-28 bg-gray-50 rounded p-2 flex-shrink-0 mx-auto sm:mx-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="sm:ml-6 flex-1 mt-4 sm:mt-0">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>
            <h3 className="font-medium text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">Style: {item.style}</p>
            <p className="text-sm text-gray-500">Color: {item.color}</p>
          </div>
          
          <p className="font-semibold text-lg mt-2 sm:mt-0">₹ {item.price.toLocaleString('en-IN')}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mt-6">
          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
            <button 
              className="w-10 h-10 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600"
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              aria-label="Decrease quantity"
            >
              <span className="text-xl font-medium">−</span>
            </button>
            <span className="w-12 h-10 border-l border-r border-gray-200 flex items-center justify-center font-medium">
              {item.quantity}
            </span>
            <button 
              className="w-10 h-10 bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              aria-label="Increase quantity"
            >
              <span className="text-xl font-medium">+</span>
            </button>
          </div>
          
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <button 
              className={`flex items-center ${isSaved ? 'text-red-600' : 'text-gray-400'} hover:text-red-600 transition-colors`}
              onClick={handleSaveClick}
              aria-label="Save for later"
            >
              <Heart size={18} className="mr-1" />
              <span className="text-sm">Save</span>
            </button>
            
            <button 
              className="flex items-center text-gray-400 hover:text-red-600 transition-colors"
              onClick={() => onRemove(item.id)}
              aria-label="Remove item"
            >
              <Trash2 size={18} className="mr-1" />
              <span className="text-sm">Remove</span>
            </button>
          </div>
        </div>
        
        {item.quantity > 1 && (
          <div className="mt-3 text-sm text-gray-500">
            <span>₹ {item.price.toLocaleString('en-IN')} each</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
