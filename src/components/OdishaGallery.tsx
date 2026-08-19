import { ScrollReveal } from './ScrollReveal'; // Trigger HMR

// Imported Local Assets
import jagannathImg from '../assets/jagannath.png';
import konarkImg from '../assets/konark.png';
import bhubaneswarImg from '../assets/bhubaneswar_temple.png';
import chilikaImg from '../assets/chilika.png';
import bhitarkanikaImg from '../assets/bhitarkanika.png';
import nandankananImg from '../assets/nandankanan.png';
import puriBeachImg from '../assets/puri_beach.png';
import pipliImg from '../assets/pipli_applique.png';
import udayagiriImg from '../assets/udayagiri.png';
import chandipurImg from '../assets/chandipur.png';
import daringbadiImg from '../assets/daringbadi.png';
import gopalpurImg from '../assets/gopalpur.png';
import raghurajpurImg from '../assets/raghurajpur.png';

// High Quality Fallbacks for locations lacking generated SVGs
const simlipalImg = "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80"; // Forest

const categoryData = [
  {
    category: "Religious & Historical",
    items: [
      { id: 1, title: 'Jagannath Temple (Puri)', desc: 'One of the four holiest Hindu pilgrimage sites.', image: jagannathImg, colSpan: 'col-span-2', rowSpan: 'row-span-2' },
      { id: 2, title: 'Konark Sun Temple', desc: 'A massive 13th-century stone chariot (UNESCO site).', image: konarkImg, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
      { id: 3, title: 'Lingaraj Temple', desc: 'The oldest and largest temple in the "Temple City".', image: bhubaneswarImg, colSpan: 'col-span-1', rowSpan: 'row-span-2' },
      { id: 4, title: 'Udayagiri Caves', desc: 'Ancient rock-cut caves used by Jain monks.', image: udayagiriImg, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    ]
  },
  {
    category: "Nature & Wildlife",
    items: [
      { id: 5, title: 'Chilika Lake', desc: 'Asia’s largest lagoon, famous for dolphins.', image: chilikaImg, colSpan: 'col-span-2', rowSpan: 'row-span-1' },
      { id: 6, title: 'Bhitarkanika', desc: 'A "Mini-Amazon" with mangroves and crocodiles.', image: bhitarkanikaImg, colSpan: 'col-span-1', rowSpan: 'row-span-2' },
      { id: 7, title: 'Simlipal Park', desc: 'A huge tiger reserve with beautiful waterfalls.', image: simlipalImg, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
      { id: 8, title: 'Nandankanan Zoo', desc: 'Famous for its white tiger safari.', image: nandankananImg, colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    ]
  },
  {
    category: "Beaches & Hill Stations",
    items: [
      { id: 9, title: 'Puri Beach', desc: 'Great for sunsets and the Sand Art Festival.', image: puriBeachImg, colSpan: 'col-span-1', rowSpan: 'row-span-2' },
      { id: 10, title: 'Chandipur Beach', desc: 'Unique because the sea recedes up to 5km.', image: chandipurImg, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
      { id: 11, title: 'Daringbadi', desc: 'The "Kashmir of Odisha" for its cool climate.', image: daringbadiImg, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
      { id: 12, title: 'Gopalpur-on-Sea', desc: 'A quiet, scenic beach town with colonial charm.', image: gopalpurImg, colSpan: 'col-span-1', rowSpan: 'row-span-1' },
    ]
  },
  {
    category: "Culture & Craft",
    items: [
      { id: 13, title: 'Raghurajpur', desc: 'A heritage village famous for Pattachitra.', image: raghurajpurImg, colSpan: 'col-span-2', rowSpan: 'row-span-1' },
      { id: 14, title: 'Pipli', desc: 'Known worldwide for its colorful applique handloom work.', image: pipliImg, colSpan: 'col-span-2', rowSpan: 'row-span-1' },
    ]
  }
];

export function OdishaGallery() {
  const allImages = categoryData.flatMap(cat => cat.items);

  return (
    <section className="relative w-full min-h-[150vh] bg-[#f8f9fa] py-32 px-4 md:px-8 z-10 font-sans">
      <div className="container mx-auto max-w-[1400px]">
        {/* Header section */}
        <ScrollReveal className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm">Discover</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-4 text-brand-navy font-bold leading-tight">
            The Wonders of Odisha
          </h2>
          <p className="text-ocean/70 mt-6 text-lg">
            From the profound spiritual ambiance of ancient temples to the untamed beauty of its forests and the vibrant colors of its traditional crafts.
          </p>
        </ScrollReveal>

        {/* Masonry Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {allImages.map((item, index) => (
            <ScrollReveal 
              key={item.id}
              delay={index % 4 * 0.1}
              className={`relative overflow-hidden group rounded-3xl shadow-xl ${item.colSpan} ${item.rowSpan}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-serif text-2xl md:text-3xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
