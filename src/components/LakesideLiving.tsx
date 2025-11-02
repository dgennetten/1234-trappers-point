import { Waves, Heart, TreePine, Sunrise } from 'lucide-react';

export default function LakesideLiving() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/lake-panorama.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-950/90" />
      </div>

      <div className="relative container mx-auto px-4 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-shadow">
          Lakeside Living
        </h2>
        
        <p className="text-xl md:text-2xl text-center mb-16 max-w-3xl mx-auto text-shadow italic">
          "Like having your own 24/7 nature documentary"
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all">
            <Waves className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Panoramic Lake Views</h3>
            <p className="text-lg leading-relaxed">
              Wake up to breathtaking water vistas that change with every season. 
              Watch the morning mist rise from the lake as you sip your coffee, 
              and witness stunning sunsets paint the water in golden hues.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all">
            <Heart className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Therapeutic Benefits</h3>
            <p className="text-lg leading-relaxed">
              Scientific studies show that proximity to water reduces stress, 
              promotes mental clarity, and enhances overall well-being. 
              This isn't just a home—it's your personal wellness retreat.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all">
            <TreePine className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Private & Peaceful</h3>
            <p className="text-lg leading-relaxed">
              Experience true tranquility on your own 3+ acre lakefront sanctuary. 
              Close enough to town for convenience, yet secluded enough to feel 
              a world away from the everyday hustle.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover:bg-white/20 transition-all">
            <Sunrise className="mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Ever-Changing Beauty</h3>
            <p className="text-lg leading-relaxed">
              From ice skating in winter to paddle boarding in summer, 
              from watching migratory birds to stargazing over calm waters—
              every day brings new wonders to discover.
            </p>
          </div>
        </div>

        {/* Poetic Quote */}
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-shadow">
            "There's a profound peace that comes from living beside water—
            the gentle rhythm of waves, the dance of light across the surface, 
            the wildlife that visits your shore. This is more than real estate; 
            this is a way of life that nourishes the soul daily."
          </blockquote>
        </div>
      </div>
    </section>
  );
}