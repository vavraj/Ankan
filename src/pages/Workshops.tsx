
import React, { useState } from 'react';
import WorkshopInfo from '@/components/workshops/WorkshopInfo';
import WorkshopBookingForm from '@/components/workshops/WorkshopBookingForm';

const Workshops = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  
  const handleBookWorkshopClick = () => {
    setShowBookingForm(true);
    // Scroll to booking form
    setTimeout(() => {
      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <div>
      <WorkshopInfo onBookWorkshop={handleBookWorkshopClick} />
      
      {showBookingForm && (
        <div id="booking-section" className="py-16 bg-ankan-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-medium text-center mb-8">Book Your Workshop</h2>
            <div className="max-w-lg mx-auto">
              <WorkshopBookingForm 
                workshopId="ws-001"
                workshopName="Traditional Paitkar Art Workshop"
                price={2500}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workshops;
