
import React from 'react';
import { Check, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface OrderSummaryProps {
  orderData: {
    items: {
      id: string;
      title: string;
      price: number;
      image: string;
      quantity: number;
      style: string;
      color: string;
    }[];
    estimatedDelivery: string;
    shipping: number;
    subtotal: number;
    tax: number;
    total: number;
  };
  isConfirmation?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderData, isConfirmation }) => {
  const navigate = useNavigate();
  
  const handlePlaceOrder = () => {
    // In a real app, you would submit the order to your backend here
    // and then redirect to the confirmation page after successful submission
    navigate('/order-confirmation');
  };
  
  return (
    <div className="border rounded p-6 space-y-6">
      <h2 className="text-xl text-center mb-6">1 Item</h2>
      
      {orderData.items.map((item) => (
        <div key={item.id} className="pb-4 border-b">
          <div className="flex gap-4">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">Style {item.style}</p>
              <p className="text-sm text-gray-600">{item.color}</p>
              <p className="mt-2">Estimated delivery on {orderData.estimatedDelivery}</p>
            </div>
            <div className="text-right">
              <p>QTY: {item.quantity}</p>
              <p className="mt-2">₹ {item.price}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="space-y-2 pb-4 border-b">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {orderData.subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{orderData.shipping === 0 ? '0 (DHL Express Worldwide)' : `₹ ${orderData.shipping}`}</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>₹ {orderData.total}</span>
        </div>
        <div className="flex justify-between">
          <span>VAT (Included)</span>
          <span>₹ {orderData.tax}</span>
        </div>
      </div>
      
      {!isConfirmation ? (
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm">
              I agree to the current conditions of sale and I have read and understand the privacy policy.
              <a href="#" className="block text-black hover:underline mt-1">Read more</a>
            </label>
          </div>
          
          <div className="flex items-start gap-2">
            <div className="mt-1">
              <Check size={16} className="text-black" />
            </div>
            <p className="text-sm">
              I would like to receive updates about ankan new activities, exclusive product, tailored services and to have a personalized chat experience based on my interests.
            </p>
          </div>
          
          <button 
            className="ankan-btn-primary w-full py-3 mt-4"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
          
          <div className="flex justify-between items-center pt-4 border-t">
            <span>View Details</span>
            <Plus size={16} />
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <div className="bg-green-800 text-white w-16 h-16 mx-auto rounded-full flex items-center justify-center">
            <Check size={32} />
          </div>
          <p className="font-medium text-lg">Your Order Has Been Placed</p>
          <p className="text-gray-600">Order #AN78562394</p>
          <p className="text-gray-600">Thank you for your purchase!</p>
          
          <div className="flex justify-between items-center pt-4 border-t">
            <span>View Details</span>
            <Plus size={16} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
