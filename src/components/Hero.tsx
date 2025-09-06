import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src={heroImage} 
            alt="Swarm of Memes - Gangster Frogs" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl border-4 border-vintage-gold"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-vintage-gold drop-shadow-lg">
          Swarm of memes 🐸
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-vintage-cream max-w-3xl mx-auto leading-relaxed">
          Join the most notorious gang of frogs in the Solana ecosystem! 
          We're here to make memes, stack coins, and take over pump.fun with style.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="gangster" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://pump.fun', '_blank')}
          >
            🚀 Launch on Pump.Fun
          </Button>
          
          <Button 
            variant="frog" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://t.me/swarmofmemes', '_blank')}
          >
            💬 Join Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;