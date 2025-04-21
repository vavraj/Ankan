import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import OrderSummary from '@/components/checkout/OrderSummary';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const OrderConfirmation = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);
  
  const toggleDetails = () => {
    setIsDetailsVisible(prev => !prev);
  };

  const steps = [
    { number: 1, title: 'Shipping Address' },
    { number: 2, title: 'Gifting' },
    { number: 3, title: 'Payment' },
    { number: 4, title: 'Confirmation' }
  ];
  
  const orderData = {
    items: [
      {
        id: '6',
        title: 'Krishna and Gopiyan',
        price: 3000,
        image: '/lovable-uploads/krishna.png',
        quantity: 1,
        style: 'B26157 SG01.102',
        color: 'Mud and greens',
      },
    ],
    estimatedDelivery: 'Jun 01',
    shipping: 0,
    subtotal: 3000,
    tax: 153,
    total: 3153,
  };
  
  return (
    <div className="bg-ankan-beige min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Confirmation Message */}
          <div className="bg-white p-8 rounded-md shadow-md mb-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* <Check className="w-8 h-8 text-green-600" /> */}
              <img src="/lovable-uploads/shoppingCart.png" alt="" />
            </div>
            <h1 className="text-2xl font-bold mb-2">ORDER PLACED SUCCESSFULLY</h1>
            <p className="text-gray-600 mb-4">Order #AN78562394 | john2023752@gmail.com</p>
            <p className="mb-6">
              Thank you for your order! We're getting everything ready and will notify you when it ships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-ankan-brown hover:bg-ankan-brown/90 text-white px-6">
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/account">
                <Button variant="outline" className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10 px-6">
                  View Account
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-md shadow-md mb-8">
                <h2 className="text-xl font-medium mb-6 pb-4 border-b">Order Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-medium mb-2">Shipping Address</h3>
                    <p className="text-gray-600">
                      John Doe<br />
                      123 Main Street<br />
                      Apartment 4B<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Payment Method</h3>
                    <p className="text-gray-600">
                      Credit Card (Visa) ending in 4242
                    </p>
                    
                    <h3 className="font-medium mt-6 mb-2">Shipping Method</h3>
                    <p className="text-gray-600">
                      Standard Shipping<br />
                      Estimated delivery: {orderData.estimatedDelivery}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-4">Order Items</h3>
                  {orderData.items.map(item => (
                    <div key={item.id} className="flex items-center gap-4 mb-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-gray-600 text-sm">Style: {item.style}</p>
                        <p className="text-gray-600 text-sm">Color: {item.color}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹{item.price.toLocaleString()}</p>
                        <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect final step properly */}
              <CheckoutSteps currentStep={5} steps={steps} />
            </div>

            {/* Order Summary Card */}
            <div>
              <OrderSummary 
                orderData={orderData} 
                isDetailsVisible={isDetailsVisible}
                toggleDetails={toggleDetails}
                isConfirmation={true} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;