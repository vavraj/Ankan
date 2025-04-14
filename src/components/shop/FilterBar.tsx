
import React from 'react';
import { ChevronDown } from 'lucide-react';

const FilterBar = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <h1 className="text-xl font-medium">Explore</h1>
      
      <div className="flex gap-4">
        <div className="flex items-center gap-1 text-sm">
          <span>Category</span>
          <ChevronDown size={16} />
        </div>
        
        <div className="flex items-center gap-1 text-sm">
          <span>Filter</span>
          <ChevronDown size={16} />
        </div>
        
        <div className="flex items-center gap-1 text-sm">
          <span>Sort By/Newest</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
