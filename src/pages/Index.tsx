
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeatureSection />
      
      
    </div>
  );
};

export default Index;
