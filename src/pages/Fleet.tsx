import { ScrollReveal } from '../components/ScrollReveal';
import { ShieldCheck, MapPin, Gauge, User } from 'lucide-react';
import { motion } from 'framer-motion';

const fleetData = [
  {
    id: 1,
    category: 'Buses',
    name: 'Luxury Volvo AC Coach',
    seating: '45 Seater',
    features: ['Reclining Seats', 'AC', 'Entertainment System', 'On-board Toilet'],
    driver: 'Ramesh Chandra',
    experience: '15 Years',
    guide: 'Sanjukta Mohanty',
    guideExp: '8 Years',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    driverImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    guideImg: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
  },
  {
    id: 2,
    category: 'Traveller',
    name: 'Force Traveller Luxury',
    seating: '17 Seater',
    features: ['Push-back Seats', 'Ample Legroom', 'USB Charging', 'Music System'],
    driver: 'Bikram Das',
    experience: '10 Years',
    guide: 'Prakash Rout',
    guideExp: '6 Years',
    img: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80',
    driverImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    guideImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    id: 3,
    category: 'Bolero',
    name: 'Mahindra Bolero Neo',
    seating: '7 Seater',
    features: ['Hilly Road Specialist', 'High Ground Clearance', 'AC', 'Extra Luggage Rack'],
    driver: 'Sunil Patra',
    experience: '12 Years',
    guide: 'Deepak Sahani',
    guideExp: '5 Years',
    img: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800&q=80',
    driverImg: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    guideImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80'
  },
  {
    id: 4,
    category: 'EV Car',
    name: 'Tata Nexon EV Prime',
    seating: '5 Seater',
    features: ['Zero Emission', 'Silent Drive', 'Eco-friendly', 'Premium Interior'],
    driver: 'Ajay Meher',
    experience: '7 Years',
    guide: 'Sagarika Sen',
    guideExp: '4 Years',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    driverImg: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&q=80',
    guideImg: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&q=80'
  }
];

export function Fleet() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 px-4 text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6">
            Travel in Comfort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Explore Odisha with our premium vehicles, experienced drivers, and professional tour guides. Your safety and comfort are our top priorities.
          </motion.p>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {fleetData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1} className="h-full">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-navy/5 flex flex-col h-full border border-black/5 hover:border-brand-orange/20 transition-all duration-500 group">
                
                {/* Vehicle Image */}
                <div className="w-full aspect-[16/10] relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-brand-navy mb-2">{item.name}</h2>
                    <div className="flex items-center gap-2 text-ocean/60 font-medium">
                      <User className="w-4 h-4 text-brand-orange" />
                      <span>{item.seating} Capacity</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Key Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map(feature => (
                        <span key={feature} className="bg-slate-100 text-ocean/80 px-3 py-1 rounded-lg text-xs font-semibold">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Team */}
                  <div className="mt-auto pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-brand-yellow/30 bg-slate-100 flex-shrink-0">
                        <img src={item.driverImg} alt={item.driver} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase font-bold text-ocean/40 tracking-tighter truncate">Chief Driver</p>
                        <p className="text-sm font-bold text-brand-navy leading-tight truncate">{item.driver}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-brand-orange/30 bg-slate-100 flex-shrink-0">
                        <img src={item.guideImg} alt={item.guide} className="w-full h-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase font-bold text-ocean/40 tracking-tighter truncate">Tour Guide</p>
                        <p className="text-sm font-bold text-brand-navy leading-tight truncate">{item.guide}</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 w-full bg-brand-navy text-white py-4 rounded-2xl font-bold hover:bg-brand-orange transition-colors shadow-lg shadow-brand-navy/10">
                    Book This Ride
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="bg-brand-navy py-24 px-4 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <ScrollReveal delay={0.1}>
              <ShieldCheck className="w-16 h-16 text-brand-yellow mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Certified Safety</h3>
              <p className="text-white/70">All vehicles are regularly sanitized and pass rigorous safety inspections before every trip.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <MapPin className="w-16 h-16 text-brand-orange mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">GPS Tracking</h3>
              <p className="text-white/70">Real-time GPS monitored fleet ensuring your journey is always on track and secure.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Gauge className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Zero Breakdowns</h3>
              <p className="text-white/70">Well-maintained 24/7 support fleet to ensure your travel schedule never meets an interruption.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
