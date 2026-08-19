import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
export function Contact() {
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
            Plan Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 font-light max-w-2xl mx-auto">
            Get in touch with our travel experts to craft your perfect Odisha
            itinerary.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="w-full lg:w-3/5">
            <ScrollReveal variant="slide-left">
              <div className="glass-card p-8 md:p-10 rounded-3xl">
                <h2 className="text-3xl font-serif mb-8">Send us a message</h2>
                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ocean-darker dark:text-offwhite">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors text-ocean-darker dark:text-white"
                        placeholder="John Doe" />
                      
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ocean-darker dark:text-offwhite">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors text-ocean-darker dark:text-white"
                        placeholder="john@example.com" />
                      
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ocean-darker dark:text-offwhite">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors text-ocean-darker dark:text-white"
                        placeholder="+91 98765 43210" />
                      
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ocean-darker dark:text-offwhite">
                        Destination
                      </label>
                      <select className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors text-ocean-darker dark:text-white appearance-none">
                        <option value="" disabled selected>
                          Select a destination
                        </option>
                        <option value="puri">Puri & Konark</option>
                        <option value="chilika">Chilika Lake</option>
                        <option value="bhubaneswar">Bhubaneswar</option>
                        <option value="custom">Custom Itinerary</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ocean-darker dark:text-offwhite">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors text-ocean-darker dark:text-white" />
                      
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ocean-darker dark:text-offwhite">
                        Travelers
                      </label>
                      <input
                        type="number"
                        min="1"
                        className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors text-ocean-darker dark:text-white"
                        placeholder="2" />
                      
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ocean-darker dark:text-offwhite">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/50 dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors text-ocean-darker dark:text-white resize-none"
                      placeholder="Tell us about your dream trip...">
                    </textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-hover text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                    
                    Send Request <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info & Map */}
          <div className="w-full lg:w-2/5 space-y-8">
            <ScrollReveal variant="slide-right">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-serif mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-ocean-darker dark:text-white mb-1">
                        Office Address
                      </h4>
                      <p className="text-sm text-ocean/70 dark:text-offwhite/70">
                        123 Heritage Avenue, Patia,
                        <br />
                        Bhubaneswar, Odisha 751024
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-ocean-darker dark:text-white mb-1">
                        Phone Number
                      </h4>
                      <p className="text-sm text-ocean/70 dark:text-offwhite/70">
                        +91 98765 43210
                        <br />
                        +91 98765 43211
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium text-ocean-darker dark:text-white mb-1">
                        Email Address
                      </h4>
                      <p className="text-sm text-ocean/70 dark:text-offwhite/70">
                        hello@odysseyodisha.com
                        <br />
                        bookings@odysseyodisha.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slide-right" delay={0.2}>
              <div className="rounded-3xl overflow-hidden h-[300px] shadow-lg border border-black/5 dark:border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.53374955147!2d85.73805170308076!3d20.29605869871588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33c8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1709643456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0
                  }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location">
                </iframe>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>);

}