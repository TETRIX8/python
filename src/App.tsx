import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Topics from "./pages/Topics";
import Variables from "./pages/Variables";
import Strings from "./pages/Strings";
import DataStructures from "./pages/DataStructures";
import Conditions from "./pages/Conditions";
import MathOperators from "./pages/MathOperators";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/topics" replace />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/variables" element={<Variables />} />
          <Route path="/strings" element={<Strings />} />
          <Route path="/data-structures" element={<DataStructures />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/math-operators" element={<MathOperators />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;