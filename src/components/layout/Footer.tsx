
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ankan-brown text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="footer-heading text-white">MAY WE HELP YOU?</h3>
            <nav>
              <Link to="/contact" className="footer-link text-gray-300 hover:text-white">Contact Us</Link>
              <Link to="/orders" className="footer-link text-gray-300 hover:text-white">My Order</Link>
              <Link to="/faqs" className="footer-link text-gray-300 hover:text-white">FAQs</Link>
              <Link to="/contact" className="footer-link text-gray-300 hover:text-white">Email Unsubscribe</Link>
              <Link to="/sitemap" className="footer-link text-gray-300 hover:text-white">Sitemap</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="footer-heading text-white">THE COMPANY</h3>
            <nav>
              <Link to="/about" className="footer-link text-gray-300 hover:text-white">About Ankan</Link>
              <Link to="/equilibrium" className="footer-link text-gray-300 hover:text-white">Ankan Equilibrium</Link>
              <Link to="/ethics" className="footer-link text-gray-300 hover:text-white">Code of Ethics</Link>
              <Link to="/careers" className="footer-link text-gray-300 hover:text-white">Careers</Link>
              <Link to="/legal" className="footer-link text-gray-300 hover:text-white">Legal</Link>
              <Link to="/privacy" className="footer-link text-gray-300 hover:text-white">Privacy & Cookie Policy</Link>
              <Link to="/cookie-settings" className="footer-link text-gray-300 hover:text-white">COOKIES SETTINGS</Link>
              <Link to="/corporate" className="footer-link text-gray-300 hover:text-white">Corporate Information</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="footer-heading text-white">CLUSTER LOCATOR</h3>
            <p className="text-sm text-gray-300 mb-4">Gudri/Nayagram, City</p>
            
            <div className="mt-8">
              <h3 className="footer-heading text-white">SIGN UP FOR ANKAN UPDATES</h3>
              <p className="text-sm text-gray-300 mb-4">By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our Privacy Policy.</p>
              
              <div className="mt-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-b border-gray-500 w-full py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
              </div>
              
              <div className="mt-8">
                <h3 className="footer-heading text-white">COUNTRY/REGION</h3>
                <p className="text-sm text-gray-300">INDIA</p>
              </div>
              
              <div className="mt-6 flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Twitter size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link to="/">
            <img 
              src="/ankan-logo.svg" 
              alt="Ankan" 
              className="h-8" 
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
