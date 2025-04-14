
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="text-2xl font-medium text-center mb-8">MY ANKAN ACCOUNT</h1>
      
      <div className="space-y-4">
        <button className="w-full py-3 px-4 border rounded flex items-center justify-center gap-2">
          <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
          <span>CONTINUE WITH GOOGLE</span>
        </button>
        
        <button className="w-full py-3 px-4 border rounded flex items-center justify-center gap-2">
          <img src="/apple-logo.svg" alt="Apple" className="w-5 h-5" />
          <span>CONTINUE WITH APPLE</span>
        </button>
      </div>
      
      <div className="flex items-center my-6">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500">OR</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-medium text-center mb-2">CONTINUE WITH YOUR EMAIL ADDRESS</h2>
        <p className="text-center text-sm text-gray-600">Sign in with your email and password or create a profile if you are new</p>
        
        <div className="mt-6">
          <input
            type="email"
            placeholder="Email*"
            className="ankan-input mb-4"
          />
          
          <button className="ankan-btn-primary w-full">CONTINUE</button>
        </div>
      </div>
      
      <div className="border-t border-gray-300 pt-8">
        <h2 className="text-xl font-medium text-center mb-8">JOIN ANKAN</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-medium mb-4">TRACK YOUR ORDERS</h3>
            <p className="text-sm text-gray-600">Follow your orders every step of the way.</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">STREAMLINE CHECKOUTS</h3>
            <p className="text-sm text-gray-600">Checkout faster with saved addresses and payment methods.</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">REGISTER FOR WORKSHOP</h3>
            <p className="text-sm text-gray-600">Plan a personalized visit at a store or virtually in the Digital Showroom.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
