import { lazy, Suspense } from "react";
import { useToast } from "@/hooks/use-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Toaster = lazy(() => import("@/components/ui/toaster"));

function Notifications() {
  const message = useToast();
  if (!message) return null;
  return (
    <Suspense fallback={null}>
      <Toaster message={message} />
    </Suspense>
  );
}

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
    <Notifications />
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
