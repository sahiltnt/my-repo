import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  Headphones, 
  Route, 
  Star, 
  ArrowRight,
  Navigation,
  CheckCircle2,
  Wallet,
  Plane,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import heroBannerImg from '../assets/HeroBanner.png';
import jagannathImg from '../assets/jagannath.png';
import konarkImg from '../assets/konark.png';
import chilikaImg from '../assets/chilika.png';
import puriBeachImg from '../assets/puri_beach.png';
import bhubaneswarImg from '../assets/bhubaneswar_temple.png';
import bhitarkanikaImg from '../assets/bhitarkanika.png';
import nandankananImg from '../assets/nandankanan.png';
import pipliImg from '../assets/pipli_applique.png';
import udayagiriImg from '../assets/udayagiri.png';
import chandipurImg from '../assets/chandipur.png';
import daringbadiImg from '../assets/daringbadi.png';
import gopalpurImg from '../assets/gopalpur.png';
import raghurajpurImg from '../assets/raghurajpur.png';
import { OdishaGallery } from '../components/OdishaGallery';

export function Home() {
  return (
    <div className="w-full bg-white relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] blob-orange -mr-40 -mt-40 z-0 opacity-40 select-none pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] blob-purple -ml-20 z-0 opacity-30 select-none pointer-events-none" />

      {/* New Hero Section */}
      <section 
        className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 min-h-[90vh] md:min-h-screen flex items-center z-10 bg-cover bg-center md:bg-[center_top] bg-no-repeat transition-all duration-500 overflow-hidden"
        style={{ backgroundImage: `url(${heroBannerImg})` }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="w-full lg:w-[50%] xl:w-[45%] text-center lg:text-left mt-10 md:mt-0 flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-black leading-[1.1] mb-6 flex flex-col"
            >
              <span className="font-semibold tracking-tight">Enjoy Your</span>
              <span className="italic font-light tracking-wide mt-2" style={{ fontFamily: 'var(--font-script, cursive)' }}>Moment</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-black/80 text-base sm:text-lg md:text-xl md:leading-relaxed mb-10 max-w-lg font-medium mx-auto lg:mx-0"
            >
              Discover the <strong className="text-black">timeless beauty</strong> and vibrant <strong className="text-black">culture</strong> of Odisha, where spirituality meets pristine landscapes. Plan your dream getaway today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8"
            >
              <button className="bg-gradient-to-r from-[#2186b5] to-[#4abbe1] hover:scale-105 transition-transform text-white px-10 py-4 rounded-full font-semibold shadow-2xl shadow-[#2186b5]/40 text-lg w-full sm:w-auto">
                Explore
              </button>
              
              <div className="bg-white/40 backdrop-blur-md border border-white/60 text-black px-6 py-3 rounded-2xl flex flex-col items-center justify-center shadow-lg w-full sm:w-auto">
                <span className="text-xs font-medium tracking-wide uppercase">Up to</span>
                <span className="text-2xl font-black leading-none my-0.5">25%</span>
                <span className="text-xs font-bold tracking-widest uppercase">Off</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-ocean/60 font-bold uppercase tracking-widest text-sm">Category</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2 text-brand-navy">We Offer Best Services</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Premium Experience', desc: 'Handpicked luxury accommodations and exclusive access.' },
              { icon: MapPin, title: 'Local Expertise', desc: 'Guided by passionate locals who know the hidden gems.' },
              { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock concierge service during your trip.' },
              { icon: Route, title: 'Custom Itineraries', desc: 'Tailor-made journeys designed around your preferences.' }
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1} variant="fade-up">
                <div className="bg-white p-10 rounded-3xl hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-300 text-center h-full border border-transparent hover:border-brand-lightOrange group relative overflow-hidden">
                  <div className="w-16 h-16 mx-auto bg-brand-yellow/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                    <feature.icon className="w-8 h-8 text-brand-yellow group-hover:text-brand-orange transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-navy relative z-10">{feature.title}</h3>
                  <p className="text-ocean/70 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-brand-orange rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations - Slider Style Section */}
      <section className="py-24 px-4 relative z-10 overflow-hidden">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="text-ocean/60 font-bold uppercase tracking-widest text-sm">Top Selling</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2 text-brand-navy font-bold">Top Destinations</h2>
          </ScrollReveal>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x scrollbar-hide no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { name: 'Jagannath Temple, Puri', price: '$5.42k', days: '10 Days Trip', img: jagannathImg },
              { name: 'Konark Sun Temple', price: '$4.2k', days: '12 Days Trip', img: konarkImg },
              { name: 'Bhubaneswar Temples', price: '$2.8k', days: '5 Days Trip', img: bhubaneswarImg },
              { name: 'Udayagiri Caves', price: '$1.5k', days: '2 Days Trip', img: udayagiriImg },
              { name: 'Chilika Lake, Odisha', price: '$15k', days: '28 Days Trip', img: chilikaImg },
              { name: 'Bhitarkanika Park', price: '$6.5k', days: '4 Days Trip', img: bhitarkanikaImg },
              { name: 'Simlipal Reserve', price: '$4.8k', days: '5 Days Trip', img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80" },
              { name: 'Nandankanan Zoo', price: '$1.2k', days: '1 Day Trip', img: nandankananImg },
              { name: 'Golden Beach, Puri', price: '$3.5k', days: '8 Days Trip', img: puriBeachImg },
              { name: 'Chandipur Beach', price: '$2.5k', days: '3 Days Trip', img: chandipurImg },
              { name: 'Daringbadi Hill Station', price: '$3.8k', days: '4 Days Trip', img: daringbadiImg },
              { name: 'Gopalpur-on-Sea', price: '$2.1k', days: '3 Days Trip', img: gopalpurImg },
              { name: 'Raghurajpur Heritage', price: '$1.8k', days: '2 Days Trip', img: raghurajpurImg },
              { name: 'Pipli Applique Work', price: '$1.4k', days: '1 Day Trip', img: pipliImg }
            ].map((dest, i) => (
              <motion.div 
                key={dest.name}
                whileHover={{ y: -10 }}
                className="min-w-[320px] md:min-w-[380px] bg-white rounded-[1.5rem] shadow-xl shadow-brand-navy/5 overflow-hidden snap-center group border border-black/5"
              >
                <div className="h-[320px] overflow-hidden">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-brand-navy">{dest.name}</h3>
                    <span className="text-lg font-bold text-ocean/80">{dest.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-ocean/60 font-medium">
                    <Navigation className="w-4 h-4 text-brand-navy" />
                    <span>{dest.days}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-4">
            <div className="w-12 h-1 bg-brand-orange rounded-full" />
            <div className="w-3 h-1 bg-ocean/20 rounded-full" />
            <div className="w-3 h-1 bg-ocean/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* Book Your Next Trip Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            
            {/* Steps Content */}
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <span className="text-ocean/60 font-bold uppercase tracking-widest text-sm">Easy and Fast</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mt-4 mb-12 text-brand-navy leading-tight font-bold">
                  Book Your Next Trip<br />In 3 Easy Steps
                </h2>
                
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-yellow/20">
                      <Route className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-1">Choose Destination</h4>
                      <p className="text-ocean/60 max-w-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-brand-orange rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-orange/20">
                      <Wallet className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-1">Make Payment</h4>
                      <p className="text-ocean/60 max-w-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-brand-navy rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-navy/20">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy mb-1">Reach Airport on Selected Date</h4>
                      <p className="text-ocean/60 max-w-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Floating Card UI */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end pr-10">
              <ScrollReveal variant="slide-right">
                <div className="relative">
                  {/* Main Card */}
                  <div className="w-[370px] bg-white rounded-[1.5rem] shadow-2xl p-6 relative z-10 border border-black/5">
                    <div className="rounded-3xl overflow-hidden h-[200px] mb-6">
                      <img src={puriBeachImg} alt="Trip to Puri" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Trip To Puri</h3>
                    <p className="text-ocean/60 font-medium mb-6">14-29 June | by Sahil Travels</p>
                    
                    <div className="flex gap-4 mb-8">
                      <div className="w-10 h-10 bg-ocean/5 rounded-full flex items-center justify-center text-ocean/60 hover:bg-brand-orange hover:text-white transition-all cursor-pointer">
                        <Route className="w-4 h-4" />
                      </div>
                      <div className="w-10 h-10 bg-ocean/5 rounded-full flex items-center justify-center text-ocean/60 hover:bg-brand-orange hover:text-white transition-all cursor-pointer">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div className="w-10 h-10 bg-ocean/5 rounded-full flex items-center justify-center text-ocean/60 hover:bg-brand-orange hover:text-white transition-all cursor-pointer">
                        <Navigation className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 text-ocean/60">
                        <Route className="w-4 h-4" />
                        <span className="font-medium text-sm">24 people going</span>
                      </div>
                      <Heart className="w-6 h-6 text-ocean/20 hover:text-brand-orange cursor-pointer transition-colors" />
                    </div>
                  </div>

                  {/* Floating Small Card */}
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -right-16 md:-right-32 bottom-20 bg-white p-5 rounded-3xl shadow-2xl z-20 border border-black/5 flex gap-4 w-[280px]"
                  >
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center shrink-0">
                      <img src={jagannathImg} className="w-10 h-10 rounded-full object-cover" alt="Jagannath" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-ocean/40 uppercase mb-1">Ongoing</p>
                      <h4 className="text-brand-navy font-bold mb-3">Trip to Puri</h4>
                      <div className="flex justify-between items-end gap-2">
                        <div className="flex-1">
                          <p className="text-sm font-bold text-brand-navy mb-1"><span className="text-brand-orange">40%</span> completed</p>
                          <div className="w-full h-1.5 bg-ocean/5 rounded-full overflow-hidden">
                            <div className="w-[40%] h-full bg-brand-orange" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Image Gallery Section (150vh) */}
      <OdishaGallery />

      {/* Testimonials */}
      <section className="py-24 bg-brand-navy text-white px-4 relative z-10">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Guest Experiences</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Don't just take our word for it. Read what our travelers have to say.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Jenkins', loc: 'UK', quote: 'An absolutely magical experience. The attention to detail in our itinerary was flawless.' },
              { name: 'Rajesh Kumar', loc: 'Mumbai', quote: 'Odyssey showed us a side of Odisha we never knew existed. Truly premium service.' },
              { name: 'Elena Rossi', loc: 'Italy', quote: 'The cultural immersion was profound. The guides were knowledgeable and passionate.' }
            ].map((test, i) => (
              <ScrollReveal key={test.name} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                  <div className="flex gap-1 text-brand-yellow mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-white/90 text-lg italic mb-8 font-medium">"{test.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-serif text-xl border border-white/10">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{test.name}</h4>
                      <p className="text-white/50 text-sm">{test.loc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 px-4 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" className="w-full h-full object-cover" alt="Beach" />
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>

        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 font-bold">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let us craft the perfect Odisha itinerary tailored to your desires.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-105 shadow-2xl shadow-brand-orange/40 text-lg">
              Plan Your Trip <ArrowRight className="w-6 h-6" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}