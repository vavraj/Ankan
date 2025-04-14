
import React, { useState } from 'react';
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
import { Heart, CreditCard } from 'lucide-react';

interface SupportArtisanFormProps {
  artisanId?: string;
  artisanName?: string;
}

const SupportArtisanForm: React.FC<SupportArtisanFormProps> = ({ 
  artisanId = "art-001", 
  artisanName = "Kishore Gayan" 
}) => {
  const [donationAmount, setDonationAmount] = useState<number>(1000);
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const handleAmountChange = (amount: number) => {
    setDonationAmount(amount);
  };

  const onSubmit = (data: Record<string, string>) => {
    // This would normally connect to a payment processor API
    console.log('Supporting artisan with data:', { ...data, donationAmount });
    
    // Simulate successful payment
    toast.success('Thank you for your generous support!');
    
    // Redirect to checkout for completing payment
    setTimeout(() => {
      navigate('/checkout', { 
        state: { 
          type: 'donation',
          artisanId,
          artisanName,
          amount: donationAmount,
          donorName: data.name,
          donorEmail: data.email,
          message: data.message
        } 
      });
    }, 1500);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h3 className="text-xl font-medium mb-4">Support {artisanName}</h3>
      <p className="text-gray-600 mb-6">Your contribution helps our artisans continue their craft and support their families.</p>
      
      <div className="mb-6">
        <p className="font-medium mb-2">Select an amount:</p>
        <div className="grid grid-cols-3 gap-3">
          {[500, 1000, 2000, 5000].map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountChange(amount)}
              className={`py-2 px-4 border rounded-md ${
                donationAmount === amount 
                  ? 'bg-ankan-brown text-white border-ankan-brown' 
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              ₹{amount}
            </button>
          ))}
          <div className="col-span-3 mt-2">
            <Input
              type="number"
              min="100"
              placeholder="Other amount"
              value={![500, 1000, 2000, 5000].includes(donationAmount) ? donationAmount : ''}
              onChange={(e) => handleAmountChange(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} required />
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your message to the artisan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-4">
            <Button type="submit" className="w-full bg-ankan-brown hover:bg-ankan-brown/90">
              <Heart className="mr-2 h-4 w-4" /> Support with ₹{donationAmount}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SupportArtisanForm;
