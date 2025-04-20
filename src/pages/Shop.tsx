
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
      image: '/lovable-uploads/subtlebreeze.png',
    },
    {
      id: '4',
      title: 'Enchanted Garden',
      price: 3200,
      image: '/lovable-uploads/enchantedgarden.png',
    },
    {
      id: '5',
      title: 'Divine Essence',
      price: 4500,
      image: '/lovable-uploads/divine.png',
    },
    {
      id: '6',
      title: 'Krishna & Gopiya',
      price: 3000,
      image: '/lovable-uploads/krishna.png',
    },
    {
      id: '7',
      title: 'Tales Untold',
      price: 5500,
      image: '/lovable-uploads/tales.png',
    },
    {
      id: '8',
      title: 'Paint Me',
      price: 1500,
      image: '/lovable-uploads/paint.png',
    },
    {
      id: '9',
      title: 'Melt Here',
      price: 1000,
      image: '/lovable-uploads/melt.png',
    },
    {
      id: '10',
      title: 'Earthy Comfort',
      price: 2500,
      image: '/lovable-uploads/earthy.png',
    },
    {
      id: '11',
      title: 'Cover in Style',
      price: 5000,
      image: '/lovable-uploads/coverinstyle.png',
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
