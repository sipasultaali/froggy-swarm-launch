import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    let isScrollingDown = true;
    
    const autoScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      
      if (isScrollingDown) {
        // Scroll to bottom
        window.scrollTo({
          top: maxScroll,
          behavior: 'smooth'
        });
        isScrollingDown = false;
      } else {
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        isScrollingDown = true;
      }
    };
    
    // Start auto-scroll after 3 seconds, then repeat every 8 seconds
    const initialTimeout = setTimeout(() => {
      autoScroll();
      const interval = setInterval(autoScroll, 8000);
      
      return () => clearInterval(interval);
    }, 3000);
    
    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Social />
      <Footer />
    </main>
  );
};

export default Index;