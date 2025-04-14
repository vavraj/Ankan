
import React from 'react';

const RewardsProgram = () => {
  return (
    <div className="py-16">
      <div className="h-96 bg-cover bg-center relative mb-16" style={{ backgroundImage: `url(/lovable-uploads/c792593b-eafa-4374-b050-ca9e82ad1c03.png)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-6">Main bhi ANKAN</h1>
          <p className="text-xl max-w-2xl text-center">
            Earn 'Maati Coins' on every purchase and redeem them for discounts next time!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-300 p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-6">01</h2>
            <h3 className="text-lg font-medium mb-8">SIGN UP</h3>
            <p className="text-gray-600">
              Sign up as a member to start enjoying the loyalty program
            </p>
          </div>
          
          <div className="border border-gray-300 p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-6">02</h2>
            <h3 className="text-lg font-medium mb-8">EARN POINTS</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Purchase a product</li>
              <li>• Get 1 Ankan Coins for every ₹1 spent</li>
              <li>• Sign up to the site</li>
              <li>• Get 500 Ankan Coins</li>
            </ul>
          </div>
          
          <div className="border border-gray-300 p-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-6">03</h2>
            <h3 className="text-lg font-medium mb-8">REDEEM REWARDS</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Ankan Coins Rewards</li>
              <li>• 50 Ankan Coins = ₹1 discount</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-ankan-beige py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-medium mb-6">STAY CONNECTED</h2>
          <p className="text-gray-600 mb-8">
            Follow us on our social media accounts to get even more fragrant content
          </p>
          
          <div className="flex justify-center space-x-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
              <img src="/facebook-icon.svg" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
              <img src="/instagram-icon.svg" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
              <img src="/youtube-icon.svg" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white">
              <img src="/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsProgram;
