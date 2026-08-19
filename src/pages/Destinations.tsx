import React, { useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import jagannathImg from '../assets/jagannath.png';
import konarkImg from '../assets/konark.png';
import bhubaneswarImg from '../assets/bhubaneswar_temple.png';
import udayagiriImg from '../assets/udayagiri.png';
import chilikaImg from '../assets/chilika.png';
import bhitarkanikaImg from '../assets/bhitarkanika.png';
import nandankananImg from '../assets/nandankanan.png';
import puriBeachImg from '../assets/puri_beach.png';
import chandipurImg from '../assets/chandipur.png';
import daringbadiImg from '../assets/daringbadi.png';
import gopalpurImg from '../assets/gopalpur.png';
import raghurajpurImg from '../assets/raghurajpur.png';
import pipliImg from '../assets/pipli_applique.png';

const simlipalImg = "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80";
const dhauliImg = "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80";

const destinations = [
{ id: 1, name: 'Puri Beach', category: 'Beach', desc: 'Great for sunsets and the Sand Art Festival', img: puriBeachImg },
  { id: 2, name: 'Jagannath Temple', category: 'Temple', desc: 'One of the four holiest Hindu pilgrimage sites.', img: jagannathImg },
  { id: 3, name: 'Konark Sun Temple', category: 'Temple', desc: 'A massive 13th-century stone chariot.', img: konarkImg },
  { id: 4, name: 'Lingaraj Temple', category: 'Temple', desc: 'Oldest and largest temple in the Temple City.', img: bhubaneswarImg },
  { id: 5, name: 'Udayagiri Caves', category: 'Culture', desc: 'Ancient rock-cut caves used by Jain monks.', img: udayagiriImg },
  { id: 6, name: 'Chilika Lake', category: 'Nature', desc: "Asia's largest brackish water lagoon.", img: chilikaImg },
  { id: 7, name: 'Bhitarkanika Park', category: 'Nature', desc: 'A "Mini-Amazon" with mangroves and crocodiles.', img: bhitarkanikaImg },
  { id: 8, name: 'Simlipal National Park', category: 'Nature', desc: 'Tiger reserve and biodiversity hotspot.', img: simlipalImg },
  { id: 9, name: 'Nandankanan Zoo', category: 'Nature', desc: 'Famous for its white tiger safari.', img: nandankananImg },
  { id: 10, name: 'Dhauli Shanti Stupa', category: 'Temple', desc: 'Where Emperor Ashoka embraced peace.', img: dhauliImg },
  { id: 11, name: 'Chandipur Beach', category: 'Beach', desc: 'Unique because the sea recedes up to 5km.', img: chandipurImg },
  { id: 12, name: 'Gopalpur-on-Sea', category: 'Beach', desc: 'A quiet, scenic beach town with colonial charm.', img: gopalpurImg },
  { id: 13, name: 'Daringbadi', category: 'Nature', desc: 'The "Kashmir of Odisha" for its cool climate.', img: daringbadiImg },
  { id: 14, name: 'Raghurajpur Heritage', category: 'Culture', desc: 'A heritage village famous for Pattachitra.', img: raghurajpurImg },
  { id: 15, name: 'Pipli Applique Work', category: 'Culture', desc: 'Famous for colorful applique handloom work.', img: pipliImg }
];

const categories = ['All', 'Beach', 'Temple', 'Nature', 'Culture'];
export function Destinations() {
  const [activeTab, setActiveTab] = useState('All');
  const filteredDestinations = destinations.filter(
    (dest) => activeTab === 'All' || dest.category === activeTab
  );
  return (
    <div className="w-full pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 text-center mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6">
            Explore Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            From pristine beaches to ancient temples, discover the diverse
            landscapes and rich heritage of Odisha.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 mb-12">
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) =>
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors ${activeTab === category ? 'text-gold' : 'text-ocean/60 dark:text-offwhite/60 hover:text-ocean dark:hover:text-white'}`}>
              
                {category}
                {activeTab === category &&
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
              </button>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-4">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) =>
            <motion.div
              key={dest.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.4
              }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer">
              
                <img
                src={dest.img}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                    {dest.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 transform transition-transform duration-500">
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Odisha, India</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-6 line-clamp-2">
                    {dest.desc}
                  </p>

                  <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Link
                    to="/packages"
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-gold transition-colors">
                    
                      Explore Packages <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>);

}