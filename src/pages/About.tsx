import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import chilikaImg from '../assets/chilika.png';
import { OdishaGallery } from '../components/OdishaGallery';
import { OdishaInfo } from '../components/OdishaInfo';

export function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${chilikaImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>

          {/* <div className="absolute inset-0 bg-black/50" /> */}
        </div>

        <div className="container relative z-10 px-4 text-center mt-20">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="text-5xl md:text-7xl font-serif text-white mb-6">

            Our Story
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="text-xl text-white/90 font-light max-w-2xl mx-auto">

            Crafting unforgettable journeys through the heart of India's
            best-kept secret.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <ScrollReveal variant="slide-left">
                <h2 className="text-4xl font-serif mb-6 text-ocean-darker dark:text-white">
                  Our Mission
                </h2>
                <p className="text-ocean/80 dark:text-offwhite/80 text-lg leading-relaxed mb-8">
                  At Odyssey Odisha, we believe that travel should be
                  transformative. Our mission is to showcase the profound
                  beauty, ancient heritage, and vibrant culture of Odisha to the
                  world, while maintaining the highest standards of luxury and
                  sustainable tourism.
                </p>
                <div className="border-l-4 border-gold pl-6 py-2">
                  <p className="text-xl font-serif italic text-ocean-darker dark:text-white/90">
                    "To create journeys that don't just show you a place, but
                    make you feel its soul."
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-1/2">
              <ScrollReveal variant="slide-right">
                <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1590766940554-634e1dc68e4a?w=800&q=80"
                    alt="Odisha Heritage"
                    className="w-full h-full object-cover" />

                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      {/* Odisha Detailed Information: History, Miracles, Food */}
      <OdishaInfo />


      {/* Cultural Highlights */}
      <section className="py-24 bg-sand/30 dark:bg-darkcard/30 px-4">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Cultural Heritage</h2>
            <p className="text-ocean/70 dark:text-offwhite/70 max-w-2xl mx-auto">
              Experience the living traditions that make Odisha unique.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Odissi Dance',
                desc: 'One of the oldest surviving dance forms of India, known for its grace and sculptural poses.',
                img: 'https://images.unsplash.com/photo-1533621516089-13b038890786?w=600&q=80'
              },
              {
                title: 'Rath Yatra',
                desc: 'The grand chariot festival of Lord Jagannath, a spectacle of devotion and scale.',
                img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80'
              },
              {
                title: 'Handicrafts',
                desc: 'From Pattachitra paintings to intricate silver filigree, witness master artisans at work.',
                img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=600&q=80'
              }].
              map((item, i) =>
                <ScrollReveal key={item.title} delay={i * 0.2} variant="fade-up">
                  <div className="glass-card rounded-2xl overflow-hidden h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />

                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                      <p className="text-ocean/70 dark:text-offwhite/70 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )}
          </div>
        </div>
      </section>

      {/* <section className="py-24 px-4">
        <div className="container mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Glimpses of Odisha</h2>
          </ScrollReveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {[
              'https://images.unsplash.com/photo-1590766940554-634e1dc68e4a?w=600&q=80',
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
              'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
              'https://images.unsplash.com/photo-1621427639969-cb2e5e190966?w=600&q=80',
              'https://images.unsplash.com/photo-1533621516089-13b038890786?w=600&q=80'].
              map((img, i) =>
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative rounded-xl overflow-hidden group break-inside-avoid">
                    <img
                      src={img}
                      alt="Gallery"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy" />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </ScrollReveal>
              )}
          </div>
        </div>
      </section> */}

      {/* Odisha Complete Gallery Section */}
      <OdishaGallery />

    </div>);

}