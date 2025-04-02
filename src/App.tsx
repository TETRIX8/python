
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Topics from "./pages/Topics";
import Variables from "./pages/Variables";
import Strings from "./pages/Strings";
import DataStructures from "./pages/DataStructures";
import Conditions from "./pages/Conditions";
import MathOperators from "./pages/MathOperators";
import Loops from "./pages/Loops";
import PyTurtle from "./pages/PyTurtle";
import Functions from "./pages/Functions";
import TicTacToe from "./pages/TicTacToe";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10000); // Changed from 5000 to 10000 for 10-second splash screen

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
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
            <Route path="/loops" element={<Loops />} />
            <Route path="/pyturtle" element={<PyTurtle />} />
            <Route path="/functions" element={<Functions />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
