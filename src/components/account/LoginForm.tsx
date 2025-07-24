import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focused, setFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await login(email, password);
      toast({
        title: "Success",
        description: "Login successful!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const buttonHover = {
    scale: 1.02,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
  };

  return (
    <motion.div 
      className="max-w-md mx-auto py-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.h1 
        className="text-2xl font-medium text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MY ANKAN ACCOUNT
      </motion.h1>
      
      <motion.div 
        className="space-y-4"
        variants={staggerChildren}
      >
        <motion.button 
          className="w-full py-3 px-4 border rounded flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-50"
          whileHover={buttonHover}
          whileTap={{ scale: 0.98 }}
          variants={fadeIn}
        >
          <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
          <span>CONTINUE WITH GOOGLE</span>
        </motion.button>
        
        <motion.button 
          className="w-full py-3 px-4 border rounded flex items-center justify-center gap-1 transition-all duration-300 hover:bg-gray-50"
          whileHover={buttonHover}
          whileTap={{ scale: 0.98 }}
          variants={fadeIn}
        >
          <img src="/apple-logo.png" alt="Apple" className="w-9 h-5" />
          <span>CONTINUE WITH APPLE</span>
        </motion.button>
      </motion.div>
      
      <motion.div 
        className="flex items-center my-6"
        variants={fadeIn}
      >
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500">OR</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </motion.div>
      
      <motion.div 
        className="mb-8"
        variants={fadeIn}
      >
        <motion.h2 
          className="text-lg font-medium text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          CONTINUE WITH YOUR EMAIL ADDRESS
        </motion.h2>
        <motion.p 
          className="text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Sign in with your email and password or create a profile if you are new
        </motion.p>
        
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="mt-6 space-y-4"
            variants={fadeIn}
          >
            <Input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            
            <Input
              type="password"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
            
            <Button 
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SIGNING IN..." : "CONTINUE"}
            </Button>
          </motion.div>
        </form>
      </motion.div>
      
      <motion.div 
        className="border-t border-gray-300 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.h2 
          className="text-xl font-medium text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          JOIN ANKAN
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          variants={staggerChildren}
        >
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="font-medium mb-4">TRACK YOUR ORDERS</h3>
            <p className="text-sm text-gray-600">Follow your orders every step of the way.</p>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="font-medium mb-4">STREAMLINE CHECKOUTS</h3>
            <p className="text-sm text-gray-600">Checkout faster with saved addresses and payment methods.</p>
          </motion.div>
          
          <motion.div
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="font-medium mb-4">REGISTER FOR WORKSHOP</h3>
            <p className="text-sm text-gray-600">Plan a personalized visit at a store or virtually in the Digital Showroom.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;