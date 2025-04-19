
import React, { useState } from 'react';
import FilterBar from '@/components/shop/FilterBar';
import ProductCard from '@/components/shop/ProductCard';

const Shop = () => {
  const [products] = useState([
    {
      id: '1',
      title: 'Ethereal HER',
      price: 3800,
      image: '/lovable-uploads/etheralher.png',
    },
    {
      id: '2',
      title: 'Mystic Woods',
      price: 2500,
      image: '/lovable-uploads/mysticwoods.png',
    },
    {
      id: '3',
      title: 'Subtle Breeze',
      price: 2200,
      image: '/lovable-uploads/b7089c17-3273-4d1d-80ec-79b809e7ecec.png',
    },
    {
      id: '4',
      title: 'Enchanted Garden',
      price: 3200,
      image: '/lovable-uploads/79085d76-3d10-4ca0-8991-1c88556fff15.png',
    },
    {
      id: '5',
      title: 'Divine Essence',
      price: 4500,
      image: '/lovable-uploads/88bc88e5-d777-4e55-aab2-be6584304d36.png',
    },
    {
      id: '6',
      title: 'Krishna & Gopiya',
      price: 3000,
      image: '/lovable-uploads/c792593b-eafa-4374-b050-ca9e82ad1c03.png',
    },
    {
      id: '7',
      title: 'Tales Untold',
      price: 5500,
      image: '/lovable-uploads/958996aa-bc95-4f7f-b55b-2f2207462b4f.png',
    },
    {
      id: '8',
      title: 'Paint Me',
      price: 1500,
      image: '/product-8.jpg',
    },
    {
      id: '9',
      title: 'Melt Here',
      price: 1000,
      image: '/product-9.jpg',
    },
    {
      id: '10',
      title: 'Earthy Comfort',
      price: 2500,
      image: '/product-10.jpg',
    },
    {
      id: '11',
      title: 'Cover in Style',
      price: 5000,
      image: '/lovable-uploads/bd8e299f-a4b7-423f-8bd4-006ca140972a.png',
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <FilterBar />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
