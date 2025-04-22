
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';
// import { 
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage 
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { CreditCard } from 'lucide-react';

// interface WorkshopBookingFormProps {
//   workshopId?: string;
//   workshopName?: string;
//   price?: number;
// }

// const WorkshopBookingForm: React.FC<WorkshopBookingFormProps> = ({ 
//   workshopId = "ws-001", 
//   workshopName = "Traditional Paitkar Art Workshop", 
//   price = 2500 
// }) => {
//   const navigate = useNavigate();
//   const form = useForm({
//     defaultValues: {
//       name: '',
//       email: '',
//       phone: '',
//       participants: '1',
//     },
//   });

//   const onSubmit = (data: Record<string, string>) => {
//     // This would normally connect to a payment processor API
//     console.log('Booking workshop with data:', data);
    
//     // Simulate successful payment
//     toast.success('Workshop booked successfully!');
    
//     // Redirect to checkout for completing payment
//     setTimeout(() => {
//       navigate('/checkout', { 
//         state: { 
//           type: 'workshop',
//           workshopId,
//           workshopName,
//           price,
//           participants: parseInt(data.participants, 10),
//           customerName: data.name,
//           customerEmail: data.email
//         } 
//       });
//     }, 1500);
//   };

//   return (
//     <div className="bg-white p-6 shadow-md rounded-md">
//       <h3 className="text-xl font-medium mb-4">Book Your Workshop</h3>
//       <p className="text-gray-600 mb-6">{workshopName} - ₹{price} per participant</p>
      
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="name"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Full Name</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Your full name" {...field} required />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email Address</FormLabel>
//                 <FormControl>
//                   <Input type="email" placeholder="Your email address" {...field} required />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="phone"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Phone Number</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Your phone number" {...field} required />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <FormField
//             control={form.control}
//             name="participants"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Number of Participants</FormLabel>
//                 <FormControl>
//                   <Input type="number" min="1" max="10" {...field} required />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
          
//           <div className="pt-4">
//             <Button type="submit" className="w-full bg-ankan-brown hover:bg-ankan-brown/90">
//               <CreditCard className="mr-2 h-4 w-4" /> Proceed to Payment
//             </Button>
//           </div>
//         </form>
//       </Form>
//     </div>
//   );
// };

// export default WorkshopBookingForm;
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
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
import { CreditCard, User, Mail, Phone, Users } from 'lucide-react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      participants: '1',
    },
  });

  const onSubmit = (data: Record<string, string>) => {
    setIsSubmitting(true);
    
    // This would normally connect to a payment processor API
    console.log('Booking workshop with data:', data);
    
    // Simulate successful payment
    setTimeout(() => {
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
      }, 1000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    })
  };

  const calculateTotal = () => {
    const participants = parseInt(form.watch('participants') || '1', 10);
    return price * participants;
  };

  return (
    <motion.div 
      className="bg-white p-8 shadow-lg rounded-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h3 className="text-2xl font-medium mb-2">{workshopName}</h3>
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">₹{price} per participant</p>
          <span className="inline-block px-3 py-1 bg-ankan-beige text-ankan-brown rounded-full text-sm font-medium">
            Available
          </span>
        </div>
      </motion.div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User size={16} />
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your full name" 
                      {...field} 
                      required 
                      className="py-6 focus:ring-2 focus:ring-ankan-brown/30 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Mail size={16} />
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      {...field} 
                      required 
                      className="py-6 focus:ring-2 focus:ring-ankan-brown/30 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone size={16} />
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your phone number" 
                      {...field} 
                      required 
                      className="py-6 focus:ring-2 focus:ring-ankan-brown/30 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <FormField
              control={form.control}
              name="participants"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Users size={16} />
                    Number of Participants
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      min="1" 
                      max="10" 
                      {...field} 
                      required 
                      className="py-6 focus:ring-2 focus:ring-ankan-brown/30 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
          
          <motion.div
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="bg-ankan-beige/30 p-4 rounded-md mt-6"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Amount:</span>
              <span className="text-xl font-bold">₹{calculateTotal()}</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="pt-6"
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-ankan-brown hover:bg-ankan-brown/90 text-white py-6 rounded-md transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" /> Proceed to Payment
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
    </motion.div>
  );
};

export default WorkshopBookingForm;