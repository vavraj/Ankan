
// import React from 'react';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// interface ProductDetailProps {
//   product: {
//     id: string;
//     title: string;
//     price: number;
//     image: string;
//     details: {
//       style: string;
//       description: string;
//       features: string[];
//     };
//   };
// }

// const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
//       <div className="flex flex-col gap-6">
//         <div className="flex justify-center">
//           <img 
//             src={product.image} 
//             alt={product.title} 
//             className="max-w-full max-h-[500px] object-contain"
//           />
//         </div>
//         <div className="text-center">
//           <button className="ankan-btn-secondary mt-4">{product.title}</button>
//         </div>
//       </div>
      
//       <div>
//         <Tabs defaultValue="details">
//           <TabsList className="w-full grid grid-cols-2">
//             <TabsTrigger value="details">PRODUCT DETAILS</TabsTrigger>
//             <TabsTrigger value="care">MATERIALS AND CARE</TabsTrigger>
//           </TabsList>
          
//           <TabsContent value="details" className="p-4 border border-gray-200">
//             <div className="space-y-4">
//               <p><strong>Style {product.details.style}</strong></p>
              
//               <p>{product.details.description}</p>
              
//               <ul className="space-y-2">
//                 {product.details.features.map((feature, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="mr-2">•</span>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </TabsContent>
          
//           <TabsContent value="care" className="p-4 border border-gray-200">
//             <div className="space-y-4">
//               <p>Ankan products are manufactured by experienced artisans with carefully selected materials of the highest quality. Please handle with care for a longer product life:</p>
//               <ul className="space-y-2">
//                 <li className="flex items-start">
//                   <span className="mr-2">•</span>
//                   <span>Dry clean only</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-2">•</span>
//                   <span>Do not use chlorinated cleaners (leather or normal detergent)</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="mr-2">•</span>
//                   <span>Press lightly on the back of the product with a cool iron</span>
//                 </li>
//               </ul>
//             </div>
//           </TabsContent>
//         </Tabs>
        
//         <div className="mt-6">
//           <h3 className="text-lg font-medium mb-2">SHIPPING & RETURNS INFO</h3>
//           <div className="space-y-4">
//             <div>
//               <h4 className="font-medium">Shipping</h4>
//               <p className="text-sm">A signature will be required upon delivery.</p>
//               <p className="text-sm">Pre-order, Made to Order items will ship on the estimated date noted on the product description page. These items will ship through Premium Express once they become available.</p>
//             </div>
            
//             <div>
//               <h4 className="font-medium">Returns</h4>
//               <p className="text-sm">Returns may be made by mail or in store. You may return items by selecting"Return this Item" from your My ANKAN account under order details through your delivery confirmation email or by contacting a Client Advisor. Once the request has been approved, your prepaid shipping label will be emailed to you or will be supplied by a Client Advisor.</p>
//               <p className="text-sm">For Collect In-Store orders, we offer a 30 day return/exchange window in-store or by contacting Client Services. The return window starts on the day when your item was made available for collection.</p>
//               <p className="text-sm">All personalized items including Made to Order and personalized items are non-returnable.</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-6">
//           <h3 className="text-lg font-medium mb-2">CUSTOMISATION</h3>
//           <p className="text-sm">Let us know what you want and we will try our best to make it happen</p>
//           <button className="ankan-btn-primary mt-4 w-full">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

import React from 'react';
import  { useState } from 'react';

interface ProductDetailProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    thumbnail: string;
    details: {
      style: string;
      description: string;
      features: string[];
    };
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToBag = () => {
    setIsAdded(true);
    
    // Optional: You can reset it after some time to allow adding again
    // setTimeout(() => setIsAdded(false), 3000);
    
    // Here you would also add your cart functionality
    // e.g., addToCart(product.id, 1);
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Main Product Section */}
      <div className="grid grid-cols-1 gap-8 py-8 bg-gray-100">
        {/* Main Product Image - Centered */}
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="relative w-full">
            <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">
              FEATURED
            </div>
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full object-contain"
            />
          </div>
          
          {/* Thumbnail Below */}
          {/* <div className="mt-4 flex justify-center">
            <img 
              src={product.thumbnail || product.image} 
              alt={product.title} 
              className="w-24 h-24 object-cover border border-gray-300"
            />
          </div> */}
        </div>

        {/* Product Name and Details - Centered */}
        <div className="flex flex-col items-center max-w-lg mx-auto mt-4">
          {/* Product Name Section */}
          <div className="text-center">
            <h2 className="uppercase font-medium text-center">ENCHANTED GARDEN</h2>
          </div>
          
          {/* Product Info and Add to Cart */}
          <div className="w-full mt-6 text-center">
        <h2 className="uppercase font-medium mb-1">
          90*90 COVER IN STYLE PRINTED SCARF
        </h2>
        <p className="font-medium mb-2">₹ 5000</p>
        <p className="text-sm text-gray-500 mb-6">Available</p>
        <div className="flex justify-center">
          <button 
            className={`w-full max-w-md py-2 uppercase transition-colors duration-300 ${
              isAdded ? 'bg-green-700 hover:bg-green-800' : 'bg-black hover:bg-gray-800'
            } text-white`}
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
          <h2 className="uppercase text-lg font-medium">Materials and Care</h2>
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

          <h2 className="uppercase text-lg font-medium mt-8">Shipping & Returns Info</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Shipping</h4>
              <p className="text-sm">A signature will be required upon delivery.</p>
              <p className="text-sm">Pre-order, Made to Order items will ship on the estimated date noted on the product description page. These items will ship through Premium Express once they become available.</p>
            </div>
            
            <div>
              <h4 className="font-medium">Returns</h4>
              <p className="text-sm">Returns may be made by mail or in store. You may return items by selecting "Return this Item" from your MY ANKAN account under order details, through your delivery confirmation email or by contacting a Client Advisor. Once the request has been approved, your prepaid shipping label will be emailed to you or will be available for download in your MY ANKAN account.</p>
              <p className="text-sm">For Collect In-Store orders, we offer a 30 day return/exchange window in-store or by contacting Client Services. The return window starts on the day when your item was made available for collection.</p>
              <p className="text-sm">Items must remain in their original condition with all labels attached and intact. Please note, Made to Order and personalized items are not returnable.</p>
            </div>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">
          <h2 className="uppercase text-lg font-medium">Product Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p><strong>Style {product.details.style}</strong></p>
              <img 
                src={product.thumbnail || product.image} 
                alt={product.title} 
                className="w-20 h-20 object-cover"
              />
            </div>
            
            <p>Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, fantasy, and performance to craft deeply personal narratives, this scarf explores Ankan's meld around nature as part of the 90 x 90 project.</p>
            
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
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>35cm x 35cm</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Made in India</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>The dimensions of this item may vary slightly as the item is hand-sewn</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>The signature packaging is complete with a matching motif of the limited-edition item and a leaflet about the artist.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="uppercase text-lg font-medium">Customisation</h2>
            <p className="text-sm">Let us know what you want and we will try our best to make it happen</p>
            <div className="mt-4">
              <input 
                type="text" 
                placeholder="Enter"
                className="w-full p-2 border border-gray-300 bg-black text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;