import React from 'react';
import { motion } from 'framer-motion';
interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}
export function ScrollReveal({
  children,
  variant = 'fade-up',
  className = '',
  delay = 0,
  width = '100%'
}: ScrollRevealProps) {
  const variants = {
    'fade-up': {
      hidden: {
        opacity: 0,
        y: 40
      },
      visible: {
        opacity: 1,
        y: 0
      }
    },
    'fade-in': {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1
      }
    },
    'slide-left': {
      hidden: {
        opacity: 0,
        x: 50
      },
      visible: {
        opacity: 1,
        x: 0
      }
    },
    'slide-right': {
      hidden: {
        opacity: 0,
        x: -50
      },
      visible: {
        opacity: 1,
        x: 0
      }
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      variants={variants[variant]}
      className={className}
      style={{
        width
      }}>
      
      {children}
    </motion.div>);

}