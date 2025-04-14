
import React from 'react';

interface CheckoutStepsProps {
  currentStep: number;
  steps: {
    number: number;
    title: string;
  }[];
}

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="space-y-8 my-8">
      {steps.map((step) => (
        <div key={step.number} className="border-b border-gray-200 pb-8">
          <div className="flex items-center mb-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= step.number ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {step.number}
            </div>
            <h2 className="ml-4 text-lg font-medium uppercase">{step.title}</h2>
          </div>
          
          {currentStep === step.number && (
            <div className="pl-12">
              {step.number === 1 && (
                <div>
                  <p className="mb-2">Mr. Jhon Newman</p>
                  <p className="mb-2">Mumbai</p>
                  <p className="mb-2">Mumbai, 2003000 India</p>
                  <p>+91 7538867757</p>
                </div>
              )}
              
              {step.number === 2 && (
                <div>
                  <p className="mb-2">Gift Message - Handwritten crate by artisans</p>
                  <p>No Gift message</p>
                </div>
              )}
              
              {step.number === 3 && (
                <div>
                  <p className="mb-2">VISA</p>
                  <p className="mb-2">****1827</p>
                  <p>Expires 07/2025</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
