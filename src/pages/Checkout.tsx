
// import React from 'react';
// import CheckoutSteps from '@/components/checkout/CheckoutSteps';
// import OrderSummary from '@/components/checkout/OrderSummary';

// const Checkout = () => {
//   const steps = [
//     { number: 1, title: 'Shipping Address' },
//     { number: 2, title: 'Gifting' },
//     { number: 3, title: 'Payment' },
//   ];
  
//   const orderData = {
//     items: [
//       {
//         id: '6',
//         title: 'Krishna and Gopiyan',
//         price: 3000,
//         image: '/lovable-uploads/c792593b-eafa-4374-b050-ca9e82ad1c03.png',
//         quantity: 1,
//         style: 'B26157 SG01.102',
//         color: 'Mud and greens',
//       },
//     ],
//     estimatedDelivery: 'Jun 01',
//     shipping: 0,
//     subtotal: 3000,
//     tax: 153,
//     total: 3000,
//   };
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-5xl mx-auto">
//         <div className="bg-gray-100 p-4 mb-8">
//           <p className="font-medium">YOUR ARE CHECKING OUT AS</p>
//           <p>john2023752@gmail.com</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="md:col-span-2">
//             <CheckoutSteps currentStep={3} steps={steps} />
//           </div>
          
//           <div>
//             <OrderSummary orderData={orderData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '@/components/checkout/CheckoutSteps';
import OrderSummary from '@/components/checkout/OrderSummary';
import ShippingAddressForm from '@/components/checkout/ShippingAddressForm';
import GiftingOptions from '@/components/checkout/GiftingOptions';
import PaymentMethods from '@/components/checkout/PaymentMethods';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderDetailsVisible, setOrderDetailsVisible] = useState(false);
  const navigate = useNavigate();

  const steps = [
    { number: 1, title: 'Shipping Address' },
    { number: 2, title: 'Gifting' },
    { number: 3, title: 'Payment' },
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
    total: 3000,
  };

  const handleContinue = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step: redirect to order confirmation page
      navigate('/order-confirmation');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleOrderDetails = () => {
    setOrderDetailsVisible(!orderDetailsVisible);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-100 p-4 mb-8">
          <p className="font-medium">YOU ARE CHECKING OUT AS</p>
          <p>john2023752@gmail.com</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CheckoutSteps currentStep={currentStep} steps={steps} />

            <div className="mt-8">
              {currentStep === 1 && (
                <ShippingAddressForm onContinue={handleContinue} />
              )}

              {currentStep === 2 && (
                <GiftingOptions
                  onContinue={handleContinue}
                  onBack={handleBack}
                />
              )}

              {currentStep === 3 && (
                <PaymentMethods
                  onContinue={handleContinue}
                  onBack={handleBack}
                />
              )}
            </div>
          </div>

          <div>
            <OrderSummary
              orderData={orderData}
              isDetailsVisible={orderDetailsVisible}
              toggleDetails={toggleOrderDetails}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
