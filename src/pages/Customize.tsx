
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CustomizePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>(['', '', '', '', '']);

  const images = [
    '/lovable-uploads/customize2.png',
    '/lovable-uploads/backgrounds/bg1.png',
    '/lovable-uploads/fig1.png'
  ];

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...selectedColors];
    newColors[index] = color;
    setSelectedColors(newColors);
  };

  return (
    <div
  className="min-h-screen text-white pb-16"
  style={{
    backgroundColor: '#58504D',
    backgroundImage: 'url(/lovable-uploads/backgrounds/customizebg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity:.95,
    zIndex:0
  }}
>

      <div className="container mx-auto px-4 pt-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CUSTOMISE YOUR ART</h1>
          <p className="text-xl">Let your framed masterpieces adorn your walls</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="aspect-square overflow-hidden border-8 border-white rounded-lg shadow-2xl">
              <img
                src={images[currentImage]}
                alt="Paitkar Art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center mt-4 gap-4">
              <button onClick={handlePrevImage} className="p-2 hover:bg-white/10 rounded-full">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2 items-center">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      currentImage === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button onClick={handleNextImage} className="p-2 hover:bg-white/10 rounded-full">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-xl">
            <Input
              placeholder="Your Name Here"
              className="mb-6 bg-white/20 border-none text-white placeholder:text-white/70"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {[
              { number: 1, label: "Brown" },
              { number: 2, label: "Green" },
              { number: 3, label: "Green" },
              { number: 4, label: "Dark Brown" },
              { number: 5, label: "Black" },
            ].map((color, index) => (
              <div key={index} className="mb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/30 rounded">
                    {color.number}
                  </div>
                  <RadioGroup
                    value={selectedColors[index]}
                    onValueChange={(value) => handleColorChange(index, value)}
                    className="flex-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={color.label} id={`color-${index}`} />
                      <Label htmlFor={`color-${index}`} className="text-white">
                        {color.label}
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            ))}

            <Button 
              className="w-full mt-6 bg-black hover:bg-black/80 text-white"
              size="lg"
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
