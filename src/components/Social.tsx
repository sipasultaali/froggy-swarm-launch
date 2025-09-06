import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-vintage-gold">
          Join The Gang
        </h2>
        
        <p className="text-lg md:text-xl text-vintage-cream mb-12 max-w-3xl mx-auto">
          Ready to hop into the most exclusive frog gang in crypto? 
          Follow us on our social channels and stay updated with all the latest heists and memes!
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-vintage-brown/50 p-8 rounded-lg border-2 border-vintage-green backdrop-blur-sm">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-vintage-gold mb-4">Telegram</h3>
            <p className="text-vintage-cream mb-6">
              Join our private gang chat for insider info, memes, and direct access to the crew.
            </p>
            <Button 
              variant="frog" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://t.me/swarmofmemes', '_blank')}
            >
              💬 Join Telegram Gang
            </Button>
          </div>
          
          <div className="bg-vintage-brown/50 p-8 rounded-lg border-2 border-vintage-gold backdrop-blur-sm">
            <div className="text-4xl mb-4">🐦</div>
            <h3 className="text-2xl font-bold text-vintage-gold mb-4">Twitter / X</h3>
            <p className="text-vintage-cream mb-6">
              Follow us for the latest updates, memes, and announcements from the swamp.
            </p>
            <Button 
              variant="gangster" 
              size="lg" 
              className="w-full"
              onClick={() => window.open('https://x.com/SwarmofmemeFr0g', '_blank')}
            >
              🔔 Follow on X
            </Button>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-vintage-gold/10 rounded-lg border-2 border-vintage-gold backdrop-blur-sm">
          <h3 className="text-3xl font-bold text-vintage-gold mb-4">🎯 Ready to Launch?</h3>
          <p className="text-vintage-cream mb-6 text-lg">
            The gang is locked and loaded. Time to make history on pump.fun!
          </p>
          <Button 
            variant="gangster" 
            size="lg" 
            className="text-xl px-12 py-6"
            onClick={() => window.open('https://pump.fun', '_blank')}
          >
            🚀 Launch $SWARM Now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Social;