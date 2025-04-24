import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const RewardsProgram = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(item => {
      observer.observe(item);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="bg-ankan-brown text-ankan-lightBeige overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[600px] bg-cover bg-center relative mb-24" 
        style={{ backgroundImage: `url(/lovable-uploads/backgrounds/bg1.png)` }}
      >
        <div className="absolute inset-0 bg-ankan-brown bg-opacity-70 flex flex-col justify-center items-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-bold mb-8"
          >
            Main bhi ANKAN
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl max-w-2xl text-center px-4"
          >
            Earn 'Maati Coins' on every purchase and redeem them for discounts next time!
          </motion.p>
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={fadeIn}
            className="border border-gray-300 rounded-lg p-10 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center reveal"
          >
            <span className="text-4xl font-bold mb-6 bg-ankan-lightBeige text-ankan-brown rounded-full w-16 h-16 flex items-center justify-center">01</span>
            <h3 className="text-xl font-medium mb-8">SIGN UP</h3>
            <p className="text-lg">
              Sign up as a member to start enjoying the loyalty program
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="border border-gray-300 rounded-lg p-10 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center reveal"
          >
            <span className="text-4xl font-bold mb-6 bg-ankan-lightBeige text-ankan-brown rounded-full w-16 h-16 flex items-center justify-center">02</span>
            <h3 className="text-xl font-medium mb-8">EARN POINTS</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Purchase a product</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Get 1 Ankan Coins for every ₹1 spent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Sign up to the site</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Get 500 Ankan Coins</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="border border-gray-300 rounded-lg p-10 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center reveal"
          >
            <span className="text-4xl font-bold mb-6 bg-ankan-lightBeige text-ankan-brown rounded-full w-16 h-16 flex items-center justify-center">03</span>
            <h3 className="text-xl font-medium mb-8">REDEEM REWARDS</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>Ankan Coins Rewards</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span> 
                <span>50 Ankan Coins = ₹1 discount</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-ankan-beige py-20 mt-16"
      >
        <div className="container mx-auto text-black px-4 text-center">
          <h2 className="text-3xl font-medium mb-6">STAY CONNECTED</h2>
          <p className="mb-12 max-w-2xl mx-auto text-lg">
            Follow us on our social media accounts to get even more fragrant content
          </p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-12"
          >
            {['facebook', 'instagram', 'youtube', 'twitter'].map((platform, index) => (
              <motion.a
                key={platform}
                href={`https://${platform}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-ankan-lightBeige transform hover:scale-110 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <svg className="w-6 h-6 text-ankan-brown" fill="currentColor" viewBox="0 0 24 24">
                  {platform === 'facebook' && (
                    <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.3h-4.33C10.24,0.3,9.5,3.3,9.5,5.47v2h-3v4h3v12h5v-12h3.85l0.42-4H18.77z" />
                  )}
                  {platform === 'instagram' && (
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  )}
                  {platform === 'youtube' && (
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  )}
                  {platform === 'twitter' && (
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  )}
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RewardsProgram;