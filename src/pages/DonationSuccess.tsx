
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const DonationSuccess = () => {
  return (
    <div className="bg-ankan-beige min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Message Card */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md mb-8 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Check className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <motion.h1 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Thank You for Your Support!
            </motion.h1>
            
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your generous contribution will help preserve traditional Paitkar art and support our artisan community.
            </motion.p>
            
            <motion.div 
              className="text-lg font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Donation Amount: ₹<span className="text-ankan-brown">5,000</span>
            </motion.div>

            {/* Support Impact Section */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="p-4 bg-ankan-beige rounded-lg">
                <h3 className="font-medium mb-2">Preserves Tradition</h3>
                <p className="text-sm text-gray-600">Helps maintain ancient art forms</p>
              </div>
              <div className="p-4 bg-ankan-beige rounded-lg">
                <h3 className="font-medium mb-2">Supports Livelihood</h3>
                <p className="text-sm text-gray-600">Provides sustainable income</p>
              </div>
              <div className="p-4 bg-ankan-beige rounded-lg">
                <h3 className="font-medium mb-2">Empowers Community</h3>
                <p className="text-sm text-gray-600">Strengthens artisan families</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/workshops">
                <Button 
                  className="bg-ankan-brown hover:bg-ankan-brown/90 text-white px-6"
                >
                  Book a Workshop
                </Button>
              </Link>
              <Link to="/collections">
                <Button 
                  variant="outline"
                  className="border-ankan-brown text-ankan-brown hover:bg-ankan-brown/10 px-6"
                >
                  Explore Collection
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Digital Certificate */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="text-xl font-medium mb-4">Digital Certificate of Support</h2>
            <p className="text-gray-600 mb-6">
              We'll send you a digital certificate of your contribution to your email address.
              Thank you for being a patron of traditional arts!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccess;
