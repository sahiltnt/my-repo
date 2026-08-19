import { ScrollReveal } from './ScrollReveal';
import pakhalaImg from '../assets/pakhala_bhata.png';
import dahibaraImg from '../assets/dahibara.png';
import udayagiriImg from '../assets/udayagiri.png';
import { Flame, Wind, Sun, Utensils } from 'lucide-react';

const rasagullaImg = "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&q=80"; // Sweet placeholder
const chenapodaImg = "https://images.unsplash.com/photo-1627308595229-7830f5c9100f?w=600&q=80"; // Baked/cake placeholder
const odissiImg = "https://images.unsplash.com/photo-1533621516089-13b038890786?w=600&q=80"; // Dance/Culture

export function OdishaInfo() {
  return (
    <div className="w-full bg-white relative font-sans">
      
      {/* History & Heritage Section */}
      <section className="py-24 px-4 bg-brand-lightOrange/10 border-b border-ocean/10">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy font-bold mb-4">The Legacy of Kalinga</h2>
            <p className="text-ocean/70 text-lg max-w-3xl mx-auto">
              Dive deep into the rich tapestry of Odisha's historical grandeur and classical arts.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal className="bg-white rounded-3xl shadow-xl flex flex-col border border-black/5 overflow-hidden group" delay={0.1}>
              <div className="h-64 overflow-hidden">
                <img src={udayagiriImg} alt="Udayagiri Caves" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-brand-orange mb-4">Emperor Kharavela & Kalinga History</h3>
                <p className="text-ocean/80 leading-relaxed font-medium">
                  Historically known as Kalinga, Odisha was the epic center of the great Kalinga War (261 BCE), which profoundly changed Emperor Ashoka. Later, the great <strong>Kalinga Samrat Kharavela</strong> reigned supreme, expanding the empire's boundaries and deeply influencing the art and architecture of the region, notably seen in the Udayagiri caves.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="bg-white rounded-3xl shadow-xl flex flex-col border border-black/5 overflow-hidden group" delay={0.2}>
              <div className="h-64 overflow-hidden">
                <img src={odissiImg} alt="Odissi Dance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-brand-orange mb-4">Odissi Dance: Poetry in Motion</h3>
                <p className="text-ocean/80 leading-relaxed font-medium">
                  Odissi is one of the pre-eminent classical dance forms of India which originated in the Hindu temples of Odisha. Known for its extremely fluid movements, graceful gestures (mudras), and the quintessential 'Tribhangi' posture, it visually interprets mythical stories and spiritual poems, making it a mesmerizing cultural treasure of the state.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Miracles Section */}
      <section className="py-24 px-4 relative z-10 overflow-hidden text-center bg-brand-navy">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <ScrollReveal className="mb-16">
            <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm">Divine Mysteries</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2 text-white font-bold">Miracles of Jagannath Temple</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <ScrollReveal className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform" delay={0.1}>
              <Sun className="w-10 h-10 text-brand-yellow mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">The Shadowless Temple</h3>
              <p className="text-white/70 leading-relaxed">
                An architectural miracle or divine intervention! The main dome of the Jagannath Temple is constructed in such a way that it casts no shadow at any given time of the day.
              </p>
            </ScrollReveal>

            <ScrollReveal className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform" delay={0.2}>
              <Wind className="w-10 h-10 text-brand-orange mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">The Defiant Flag</h3>
              <p className="text-white/70 leading-relaxed">
                Contrary to scientific logic, the flag (Patitapabana Bana) mounted on the top of the temple dome always flutters universally in the opposite direction of the wind course.
              </p>
            </ScrollReveal>

            <ScrollReveal className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform" delay={0.3}>
              <Flame className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">The Magical Kitchen</h3>
              <p className="text-white/70 leading-relaxed">
                The Rosha Ghara (Kitchen) uses exactly 7 clay pots stacked over each other. Miraculously, the food in the topmost pot cooks first! It feeds over 100,000 devotees daily without a single bite going to waste.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Best Food Section */}
      <section className="py-24 px-4 bg-slate-50 relative z-10 text-center">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal className="mb-16">
            <Utensils className="w-10 h-10 text-brand-orange mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy font-bold">Flavors of Odisha</h2>
            <p className="text-ocean/70 mt-4 max-w-2xl mx-auto text-lg">
              A culinary journey through authentic Odia cuisine, known for its mild spices, rich flavors, and incredible desserts.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { name: 'Pakhala Bhata', desc: 'Fermented water rice served with fried fish, spinach, and baddi chura. The ultimate summer comfort food.', img: pakhalaImg },
              { name: 'Dahibara Aloo Dum', desc: 'Cuttack\'s legendary street food! Soft dahi vadas mixed with spicy aloo dum and crunchy sev.', img: dahibaraImg },
              { name: 'Rasagola', desc: 'The historic soft, spongy cottage cheese balls soaked in sugar syrup, having its origins in Puri.', img: rasagullaImg },
              { name: 'Chhena Poda', desc: 'The signature roasted cheese dessert of Odisha. Caramelized, soft, and heavenly delicious!', img: chenapodaImg }
            ].map((food, i) => (
              <ScrollReveal key={food.name} delay={i * 0.1} className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-black/5 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={food.img} alt={food.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{food.name}</h3>
                  <p className="text-ocean/70 text-sm font-medium">{food.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
