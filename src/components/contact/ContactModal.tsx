
import React from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-ankan-beige z-50 overflow-y-auto">
      <div className="max-w-2xl mx-auto p-8">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-ankan-brown">
            <X size={24} />
          </button>
        </div>
        
        <h2 className="text-2xl font-medium mb-8">CONTACT US</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="font-medium mb-2">CALL US +8507390892</h3>
            <p className="text-gray-600">
              Our Client Advisors are available Monday through Saturday, 9:00AM - 11:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding holidays.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">WHATSAPP US</h3>
            <p className="text-gray-600">
              Our Client Advisors are available to answer your WhatsApp messages Monday through Saturday, 9:00AM - 8:00PM EST, and Sunday 10:00AM – 7:00PM EST, excluding holidays.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">LIVE CHAT</h3>
            <p className="text-gray-600">
              Our Client Advisors are available to chat Monday through Saturday, 9:00AM - 11:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding holidays. The option to chat will become active during these hours once an advisor is available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
