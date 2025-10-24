'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://storage.googleapis.com/cosmic-generated-assets/backgrounds/4k/cosmic-bg-pj8hrm5il.jpg"
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium mb-6 shadow-lg">
            <Icon icon="material-symbols:restaurant" className="w-4 h-4 mr-2 text-yellow-400" />
            Digital Solutions for Restaurants
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-8"
        >
          Elevate Your
          <span className="block">
            <span className="text-yellow-400 font-medium">Restaurant</span> Experience
          </span>
          <span className="block font-light">Digital Presence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 font-light"
        >
          Professional digital services tailored for restaurants. From stunning websites to complete online ordering systems, we help you serve your customers better in the digital world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
          >
            Get Free Consultation
          </button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
            <Icon icon="material-symbols:web" className="w-8 h-8 text-yellow-400" />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/3 right-10 hidden lg:block"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
            <Icon icon="material-symbols:smartphone" className="w-10 h-10 text-yellow-400" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 pt-3"
        >
          <Icon icon="heroicons:chevron-down" className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}