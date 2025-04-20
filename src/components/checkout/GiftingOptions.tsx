import React, { useState } from 'react';
import { Gift } from 'lucide-react';

interface GiftingOptionsProps {
  onContinue: () => void;
  onBack: () => void;
}

const GiftingOptions: React.FC<GiftingOptionsProps> = ({ onContinue, onBack }) => {
  const [isGift, setIsGift] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [giftCardCode, setGiftCardCode] = useState('');
  const [appliedGiftCard, setAppliedGiftCard] = useState<string | null>(null);
  
  const handleGiftToggle = () => {
    setIsGift(!isGift);
  };
  
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGiftMessage(e.target.value);
  };
  
  const handleGiftCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGiftCardCode(e.target.value);
  };
  
  const applyGiftCard = () => {
    if (giftCardCode) {
      setAppliedGiftCard(giftCardCode);
      setGiftCardCode('');
      // Here you would typically validate the gift card with an API
    }
  };
  
  const removeGiftCard = () => {
    setAppliedGiftCard(null);
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-md">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-6">Gifting Options</h2>
        
        <div className="mb-6">
          <div className="flex items-start mb-4">
            <div className="flex items-center h-5">
              <input
                id="isGift"
                type="checkbox"
                checked={isGift}
                onChange={handleGiftToggle}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
            </div>
            <label htmlFor="isGift" className="ml-3 flex items-center">
              <Gift size={18} className="mr-2 text-gray-500" />
              <span className="text-gray-700">This order is a gift</span>
            </label>
          </div>
          
          {isGift && (
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <label htmlFor="giftMessage" className="block text-sm font-medium text-gray-700 mb-2">
                Add a gift message (optional)
              </label>
              <textarea
                id="giftMessage"
                rows={4}
                value={giftMessage}
                onChange={handleMessageChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                placeholder="Enter your gift message here..."
                maxLength={200}
              />
              <p className="text-sm text-gray-500 mt-1">
                {giftMessage.length}/200 characters
              </p>
              
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="hidePrice"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label htmlFor="hidePrice" className="ml-2 text-sm text-gray-700">
                  Hide prices on the packing slip
                </label>
              </div>
              
              <div className="mt-3">
                <input
                  type="checkbox"
                  id="giftWrap"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label htmlFor="giftWrap" className="ml-2 text-sm text-gray-700">
                  Add gift wrapping (+₹150)
                </label>
              </div>
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-3">Gift Cards & Promo Codes</h3>
          
          {appliedGiftCard ? (
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Gift Card Applied</p>
                  <p className="text-sm text-gray-600">
                    {appliedGiftCard.substring(0, 4)}****{appliedGiftCard.substring(appliedGiftCard.length - 4)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={removeGiftCard}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <input
                type="text"
                placeholder="Enter gift card or promo code"
                value={giftCardCode}
                onChange={handleGiftCardChange}
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <button
                type="button"
                onClick={applyGiftCard}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-300"
              >
                Apply
              </button>
            </div>
          )}
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
          onClick={onContinue}
          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default GiftingOptions;