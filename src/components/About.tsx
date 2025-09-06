import bannerImage from "@/assets/banner-image.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-vintage-brown">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <img 
            src={bannerImage} 
            alt="Swarm of Memes Banner" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl border-4 border-vintage-gold mb-8"
          />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-vintage-gold">
            The Gang's All Here
          </h2>
          
          <p className="text-lg md:text-xl text-vintage-cream max-w-4xl mx-auto leading-relaxed">
            In the wild west of crypto, there's a new sheriff in town - and they're green, 
            they're mean, and they're making memes! The Swarm of Memes isn't just another 
            meme coin; we're a movement of frogs with attitude, style, and a serious 
            addiction to pumping numbers on the Solana blockchain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-vintage-green/20 p-6 rounded-lg border-2 border-vintage-green text-center">
            <div className="text-4xl mb-4">🐸</div>
            <h3 className="text-xl font-bold text-vintage-gold mb-3">Ribbit Revolution</h3>
            <p className="text-vintage-cream">
              We're not just hopping around - we're launching straight to the moon with our 
              gangster swagger and meme magic.
            </p>
          </div>
          
          <div className="bg-vintage-gold/20 p-6 rounded-lg border-2 border-vintage-gold text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-vintage-gold mb-3">Solana Ecosystem</h3>
            <p className="text-vintage-cream">
              Built on Solana for lightning-fast transactions and minimal fees. 
              Perfect for when the gang needs to move quickly.
            </p>
          </div>
          
          <div className="bg-secondary/20 p-6 rounded-lg border-2 border-secondary text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-vintage-gold mb-3">Pump.Fun Ready</h3>
            <p className="text-vintage-cream">
              Designed specifically for the pump.fun platform - where memes become legends 
              and frogs become millionaires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;