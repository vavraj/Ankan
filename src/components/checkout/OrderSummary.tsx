import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface OrderItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  style: string;
  color: string;
}

interface OrderSummaryProps {
  orderData: {
    items: OrderItem[];
    estimatedDelivery: string;
    shipping: number;
    subtotal: number;
    tax: number;
    total: number;
  };
  isDetailsVisible: boolean;
  toggleDetails: () => void;
  isConfirmation?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ 
  orderData, 
  isDetailsVisible, 
  toggleDetails,
  isConfirmation = false
}) => {
  const { items, estimatedDelivery, shipping, subtotal, tax, total } = orderData;
  
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-md sticky top-6">
      <div className="p-6">
        <h2 className="text-lg font-medium mb-4">
          {isConfirmation ? 'Order Summary' : 'Cart Summary'}
        </h2>
        
        <div className="border-b border-gray-200 pb-4 mb-4">
          <button
            className="flex items-center justify-between w-full text-left mb-3"
            onClick={toggleDetails}
          >
            <span className="font-medium">
              {items.length} {items.length === 1 ? 'item' : 'items'} in cart
            </span>
            {isDetailsVisible ? 
              <ChevronUp size={18} className="text-gray-500" /> : 
              <ChevronDown size={18} className="text-gray-500" />
            }
          </button>
          
          {isDetailsVisible && (
            <div className="space-y-4 mt-4">
              {items.map(item => (
                <div key={item.id} className="flex items-start">
                  <div className="w-16 h-16 border border-gray-200 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">Style: {item.style}</p>
                    <p className="text-xs text-gray-500">Color: {item.color}</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                      <span className="text-sm">₹ {item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span>₹ {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Shipping</span>
            <span>{shipping === 0 ? 'Free' : `₹ ${shipping}`}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Tax</span>
            <span>₹ {tax}</span>
          </div>
          {isDetailsVisible && (
            <div className="text-sm text-gray-500 mt-2 mb-4">
              <p>Estimated delivery: {estimatedDelivery}</p>
            </div>
          )}
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex justify-between font-medium text-lg">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>
          
          {isConfirmation && (
            <div className="mt-4 pt-4 border-t text-sm text-gray-600">
              <p className="mb-2">Your order has been confirmed and will be shipped soon.</p>
              <p>Order #AN78562394</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;