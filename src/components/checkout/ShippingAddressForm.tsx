import React, { useState } from 'react';

interface ShippingAddressFormProps {
  onContinue: () => void;
}

const ShippingAddressForm: React.FC<ShippingAddressFormProps> = ({ onContinue }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    email: 'john2023752@gmail.com'
  });
  
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      fullName: 'John Doe',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      phone: '9876543210'
    }
  ]);
  
  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue();
  };
  
  const selectSavedAddress = (id: number) => {
    setSelectedAddressId(id);
    setUseSavedAddress(true);
  };
  
  const useNewAddress = () => {
    setUseSavedAddress(false);
    setSelectedAddressId(null);
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-md">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-6">Shipping Address</h2>
        
        {savedAddresses.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium mb-3">Saved Addresses</h3>
            <div className="space-y-3">
              {savedAddresses.map(address => (
                <div 
                  key={address.id} 
                  className={`border rounded-md p-4 cursor-pointer hover:border-gray-400 transition-all ${
                    selectedAddressId === address.id ? 'border-gray-800' : 'border-gray-200'
                  }`}
                  onClick={() => selectSavedAddress(address.id)}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{address.name}</span>
                    {selectedAddressId === address.id && (
                      <span className="text-green-600 font-medium">Selected</span>
                    )}
                  </div>
                  <p className="mt-1">{address.fullName}</p>
                  <p className="text-gray-600 text-sm mt-1">{address.address}</p>
                  <p className="text-gray-600 text-sm">{address.city}, {address.state} - {address.pincode}</p>
                  <p className="text-gray-600 text-sm mt-1">Phone: {address.phone}</p>
                </div>
              ))}
            </div>
            <button 
              type="button" 
              onClick={useNewAddress}
              className="mt-3 text-gray-600 underline text-sm"
            >
              Use a new address
            </button>
          </div>
        )}
        
        {!useSavedAddress && (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 1*
              </label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                Address Line 2 (Optional)
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State*
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                >
                  <option value="">Select State</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                  PIN Code*
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                  maxLength={6}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500"
                  required
                  maxLength={10}
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500 bg-gray-100"
                required
                disabled
              />
              <p className="text-sm text-gray-500 mt-1">Email cannot be changed</p>
            </div>
            
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="saveAddress"
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <label htmlFor="saveAddress" className="ml-2 block text-sm text-gray-700">
                Save this address for future purchases
              </label>
            </div>
          </form>
        )}
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700"
        >
          Continue to Gifting
        </button>
      </div>
    </div>
  );
};

export default ShippingAddressForm;