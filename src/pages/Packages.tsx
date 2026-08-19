import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { Clock, Map, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const packages = {
  Budget: [
  {
    id: 1,
    name: 'Temple Trail Quick',
    duration: '2N/3D',
    locations: 'Bhubaneswar, Puri',
    price: '₹8,999',
    features: [
    '3-Star Accommodation',
    'Breakfast Included',
    'Shared Transport',
    'Temple Guide']

  },
  {
    id: 2,
    name: 'Coastal Escape',
    duration: '3N/4D',
    locations: 'Puri, Konark',
    price: '₹12,499',
    features: [
    'Beachfront Stay',
    'Breakfast Included',
    'Shared Transport',
    'Sightseeing']

  },
  {
    id: 3,
    name: 'Nature Retreat',
    duration: '2N/3D',
    locations: 'Chilika Lake',
    price: '₹10,999',
    features: ['Eco-Resort Stay', 'All Meals', 'Boat Ride', 'Bird Watching']
  }],

  Standard: [
  {
    id: 4,
    name: 'Golden Triangle',
    duration: '4N/5D',
    locations: 'Bhubaneswar, Puri, Konark',
    price: '₹24,999',
    features: [
    '4-Star Hotels',
    'Half Board (B&D)',
    'Private Sedan',
    'Expert Guides',
    'Monument Entry']

  },
  {
    id: 5,
    name: 'Heritage & Wildlife',
    duration: '5N/6D',
    locations: 'Puri, Chilika, Simlipal',
    price: '₹32,999',
    features: [
    'Premium Resorts',
    'All Meals in Jungle',
    'Private SUV',
    'Safari Included',
    'Cultural Show'],

    popular: true
  },
  {
    id: 6,
    name: 'Tribal Odyssey',
    duration: '4N/5D',
    locations: 'Rayagada, Koraput',
    price: '₹28,999',
    features: [
    'Heritage Stays',
    'Half Board',
    'Private Transport',
    'Local Interactions',
    'Village Tours']

  }],

  Luxury: [
  {
    id: 7,
    name: 'Royal Odisha',
    duration: '6N/7D',
    locations: 'All Major Sites',
    price: '₹75,999',
    features: [
    '5-Star/Palace Stays',
    'All Meals (Gourmet)',
    'Luxury SUV',
    'Private Concierge',
    'Exclusive Access',
    'Spa Session']

  },
  {
    id: 8,
    name: 'Spiritual Luxury',
    duration: '4N/5D',
    locations: 'Puri, Konark',
    price: '₹55,999',
    features: [
    'Premium Beach Resort',
    'All Meals',
    'Luxury Transport',
    'VIP Temple Darshan',
    'Private Yoga']

  },
  {
    id: 9,
    name: 'Chilika Glamping',
    duration: '3N/4D',
    locations: 'Chilika Lake',
    price: '₹45,999',
    features: [
    'Luxury Tents',
    'Private Chef',
    'Private Yacht',
    'Island Picnic',
    'Photography Guide']

  }]

};
type TabType = 'Budget' | 'Standard' | 'Luxury';
export function Packages() {
  const [activeTab, setActiveTab] = useState<TabType>('Standard');
  return (
    <div className="w-full pt-24 pb-24">
      <section className="container mx-auto px-4 mb-16 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            Travel Packages
          </h1>
          <p className="text-lg text-ocean/70 dark:text-offwhite/70 max-w-2xl mx-auto">
            Carefully crafted itineraries to suit every travel style. Choose
            your perfect Odisha experience.
          </p>
        </ScrollReveal>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 mb-16">
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <div className="glass p-1.5 rounded-full inline-flex">
              {(['Budget', 'Standard', 'Luxury'] as TabType[]).map((tab) =>
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${activeTab === tab ? 'text-white' : 'text-ocean-darker dark:text-offwhite hover:text-ocean dark:hover:text-white'}`}>
                
                  {activeTab === tab &&
                <motion.div
                  layoutId="packageTab"
                  className="absolute inset-0 bg-ocean-darker dark:bg-gold rounded-full"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30
                  }} />

                }
                  <span className="relative z-10">{tab}</span>
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {packages[activeTab].map((pkg, i) =>
            <motion.div
              key={pkg.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.1
              }}
              className={`relative glass-card rounded-3xl p-8 flex flex-col ${pkg.popular ? 'border-gold/50 shadow-lg scale-105 z-10' : ''}`}>
              
                {pkg.popular &&
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
              }

                <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-4 text-sm text-ocean/60 dark:text-offwhite/60 mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Map className="w-4 h-4" /> {pkg.locations}
                  </span>
                </div>

                <div className="mb-8">
                  <span className="text-4xl font-serif font-medium">
                    {pkg.price}
                  </span>
                  <span className="text-ocean/60 dark:text-offwhite/60 text-sm">
                    {' '}
                    / person
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) =>
                <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-ocean-darker/80 dark:text-offwhite/80">
                        {feature}
                      </span>
                    </li>
                )}
                </ul>

                <Link
                to="/contact"
                className={`w-full py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${pkg.popular ? 'bg-gold text-white hover:bg-gold-hover' : 'bg-ocean-darker dark:bg-white/10 text-white hover:bg-ocean dark:hover:bg-white/20'}`}>
                
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>);

}