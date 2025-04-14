
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard } from 'lucide-react';

interface WorkshopBookingFormProps {
  workshopId?: string;
  workshopName?: string;
  price?: number;
}

const WorkshopBookingForm: React.FC<WorkshopBookingFormProps> = ({ 
  workshopId = "ws-001", 
  workshopName = "Traditional Paitkar Art Workshop", 
  price = 2500 
}) => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      participants: '1',
    },
  });

  const onSubmit = (data: Record<string, string>) => {
    // This would normally connect to a payment processor API
    console.log('Booking workshop with data:', data);
    
    // Simulate successful payment
    toast.success('Workshop booked successfully!');
    
    // Redirect to checkout for completing payment
    setTimeout(() => {
      navigate('/checkout', { 
        state: { 
          type: 'workshop',
          workshopId,
          workshopName,
          price,
          participants: parseInt(data.participants, 10),
          customerName: data.name,
          customerEmail: data.email
        } 
      });
    }, 1500);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h3 className="text-xl font-medium mb-4">Book Your Workshop</h3>
      <p className="text-gray-600 mb-6">{workshopName} - ₹{price} per participant</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email address" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="participants"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Participants</FormLabel>
                <FormControl>
                  <Input type="number" min="1" max="10" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-4">
            <Button type="submit" className="w-full bg-ankan-brown hover:bg-ankan-brown/90">
              <CreditCard className="mr-2 h-4 w-4" /> Proceed to Payment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WorkshopBookingForm;
