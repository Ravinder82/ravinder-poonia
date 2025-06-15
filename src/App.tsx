
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AICoaching from "./pages/AICoaching";
import AIPortfolio from "./pages/AIPortfolio";
import BackgroundSVG from "./components/layout/BackgroundSVG";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BackgroundSVG />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-coaching" element={<AICoaching />} />
          <Route path="/ai-portfolio" element={<AIPortfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
