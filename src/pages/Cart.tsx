
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '@/components/cart/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '6',
      title: 'Krishna & Gopiya',
      price: 3000,
      image: '/lovable-uploads/c792593b-eafa-4374-b050-ca9e82ad1c03.png',
      quantity: 1,
      style: 'B26157 SG01.102',
      color: 'Mud and greens',
    },
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
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-6">Shopping Bag</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Your shopping bag is empty</p>
          <Link to="/collections" className="ankan-btn-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item} 
                onRemove={removeItem} 
                onUpdateQuantity={updateQuantity} 
              />
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 h-fit">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `₹ ${shipping}`}</span>
              </div>
            </div>
            
            <div className="flex justify-between font-medium mb-6">
              <span>Total</span>
              <span>₹ {total}</span>
            </div>
            
            <Link to="/checkout" className="ankan-btn-primary w-full">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
