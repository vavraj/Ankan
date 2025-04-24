import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with loading state
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }, 1000);
  };
  
  // For scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  // Contact info items with animation delays
  const contactItems = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "Gudri/Nayagram, Jharkhand, India",
      delay: 0.2
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 8507390892",
      delay: 0.4
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "contact@ankan.com",
      delay: 0.6
    }
  ];
  
  // Business hours with animation delays
  const businessHours = [
    { day: "Monday to Friday", hours: "9:00 AM - 6:00 PM", delay: 0.3 },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", delay: 0.4 },
    { day: "Sunday", hours: "Closed", delay: 0.5 }
  ];
  
  // Form input fields with animation delays
  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      required: true,
      delay: 0.2
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      required: true,
      delay: 0.3
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      required: false,
      delay: 0.4
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        CONTACT US
      </motion.h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div>
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-xl font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We'd love to hear from you. Whether you have a question about our products, workshops, or anything else, our team is ready to answer all your inquiries.
            </motion.p>
            
            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start hidden-element"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <item.icon className="mr-3 text-ankan-brown mt-1" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <motion.h2 
              className="text-xl font-medium mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Business Hours
            </motion.h2>
            
            <div className="space-y-2">
              {businessHours.map((item, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium">{item.day}:</span> {item.hours}
                </motion.p>
              ))}
            </div>
          </motion.div>
          
          {/* Map or Image can go here */}
          <motion.div
            className="mt-8 rounded-lg overflow-hidden hidden-element"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <MapPin size={32} className="text-gray-400" />
              <span className="ml-2 text-gray-500">Map Coming Soon</span>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500"
        >
          <motion.h2 
            className="text-xl font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Send Us a Message
          </motion.h2>
          
          {isSubmitted ? (
            <motion.div 
              className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <p className="font-medium">Thank you for your message!</p>
              <p>We will get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Standard Form Fields */}
              {formFields.map((field, index) => (
                <motion.div 
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: field.delay }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium mb-1">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    className="ankan-input w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ankan-brown focus:border-ankan-brown transition-all duration-200"
                  />
                </motion.div>
              ))}
              
              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="ankan-input w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ankan-brown focus:border-ankan-brown transition-all duration-200"
                ></textarea>
              </motion.div>
              
              {/* Submit Button */}
              <motion.button 
                type="submit"
                className="ankan-btn-primary w-full py-2 px-4 bg-ankan-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
      
      {/* Custom CSS for fade-in animation */}
      <style>{`
        .hidden-element {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s;
        }
        .show {
          opacity: 1;
          transform: translateY(0);
        }
        
        .ankan-input:focus {
          box-shadow: 0 0 0 2px rgba(156, 124, 98, 0.2);
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Contact;