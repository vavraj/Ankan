
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-ankan-brown text-white py-12">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="footer-heading text-white">MAY WE HELP YOU?</h3>
//             <nav>
//               <Link to="/contact" className="footer-link text-gray-300 hover:text-white">Contact Us</Link>
//               <Link to="/orders" className="footer-link text-gray-300 hover:text-white">My Order</Link>
//               <Link to="/faqs" className="footer-link text-gray-300 hover:text-white">FAQs</Link>
//               <Link to="/contact" className="footer-link text-gray-300 hover:text-white">Email Unsubscribe</Link>
//               <Link to="/sitemap" className="footer-link text-gray-300 hover:text-white">Sitemap</Link>
//             </nav>
//           </div>
          
//           <div>
//             <h3 className="footer-heading text-white">THE COMPANY</h3>
//             <nav>
//               <Link to="/about" className="footer-link text-gray-300 hover:text-white">About Ankan</Link>
//               <Link to="/equilibrium" className="footer-link text-gray-300 hover:text-white">Ankan Equilibrium</Link>
//               <Link to="/ethics" className="footer-link text-gray-300 hover:text-white">Code of Ethics</Link>
//               <Link to="/careers" className="footer-link text-gray-300 hover:text-white">Careers</Link>
//               <Link to="/legal" className="footer-link text-gray-300 hover:text-white">Legal</Link>
//               <Link to="/privacy" className="footer-link text-gray-300 hover:text-white">Privacy & Cookie Policy</Link>
//               <Link to="/cookie-settings" className="footer-link text-gray-300 hover:text-white">COOKIES SETTINGS</Link>
//               <Link to="/corporate" className="footer-link text-gray-300 hover:text-white">Corporate Information</Link>
//             </nav>
//           </div>
          
//           <div>
//             <h3 className="footer-heading text-white">CLUSTER LOCATOR</h3>
//             <p className="text-sm text-gray-300 mb-4">Gudri/Nayagram, City</p>
            
//             <div className="mt-8">
//               <h3 className="footer-heading text-white">SIGN UP FOR ANKAN UPDATES</h3>
//               <p className="text-sm text-gray-300 mb-4">By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy.</p>
              
//               <div className="mt-4">
//                 <input 
//                   type="email" 
//                   placeholder="Email" 
//                   className="bg-transparent border-b border-gray-500 w-full py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white"
//                 />
//               </div>
              
//               <div className="mt-8">
//                 <h3 className="footer-heading text-white">COUNTRY/REGION</h3>
//                 <p className="text-sm text-gray-300">INDIA</p>
//               </div>
              
//               <div className="mt-6 flex space-x-4">
//                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
//                   <Facebook size={20} />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
//                   <Instagram size={20} />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
//                   <Twitter size={20} />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
//                   <Youtube size={20} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-12 flex justify-center">
//           <Link to="/">
//             <img 
//               src="../ankanwhite.png" 
//               alt="Ankan" 
//               className="h-20 filter" 
//             />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  // Animation variants
  const fadeInUp = {
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
        staggerChildren: 0.1
      }
    }
  };

  const footerLink = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const socialIconVariants = {
    hover: { 
      scale: 1.2, 
      rotate: 5, 
      transition: { duration: 0.3 } 
    }
  };

  return (
    <footer className="bg-ankan-brown text-white py-12 relative overflow-hidden">
      {/* Abstract decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp}>
            <motion.h3 
              className="footer-heading text-white text-lg font-semibold mb-4 relative inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              MAY WE HELP YOU?
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></span>
            </motion.h3>
            <motion.nav 
              className="flex flex-col space-y-2"
              variants={staggerChildren}
            >
              {[
                { to: "/contact", text: "Contact Us" },
                { to: "/orders", text: "My Order" },
                { to: "/faqs", text: "FAQs" },
                { to: "/contact", text: "Email Unsubscribe" },
                { to: "/sitemap", text: "Sitemap" }
              ].map((link, index) => (
                <motion.div 
                  key={index} 
                  variants={footerLink}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={link.to} 
                    className="footer-link text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:underline">{link.text}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <motion.h3 
              className="footer-heading text-white text-lg font-semibold mb-4 relative inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              THE COMPANY
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></span>
            </motion.h3>
            <motion.nav 
              className="flex flex-col space-y-2"
              variants={staggerChildren}
            >
              {[
                { to: "/about", text: "About Ankan" },
                { to: "/equilibrium", text: "Ankan Equilibrium" },
                { to: "/ethics", text: "Code of Ethics" },
                { to: "/careers", text: "Careers" },
                { to: "/legal", text: "Legal" },
                { to: "/privacy", text: "Privacy & Cookie Policy" },
                { to: "/cookie-settings", text: "COOKIES SETTINGS" },
                { to: "/corporate", text: "Corporate Information" }
              ].map((link, index) => (
                <motion.div 
                  key={index} 
                  variants={footerLink}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    to={link.to} 
                    className="footer-link text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:underline">{link.text}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <motion.h3 
              className="footer-heading text-white text-lg font-semibold mb-4 relative inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              CLUSTER LOCATOR
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></span>
            </motion.h3>
            <motion.p 
              className="text-sm text-gray-300 mb-4 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              Gudri/Nayagram, City
            </motion.p>
            
            <motion.div className="mt-8">
              <motion.h3 
                className="footer-heading text-white text-lg font-semibold mb-4 relative inline-block"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SIGN UP FOR ANKAN UPDATES
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></span>
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy.
              </motion.p>
              
              <motion.form 
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onSubmit={handleSubscribe}
              >
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-transparent border-b border-gray-500 w-full py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <motion.button
                    type="submit"
                    className="ml-2 bg-transparent border-b border-gray-500 px-3 hover:border-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
                {isSubscribed && (
                  <motion.p 
                    className="text-xs text-white mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Thank you for subscribing to our newsletter!
                  </motion.p>
                )}
              </motion.form>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.h3 
                  className="footer-heading text-white text-lg font-semibold mb-4 relative inline-block"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  COUNTRY/REGION
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30"></span>
                </motion.h3>
                <motion.p 
                  className="text-sm text-gray-300"
                  whileHover={{ scale: 1.02 }}
                >
                  INDIA
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="mt-6 flex space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {[
                  { href: "https://facebook.com", icon: Facebook },
                  { href: "https://instagram.com", icon: Instagram },
                  { href: "https://twitter.com", icon: Twitter },
                  { href: "https://youtube.com", icon: Youtube }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                    variants={socialIconVariants}
                    whileHover="hover"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link to="/">
            <motion.img 
              src="../ankanwhite.png" 
              alt="Ankan" 
              className="h-20 filter" 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;