
import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">CONTACT US</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Whether you have a question about our products, workshops, or anything else, our team is ready to answer all your inquiries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 text-ankan-brown mt-1" />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-gray-600">Gudri/Nayagram, Jharkhand, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="mr-3 text-ankan-brown mt-1" />
                <div>
                  <h3 className="font-medium">Phone Number</h3>
                  <p className="text-gray-600">+91 8507390892</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-3 text-ankan-brown mt-1" />
                <div>
                  <h3 className="font-medium">Email Address</h3>
                  <p className="text-gray-600">contact@ankan.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-4">Business Hours</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Monday to Friday:</span> 9:00 AM - 6:00 PM</p>
              <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
              <p><span className="font-medium">Sunday:</span> Closed</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-medium mb-6">Send Us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="ankan-input"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="ankan-input"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="ankan-input"
              />
            </div>
            
            <div>
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
                className="ankan-input"
              ></textarea>
            </div>
            
            <button type="submit" className="ankan-btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
