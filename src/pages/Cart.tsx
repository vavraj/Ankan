
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import CartItem from '@/components/cart/CartItem';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: '6',
//       title: 'Krishna & Gopiya',
//       price: 3000,
//       image: '/lovable-uploads/c792593b-eafa-4374-b050-ca9e82ad1c03.png',
//       quantity: 1,
//       style: 'B26157 SG01.102',
//       color: 'Mud and greens',
//     },
//   ]);
  
//   const removeItem = (id: string) => {
//     setCartItems(cartItems.filter(item => item.id !== id));
//   };
  
//   const updateQuantity = (id: string, quantity: number) => {
//     setCartItems(cartItems.map(item => 
//       item.id === id ? { ...item, quantity } : item
//     ));
//   };
  
//   const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//   const shipping = 0; // Free shipping
//   const total = subtotal + shipping;
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-medium mb-6">Shopping Bag</h1>
      
//       {cartItems.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-lg mb-4">Your shopping bag is empty</p>
//           <Link to="/collections" className="ankan-btn-primary">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             {cartItems.map(item => (
//               <CartItem 
//                 key={item.id} 
//                 item={item} 
//                 onRemove={removeItem} 
//                 onUpdateQuantity={updateQuantity} 
//               />
//             ))}
//           </div>
          
//           <div className="bg-gray-50 p-6 h-fit">
//             <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
//             <div className="border-b border-gray-200 pb-4 mb-4">
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal</span>
//                 <span>₹ {subtotal}</span>
//               </div>
//               <div className="flex justify-between mb-2">
//                 <span>Shipping</span>
//                 <span>{shipping === 0 ? 'Free' : `₹ ${shipping}`}</span>
//               </div>
//             </div>
            
//             <div className="flex justify-between font-medium mb-6">
//               <span>Total</span>
//               <span>₹ {total}</span>
//             </div>
            
//             <Link to="/checkout" className="ankan-btn-primary w-full">
//               Proceed to Checkout
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '@/components/cart/CartItem';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '6',
      title: 'Krishna & Gopiya',
      price: 3000,
      image: '/lovable-uploads/krishna.png',
      quantity: 1,
      style: 'B26157 SG01.102',
      color: 'Mud and greens',
    },
    {
      id: '8',
      title: 'Subtle Breeze',
      price: 2200,
      image: '/lovable-uploads/subtlebreeze.png',
      quantity: 2,
      style: 'A38291 LT04.201',
      color: 'Blue and gold',
    },
    {
      id: '12',
      title: 'Tales Untold',
      price: 2800,
      image: '/lovable-uploads/tales.png',
      quantity: 1,
      style: 'G19427 HM05.304',
      color: 'Red and ivory',
    },
    {
      id: '15',
      title: 'Melt',
      price: 3200,
      image: '/lovable-uploads/melt.png',
      quantity: 1,
      style: 'P72184 DR09.116',
      color: 'Turquoise and indigo',
    }
  ]);
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };
  
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-semibold flex items-center">
          <ShoppingBag className="mr-3" size={24} />
          Your Shopping Bag
          <span className="ml-2 text-lg text-gray-500 font-normal">({itemCount} items)</span>
        </h1>
        <Link to="/collections" className="text-ankan-brown hover:text-ankan-black font-medium">
          Continue Shopping
        </Link>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <p className="text-xl mb-6 text-gray-600">Your shopping bag is empty</p>
          <Link to="/collections" className="bg-lime-900 text-white py-3 px-6 rounded-md hover:bg-lime-950 transition-colors inline-flex items-center">
            Explore Collection
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {cartItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <CartItem 
                    item={item} 
                    onRemove={removeItem} 
                    onUpdateQuantity={updateQuantity} 
                  />
                  {index < cartItems.length - 1 && <div className="border-b border-gray-100"></div>}
                </React.Fragment>
              ))}
              <div className="p-4 bg-gray-50 text-sm">
                <p className="text-gray-600">All items in your cart are eligible for free shipping.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-100">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">₹ {subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">{shipping === 0 ? 'Free' : `₹ ${shipping}`}</span>
                </div>
                {subtotal < 5000 && (
                  <div className="text-sm text-green-600 mt-2">
                    Add ₹{(5000 - subtotal).toLocaleString('en-IN')} more to qualify for a special gift!
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>₹ {total.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">Tax included. Shipping calculated at checkout.</div>
              </div>
              
              <Link to="/checkout" className="bg-ankan-brown text-white py-3 px-6 rounded-md hover:bg-ankan-darkBrown transition-colors block text-center font-medium">
                Proceed to Checkout
              </Link>
              
              {/* <div className="mt-6 flex items-center justify-center space-x-4">
                <img src="/payment-icons/visa.svg" alt="Visa" className="h-6" />
                <img src="/payment-icons/mastercard.svg" alt="Mastercard" className="h-6" />
                <img src="/payment-icons/amex.svg" alt="American Express" className="h-6" />
                <img src="/payment-icons/paypal.svg" alt="PayPal" className="h-6" />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;