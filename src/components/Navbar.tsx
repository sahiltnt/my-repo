import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}>
      
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold text-brand-navy">
            ST&T
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `relative text-lg px-3 font-medium transition-all duration-300 hover:text-cyan-600 ${
                  isActive ? 'bg-black/5 rounded ' : 'text-brand-navy'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          
          <Link 
            to="/signup"
            className="px-6 py-2 border border-brand-navy rounded-lg text-lg font-medium text-brand-navy hover:bg-brand-navy hover:text-white transition-all ml-4"
          >
            Sign up
          </Link>

          <div className="flex items-center gap-1 cursor-pointer group ml-6">
            <span className="text-lg font-medium text-brand-navy">EN</span>
            <svg className="w-4 h-4 text-brand-navy group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden p-2 text-brand-navy"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <span className="text-3xl font-bold text-brand-navy">ST&T</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-brand-navy hover:bg-black/5 rounded-full"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `text-2xl font-bold transition-colors ${
                      isActive ? 'text-brand-orange' : 'text-brand-navy'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/signup"
                className="text-2xl font-bold text-brand-orange"
              >
                Sign up
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}