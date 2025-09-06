import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center">
        <div className="text-8xl mb-6">🐸</div>
        <h1 className="mb-4 text-6xl font-bold text-vintage-gold">404</h1>
        <p className="mb-8 text-2xl text-vintage-cream">Ribbit! This page hopped away!</p>
        <p className="mb-8 text-lg text-vintage-cream/80">
          Looks like you've wandered off the lily pad. Let's get you back to the swamp!
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-gradient-gold text-vintage-brown px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform shadow-lg border-2 border-vintage-brown"
        >
          🏠 Return to Gang Headquarters
        </a>
      </div>
    </div>
  );
};

export default NotFound;
