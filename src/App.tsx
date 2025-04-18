
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnomaliesPage from "./pages/AnomaliesPage";
import AnomalyDetail from "./pages/AnomalyDetail";
import StoriesPage from "./pages/StoriesPage";
import PersonnelPage from "./pages/PersonnelPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ProtocolsPage from "./pages/ProtocolsPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/anomalies" element={<AnomaliesPage />} />
          <Route path="/anomaly/:id" element={<AnomalyDetail />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/personnel" element={<PersonnelPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/protocols" element={<ProtocolsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;