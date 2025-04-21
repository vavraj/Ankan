
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Login from "./pages/Login";
import Rewards from "./pages/Rewards";
import Workshops from "./pages/Workshops";
import AboutPaitkar from "./pages/AboutPaitkar";
import Artisans from "./pages/Artisans";
import Contact from "./pages/Contact";
import SupportArtisan from "./pages/SupportArtisan";
import Customize from "./pages/Customize";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex m-0 p-0 flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/collections" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Login />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/about-paitkar" element={<AboutPaitkar />} />
              <Route path="/makers" element={<Artisans />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/support-artisan/:id" element={<SupportArtisan />} />
              <Route path="/support-artisan" element={<SupportArtisan />} />
              <Route path="/customize" element={<Customize />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
