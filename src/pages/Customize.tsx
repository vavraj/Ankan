import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, Check, Contrast } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CustomizePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState(['', '', '', '', '']);

  const images = [
    '/lovable-uploads/backgrounds/bg1.png',
    '/lovable-uploads/customize2.png',
    '/lovable-uploads/fig1.png'
  ];

  const colorOptions = [
    { number: 1, label: "Brown", color: "#996515" },
    { number: 2, label: "Green", color: "#6B8E23" },
    { number: 3, label: "Yellow", color: "#B6862C" },
    { number: 4, label: "Dark Brown", color: "#5D4037" },
    // { number: 5, label: "Black", color: "#212121" },
  ];

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleColorChange = (index, color) => {
    const newColors = [...selectedColors];
    newColors[index] = color;
    setSelectedColors(newColors);
  };
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen text-white py-16"
      style={{
        backgroundColor: '#58504D',
        backgroundImage: 'url(/lovable-uploads/backgrounds/customizebg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        // filter:'brightness(0.8)',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 tracking-wider">CUSTOMIZE YOUR ART</h1>
          <h2 className="text-xl font-light max-w-2xl mx-auto">Let your framed masterpieces adorn your walls with colors that speak to your soul</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="aspect-square overflow-hidden border-8 border-white rounded-lg shadow-2xl relative transform transition-transform hover:scale-105 duration-300">
              <img
                src={images[currentImage]}
                alt="Paitkar Art"
                style={{filter:'contrast(0.8'}}
                className="w-full h-full object-cover"
              />
              
              {/* Image navigation controls */}
              <button 
                onClick={handlePrevImage} 
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNextImage} 
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Image indicators */}
            <div className="flex justify-center mt-6 gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    currentImage === index ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20">
            <h2 className="text-2xl font-semibold mb-6">Personalize Your Artwork</h2>
            
            <div className="mb-8">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <Input
                id="name"
                placeholder="Enter your name here"
                className="mb-2 bg-white/20 border-white/30 focus:border-white text-white placeholder:text-white/50 h-12"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-xs text-white/70">This will be used for personalization</p>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-4 text-lg">Color Selection</h3>
              <div className="space-y-5">
                {colorOptions.map((colorOption, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div 
                      className="w-10 h-10 flex items-center justify-center border border-white/30 rounded-lg font-medium"
                      
                    >
                      {colorOption.number}
                    </div>
                    <RadioGroup
                      value={selectedColors[index]}
                      onValueChange={(value) => handleColorChange(index, value)}
                      className="flex-1"
                    >
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <RadioGroupItem 
                            value={colorOption.label} 
                            id={`color-${index}`} 
                            className="border-white"
                          />
                          <div 
                            className="ml-3 w-6 h-6 rounded-full mr-3" 
                            style={{ backgroundColor: colorOption.color }}
                          />
                          <Label htmlFor={`color-${index}`} className="text-white">
                            {colorOption.label}
                          </Label>
                        </div>
                        {selectedColors[index] === colorOption.label && (
                          <span className="ml-auto text-white/70">
                            <Check size={16} />
                          </span>
                        )}
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="w-full py-6 bg-black hover:bg-black/80 text-white text-lg font-medium tracking-wider shadow-lg transition-transform hover:translate-y-[-2px]"
              size="lg"
              onClick={() => navigate('/checkout')}
            >
              PROCEED TO PAYMENT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizePage;