
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductDetailProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    details: {
      style: string;
      description: string;
      features: string[];
    };
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="max-w-full max-h-[500px] object-contain"
          />
        </div>
        <div className="text-center">
          <button className="ankan-btn-secondary mt-4">{product.title}</button>
        </div>
      </div>
      
      <div>
        <Tabs defaultValue="details">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="details">PRODUCT DETAILS</TabsTrigger>
            <TabsTrigger value="care">MATERIALS AND CARE</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="p-4 border border-gray-200">
            <div className="space-y-4">
              <p><strong>Style {product.details.style}</strong></p>
              
              <p>{product.details.description}</p>
              
              <ul className="space-y-2">
                {product.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="care" className="p-4 border border-gray-200">
            <div className="space-y-4">
              <p>Ankan products are manufactured by experienced artisans with carefully selected materials of the highest quality. Please handle with care for a longer product life:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Dry clean only</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Do not use chlorinated cleaners (leather or normal detergent)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Press lightly on the back of the product with a cool iron</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">SHIPPING & RETURNS INFO</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Shipping</h4>
              <p className="text-sm">A signature will be required upon delivery.</p>
              <p className="text-sm">Pre-order, Made to Order items will ship on the estimated date noted on the product description page. These items will ship through Premium Express once they become available.</p>
            </div>
            
            <div>
              <h4 className="font-medium">Returns</h4>
              <p className="text-sm">Returns may be made by mail or in store. You may return items by selecting"Return this Item" from your My ANKAN account under order details through your delivery confirmation email or by contacting a Client Advisor. Once the request has been approved, your prepaid shipping label will be emailed to you or will be supplied by a Client Advisor.</p>
              <p className="text-sm">For Collect In-Store orders, we offer a 30 day return/exchange window in-store or by contacting Client Services. The return window starts on the day when your item was made available for collection.</p>
              <p className="text-sm">All personalized items including Made to Order and personalized items are non-returnable.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">CUSTOMISATION</h3>
          <p className="text-sm">Let us know what you want and we will try our best to make it happen</p>
          <button className="ankan-btn-primary mt-4 w-full">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
