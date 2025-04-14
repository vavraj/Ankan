
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '@/components/product/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // This would normally be fetched from an API
  const product = {
    id: id || '1',
    title: 'Cover in Style',
    price: 5000,
    image: '/lovable-uploads/bd8e299f-a4b7-423f-8bd4-006ca140972a.png',
    details: {
      style: 'B26160 SG001 9888',
      description: 'Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.',
      features: [
        'Multicolor silk twill',
        'Plants and animals print',
        'Artwork by Kishore Gayan',
        '90 x 90 cm',
        'Made in Jharkhand',
        'The dimensions of this item may vary slightly as the item is hand-sewn',
        'The signature packaging is complete with a matching motif of the limited-edition item',
      ],
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
