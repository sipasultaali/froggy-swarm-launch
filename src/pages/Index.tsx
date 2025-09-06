import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    let isScrollingDown = true;
    let scrollInterval: NodeJS.Timeout;
    
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        const currentScroll = window.pageYOffset;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        if (isScrollingDown) {
          // Scroll down gradually
          if (currentScroll >= maxScroll) {
            // Reached bottom, switch to scroll up
            isScrollingDown = false;
          } else {
            window.scrollBy(0, 2); // Scroll down 2 pixels at a time
          }
        } else {
          // Scroll up gradually
          if (currentScroll <= 0) {
            // Reached top, switch to scroll down
            isScrollingDown = true;
          } else {
            window.scrollBy(0, -2); // Scroll up 2 pixels at a time
          }
        }
      }, 20); // Update every 20ms for smooth scrolling
    };
    
    // Start auto-scroll after 3 seconds
    const initialTimeout = setTimeout(startAutoScroll, 3000);
    
    return () => {
      clearTimeout(initialTimeout);
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
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