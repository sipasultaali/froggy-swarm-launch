const Footer = () => {
  return (
    <footer className="bg-vintage-brown border-t-4 border-vintage-gold py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-vintage-gold mb-2">Swarm of memes 🐸</h3>
          <p className="text-vintage-cream">The most notorious frog gang in crypto</p>
        </div>
        
        <div className="flex justify-center space-x-8 mb-6">
          <a 
            href="https://t.me/swarmofmemes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-vintage-gold hover:text-vintage-cream transition-colors text-lg font-semibold"
          >
            📱 Telegram
          </a>
          <a 
            href="https://x.com/SwarmofmemeFr0g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-vintage-gold hover:text-vintage-cream transition-colors text-lg font-semibold"
          >
            🐦 Twitter/X
          </a>
          <a 
            href="https://pump.fun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-vintage-gold hover:text-vintage-cream transition-colors text-lg font-semibold"
          >
            🚀 Pump.Fun
          </a>
        </div>
        
        <p className="text-vintage-cream/70 text-sm">
          © 2024 Swarm of memes. All rights reserved. 
          <br />
          <span className="text-xs">Built on Solana • Powered by Memes • Backed by Frogs</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;