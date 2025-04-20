import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '@/components/product/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Example of fetching product data dynamically
  const products = [
    {
      id: '1',
      title: 'Cover in Style',
      price: 5000,
      image: '/lovable-uploads/etheralher.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },
    {
      id: '2',
      title: 'Mystic Woods',
      price: 7000,
      image: '/lovable-uploads/mysticwoods.png',
      details: {
        style: 'A12345 XY009 1234',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '3',
      title: 'Subtle Breeze',
      price: 2200,
      image: '/lovable-uploads/subtlebreeze.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '4',
      title: 'Enchanted Garden',
      price: 5000,
      image: '/lovable-uploads/enchantedgarden.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '5',
      title: 'Divine Essence',
      price: 5000,
      image: '/lovable-uploads/divine.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '6',
      title: 'Krishna Gopiya',
      price: 5000,
      image: '/lovable-uploads/krishna.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '7',
      title: 'Tales Untold',
      price: 5000,
      image: '/lovable-uploads/tales.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '8',
      title: 'Paint Me',
      price: 5000,
      image: '/lovable-uploads/paint.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '9',
      title: 'Melt Here',
      price: 5000,
      image: '/lovable-uploads/melt.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '10',
      title: 'Earthy Comfort',
      price: 5000,
      image: '/lovable-uploads/earthy.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },{
      id: '11',
      title: 'Cover in Style',
      price: 5000,
      image: '/lovable-uploads/coverinstyle.png', // Add the correct image path
      details: {
        style: 'B26160 SG001 9888',
        description: "Featuring artwork by multidisciplinary artist Kishore Gayan, whose work blends comics, painting and performance to craft deeply personal narratives, this scarf explores Ankan's rural heritage through a vibrant lens.",
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
    },
  ];

  // Find the product by ID
  const product = products.find((p) => p.id === id);

  // If no product is found, you can display a message or handle it accordingly
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
