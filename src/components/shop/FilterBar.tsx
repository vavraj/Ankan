import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Define option types for dropdowns
interface FilterOption {
  id: string;
  label: string;
}

const FilterBar = () => {
  // State for open/closed dropdown menus
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // State for selected options
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<string>("Newest");

  // Sample options for each dropdown
  const categoryOptions: FilterOption[] = [
    { id: "all", label: "All" },
    { id: "paintings", label: "Paintings" },
    { id: "handicrafts", label: "Handicrafts" },
    { id: "sculptures", label: "Sculptures" },
    { id: "textiles", label: "Textiles" }
  ];

  const filterOptions: FilterOption[] = [
    { id: "all", label: "All" },
    { id: "price-low", label: "Under ₹2000" },
    { id: "price-mid", label: "₹2000 - ₹4000" },
    { id: "price-high", label: "Above ₹4000" }
  ];

  const sortOptions: FilterOption[] = [
    { id: "newest", label: "Newest" },
    { id: "price-low-high", label: "Price: Low to High" },
    { id: "price-high-low", label: "Price: High to Low" },
    { id: "popularity", label: "Popularity" }
  ];

  // Toggle dropdown visibility
  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // Handle selection of an option
  const handleSelect = (type: string, option: FilterOption) => {
    switch (type) {
      case 'category':
        setSelectedCategory(option.label);
        break;
      case 'filter':
        setSelectedFilter(option.label);
        break;
      case 'sort':
        setSelectedSort(option.label);
        break;
    }
    setOpenDropdown(null);
  };

  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-200">
      <h1 className="text-xl font-medium">Explore</h1>
      
      <div className="flex gap-4">
        {/* Category Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center gap-1 text-sm px-3 py-1 rounded-md hover:bg-gray-100"
            onClick={() => toggleDropdown('category')}
          >
            <span>{selectedCategory}</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'category' ? 'rotate-180' : ''}`} />
          </button>
          
          {openDropdown === 'category' && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md py-1 min-w-40 z-10 border border-gray-200">
              {categoryOptions.map((option) => (
                <button
                  key={option.id}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${selectedCategory === option.label ? 'bg-gray-50' : ''}`}
                  onClick={() => handleSelect('category', option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Filter Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center gap-1 text-sm px-3 py-1 rounded-md hover:bg-gray-100"
            onClick={() => toggleDropdown('filter')}
          >
            <span>Filter</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'filter' ? 'rotate-180' : ''}`} />
          </button>
          
          {openDropdown === 'filter' && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md py-1 min-w-40 z-10 border border-gray-200">
              {filterOptions.map((option) => (
                <button
                  key={option.id}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${selectedFilter === option.label ? 'bg-gray-50' : ''}`}
                  onClick={() => handleSelect('filter', option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Sort Dropdown */}
        <div className="relative">
          <button 
            className="flex items-center gap-1 text-sm px-3 py-1 rounded-md hover:bg-gray-100"
            onClick={() => toggleDropdown('sort')}
          >
            <span>Sort By/{selectedSort}</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'sort' ? 'rotate-180' : ''}`} />
          </button>
          
          {openDropdown === 'sort' && (
            <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-md py-1 min-w-40 z-10 border border-gray-200">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${selectedSort === option.label ? 'bg-gray-50' : ''}`}
                  onClick={() => handleSelect('sort', option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;