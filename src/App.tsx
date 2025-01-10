import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HtmlTutorial from "./pages/tutorials/HtmlTutorial";
import CssTutorial from "./pages/tutorials/CssTutorial";
import JavaScriptTutorial from "./pages/tutorials/JavaScriptTutorial";
import PythonTutorial from "./pages/tutorials/PythonTutorial";
import FrontendTutorial from "./pages/tutorials/FrontendTutorial";
import BackendTutorial from "./pages/tutorials/BackendTutorial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutorial/html" element={<HtmlTutorial />} />
          <Route path="/tutorial/css" element={<CssTutorial />} />
          <Route path="/tutorial/javascript" element={<JavaScriptTutorial />} />
          <Route path="/tutorial/python" element={<PythonTutorial />} />
          <Route path="/tutorial/frontend" element={<FrontendTutorial />} />
          <Route path="/tutorial/backend" element={<BackendTutorial />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;