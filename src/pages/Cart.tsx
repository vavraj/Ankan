import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '@/components/cart/CartItem';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
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
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    exit: { 
      opacity: 0, 
      x: -20, 
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      padding: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const summaryAnimation = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.3 }
    }
  };
  
  return (
    <motion.div 
      className="container mx-auto px-4 py-12 max-w-6xl"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div 
        className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4"
        variants={fadeIn}
      >
        <motion.h1 
          className="text-3xl font-semibold flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShoppingBag className="mr-3" size={24} />
          Your Shopping Bag
          <motion.span 
            className="ml-2 text-lg text-gray-500 font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ({itemCount} items)
          </motion.span>
        </motion.h1>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/collections" className="text-ankan-brown hover:text-ankan-black font-medium transition-colors duration-300">
            Continue Shopping
          </Link>
        </motion.div>
      </motion.div>
      
      {cartItems.length === 0 ? (
        <motion.div 
          className="text-center py-16 bg-gray-50 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          </motion.div>
          <motion.p 
            className="text-xl mb-6 text-gray-600"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your shopping bag is empty
          </motion.p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/collections" className="bg-lime-900 text-white py-3 px-6 rounded-md hover:bg-lime-950 transition-colors inline-flex items-center">
              Explore Collection
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight size={16} className="ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              variants={fadeIn}
            >
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    variants={itemAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                  >
                    <CartItem 
                      item={item} 
                      onRemove={removeItem} 
                      onUpdateQuantity={updateQuantity} 
                    />
                    {index < cartItems.length - 1 && (
                      <motion.div 
                        className="border-b border-gray-100"
                        layout
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <motion.div 
                className="p-4 bg-gray-50 text-sm"
                variants={fadeIn}
              >
                <p className="text-gray-600">All items in your cart are eligible for free shipping.</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1"
            variants={summaryAnimation}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white rounded-lg shadow-sm p-6 sticky top-6"
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.h2 
                className="text-xl font-semibold mb-6 pb-4 border-b border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Order Summary
              </motion.h2>
              
              <motion.div 
                className="space-y-3 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.div 
                  className="flex justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">₹ {subtotal.toLocaleString('en-IN')}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600 font-medium">{shipping === 0 ? 'Free' : `₹ ${shipping}`}</span>
                </motion.div>
                {subtotal < 5000 && (
                  <motion.div 
                    className="text-sm text-green-600 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [1, 1.05, 1] }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                  >
                    Add ₹{(5000 - subtotal).toLocaleString('en-IN')} more to qualify for a special gift!
                  </motion.div>
                )}
              </motion.div>
              
              <motion.div 
                className="border-t border-gray-200 pt-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <motion.div 
                  className="flex justify-between text-lg font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.3 }}
                >
                  <span>Total</span>
                  <span>₹ {total.toLocaleString('en-IN')}</span>
                </motion.div>
                <motion.div 
                  className="text-gray-500 text-sm mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                >
                  Tax included. Shipping calculated at checkout.
                </motion.div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <Link to="/checkout" className="bg-ankan-brown text-white py-3 px-6 rounded-md hover:bg-ankan-darkBrown transition-colors block text-center font-medium">
                  Proceed to Checkout
                </Link>
              </motion.div>
              
              {/* <div className="mt-6 flex items-center justify-center space-x-4">
                <img src="/payment-icons/visa.svg" alt="Visa" className="h-6" />
                <img src="/payment-icons/mastercard.svg" alt="Mastercard" className="h-6" />
                <img src="/payment-icons/amex.svg" alt="American Express" className="h-6" />
                <img src="/payment-icons/paypal.svg" alt="PayPal" className="h-6" />
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;