import React, { useState } from 'react';
import { CreditCard, Wallet, CheckCircle } from 'lucide-react';

interface PaymentMethodsProps {
  onContinue: () => void;
  onBack: () => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onContinue, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiryDate: '',
    cvv: ''
  });
  
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };
  
  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-md">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-6">Payment Method</h2>
        
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className={`border rounded-md p-4 cursor-pointer ${
                paymentMethod === 'card' ? 'border-gray-800 bg-gray-50' : 'border-gray-200'
              }`}
              onClick={() => handlePaymentMethodChange('card')}
            >
              <div className="flex items-center">
                <CreditCard size={18} className="mr-2" />
                <span className="font-medium">Credit/Debit Card</span>
                {paymentMethod === 'card' && (
                  <CheckCircle size={16} className="ml-auto text-green-600" />
                )}
              </div>
            </div>
            <div
              className={`border rounded-md p-4 cursor-pointer ${
                paymentMethod === 'upi' ? 'border-gray-800 bg-gray-50' : 'border-gray-200'
              }`}
              onClick={() => handlePaymentMethodChange('upi')}
            >
              <div className="flex items-center">
                <Wallet size={18} className="mr-2" />
                <span className="font-medium">UPI</span>
                {paymentMethod === 'upi' && (
                  <CheckCircle size={16} className="ml-auto text-green-600" />
                )}
              </div>
            </div>
            <div
              className={`border rounded-md p-4 cursor-pointer ${
                paymentMethod === 'cod' ? 'border-gray-800 bg-gray-50' : 'border-gray-200'
              }`}
              onClick={() => handlePaymentMethodChange('cod')}
            >
              <div className="flex items-center">
                <span className="font-medium">Cash on Delivery</span>
                {paymentMethod === 'cod' && (
                  <CheckCircle size={16} className="ml-auto text-green-600" />
                )}
              </div>
            </div>
          </div>
        </div>
        
        {paymentMethod === 'card' && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Card Number*
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                required
                maxLength={19}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                Name on Card*
              </label>
              <input
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                value={cardDetails.nameOnCard}
                onChange={handleCardDetailsChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date*
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleCardDetailsChange}
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                  maxLength={5}
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                  CVV*
                </label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                  maxLength={4}
                />
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="saveCard"
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
                Save this card for future purchases
              </label>
            </div>
          </form>
        )}
        
        {paymentMethod === 'upi' && (
          <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
            <h3 className="font-medium mb-4">UPI Payment</h3>
            
            <div className="mt-4">
              <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                Enter your UPI ID 
              </label>
              <input
                type="text"
                id="upiId"
                placeholder="username@upi"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
          </div>
        )}
        
        {paymentMethod === 'cod' && (
          <div className="bg-gray-50 p-6 rounded-md border border-gray-200">
            <h3 className="font-medium mb-2">Cash on Delivery</h3>
            <p className="text-gray-600 text-sm mb-4">
              Pay with cash when your order is delivered. A nominal fee of ₹40 will be added to your total.
            </p>
            <div className="flex items-center mb-2">
              <CheckCircle size={16} className="text-green-600 mr-2" />
              <span className="text-sm">Available for your pincode</span>
            </div>
          </div>
        )}
        
        <div className="mt-6 bg-gray-50 p-4 rounded-md border border-gray-200">
          <p className="text-sm text-gray-600">
            By proceeding with the payment, you agree to our <a href="/terms" className="text-gray-800 underline">Terms of Service</a> and <a href="/privacy" className="text-gray-800 underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700"
        >
          Place Order
        </button>
        
      </div>
    </div>
  );
};

export default PaymentMethods;