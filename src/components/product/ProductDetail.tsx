import React, { useState } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  details: ProductDetails;
}
interface ProductDetailProps {
  product: Product;
}
interface ProductDetails {
  style: string;
  description: string;
  features: string[];
}



const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [customRequest, setCustomRequest] = useState("");
  const [isRequestSent, setIsRequestSent] = useState(false);

  const handleAddToBag = () => {
    setIsAdded(true);
  };

  const handleSendRequest = () => {
    setIsRequestSent(true);
    setCustomRequest(""); // Clear the input field after submission
    setTimeout(() => setIsRequestSent(false), 3000);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 bg-gray-50">
        {/* Main Product Image */}
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="relative w-full">
            <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
              FEATURED
            </div>
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Product Name and Details */}
        <div className="flex flex-col items-center max-w-lg mx-auto mt-4">
          <div className="text-center">
            <h2 className="uppercase font-medium text-2xl text-gray-700">ENCHANTED GARDEN</h2>
          </div>
          
          <div className="w-full mt-6 text-center">
            <h2 className="uppercase font-medium text-lg mb-1 text-gray-600">
              90*90 COVER IN STYLE PRINTED SCARF
            </h2>
            <p className="font-semibold text-xl text-gray-800 mb-2">₹ 5000</p>
            <p className="text-sm text-gray-500 mb-6">Available</p>
            <div className="flex justify-center">
              <button 
                className={`w-full max-w-md py-2 uppercase transition-colors duration-300 ${
                  isAdded ? 'bg-green-700 hover:bg-green-800' : 'bg-black hover:bg-gray-800'
                } text-white rounded-lg shadow-md`}
                onClick={handleAddToBag}
                disabled={isAdded}
              >
                {isAdded ? 'ADDED TO CART' : 'ADD TO CART'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-8">
        {/* Left side - Materials & Care */}
        <div className="space-y-6">
          <h2 className="uppercase text-lg font-medium text-gray-700">Materials and Care</h2>
          <div className="space-y-4">
            <p>Ankan products are manufactured by experienced artisans with carefully selected materials of the highest quality. Please handle with care for a longer product life:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dry clean only</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Do not use chlorinated cleaners (synthetic / neutral detergent)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Press lightly on the back of the product with a cool iron</span>
              </li>
            </ul>
          </div>

          <h2 className="uppercase text-lg font-medium text-gray-700 mt-8">Shipping & Returns Info</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-600">Shipping</h4>
              <p className="text-sm text-gray-500">A signature will be required upon delivery.</p>
              <p className="text-sm text-gray-500">Pre-order, Made to Order items will ship on the estimated date noted on the product description page. These items will ship through Premium Express once they become available.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-600">Returns</h4>
              <p className="text-sm text-gray-500">Returns may be made by mail or in store...</p>
            </div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">
          <h2 className="uppercase text-lg font-medium text-gray-700">Product Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p><strong>Style {product.details.style}</strong></p>
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-20 h-20 object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <p className="text-gray-700">Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, fantasy, and performance...</p>
            
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Multicolor silk twill</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Plants and animals print</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Artwork by Kishore Gayan</span>
              </li>
            </ul>
          </div>

          {/* Customization Section with a highlighted background */}
          <div className="mt-8 p-4 border border-gray-300 bg-gray-100 rounded-lg">
            <h2 className="uppercase text-lg font-medium text-gray-700">Customization</h2>
            <p className="text-sm text-gray-500">Let us know what you want and we will try our best to make it happen</p>
            <div className="mt-4">
              <input 
                type="text" 
                placeholder="Enter your custom request"
                className="w-full p-2 border border-gray-300 bg-gray-100 text-gray-800 rounded-lg"
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
              />
            </div>
            <div className="mt-4 text-center">
              <button 
                className="w-full max-w-md py-2 uppercase transition-colors duration-300 bg-ankan-darkBrown hover:bg-green-800 text-white rounded-lg shadow-md"
                onClick={handleSendRequest}
                disabled={!customRequest}
              >
                Send Request
              </button>
              {isRequestSent && (
  <p className="text-green-600 mt-2 text-sm text-center font-medium">Request sent successfully!</p>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;