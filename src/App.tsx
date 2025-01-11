import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const Navigation = () => (
  <nav className="bg-matrix-dark border-b border-matrix-green/30">
    <div className="container py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-matrix-green font-mono text-xl hover:brightness-125 transition-all">
          Infiniti-minds
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-matrix-green hover:brightness-125 transition-all">
            Home
          </Link>
          <Link to="/blog" className="text-matrix-green hover:brightness-125 transition-all">
            Blog
          </Link>
          <Link to="/contact" className="text-matrix-green hover:brightness-125 transition-all">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-matrix-dark text-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;