import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-ocean-darker text-offwhite pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-gold" />
              <span className="font-serif text-2xl font-semibold tracking-wide text-white">
                Odyssey
              </span>
            </Link>
            <p className="text-offwhite/70 text-sm leading-relaxed max-w-xs">
              Discover the soul of Odisha with our premium travel experiences.
              Where heritage meets luxury.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Destinations', 'Packages', 'About Us', 'Contact'].map(
                (item) =>
                <li key={item}>
                    <Link
                    to={
                    item === 'Home' ?
                    '/' :
                    `/${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                    
                      {item}
                    </Link>
                  </li>

              )}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">
              Top Destinations
            </h4>
            <ul className="space-y-3">
              {[
              'Puri Beach',
              'Konark Sun Temple',
              'Chilika Lake',
              'Bhubaneswar',
              'Simlipal'].
              map((item) =>
              <li key={item}>
                  <Link
                  to="/destinations"
                  className="text-offwhite/70 hover:text-gold transition-colors text-sm">
                  
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-offwhite/70">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>
                  123 Heritage Avenue, Patia,
                  <br />
                  Bhubaneswar, Odisha 751024
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-offwhite/70">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-offwhite/70">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>hello@odysseyodisha.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-offwhite/50 text-sm">
            © {new Date().getFullYear()} Odyssey Odisha Travels. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-offwhite/50">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}