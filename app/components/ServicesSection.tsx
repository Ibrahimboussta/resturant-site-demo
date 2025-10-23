'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const services = [
  {
    icon: 'material-symbols:web',
    title: 'Basic Pack',
    price: '1500 DH',
    color: 'yellow',
    description: 'Custom website connected to Google Sheets',
    features: [
      'Online reservation form (data saved directly in Google Sheet)',
      'Integrated AI chatbot assistant',
      'SEO optimized, mobile responsive, and fast loading',
      'Minimal and elegant design'
    ]
  },
  {
    icon: 'material-symbols:restaurant-menu',
    title: 'Menu Management Pack',
    price: '1800 DH',
    color: 'green',
    description: 'Includes everything in the Basic Pack',
    features: [
      'Modifiable menu system (restaurant can edit dishes, prices, and descriptions easily)',
      'Connected to Google Sheets or a small admin panel',
      'Real-time updates visible on the website'
    ]
  },
  {
    icon: 'material-symbols:workspace-premium',
    title: 'Pro Pack',
    price: '2000 DH',
    color: 'blue',
    description: 'Includes everything in the Menu Management Pack',
    features: [
      'Telegram notifications for each new reservation',
      'Secure and real-time sync',
      'Perfect for restaurants that need instant booking alerts'
    ]
  },
  {
    icon: 'material-symbols:qr-code-2',
    title: 'QR Code Menu Pack',
    price: 'Custom Quote',
    color: 'purple',
    description: 'Complete service from design to fabrication',
    features: [
      'Professional and customized menu design',
      'Dynamic QR code that links directly to the restaurant\'s online menu',
      'Printing and fabrication of high-quality QR cards ready to place on tables',
      'Integration with the website for live updates',
      'Durable and elegant materials suitable for restaurants and cafés'
    ]
  },
  {
    icon: 'material-symbols:dashboard-customize',
    title: 'Menu Management App',
    price: 'Coming Soon',
    color: 'orange',
    comingSoon: true,
    description: 'Dashboard/app to manage menus, reservations, and analytics',
    features: [
      'Real-time sync with website and Google Sheets',
      'Simple, modern, and clean admin interface',
      'Comprehensive analytics and insights'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Our <span className="text-yellow-500 font-medium">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive digital solutions designed to modernize your restaurant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className={
                `relative overflow-hidden rounded-xl p-7 transition-all duration-500 h-full flex flex-col ` +
                (service.comingSoon
                  ? 'bg-gradient-to-br from-slate-900/95 via-gray-800/95 to-slate-900/95 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] hover:scale-[1.03] border border-white/10'
                  : 'bg-white shadow-md hover:shadow-xl hover:scale-[1.02] border border-gray-100')
              }>
                {/* Mysterious Blur & Fog Effect for Coming Soon */}
                {service.comingSoon && (
                  <>
                    {/* Heavy blur layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-800/40 to-indigo-900/30 backdrop-blur-[120px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 backdrop-blur-3xl" />
                    
                    {/* Mysterious fog effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_50%)] animate-pulse" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_40%)]" />
                    
                    {/* Subtle noise texture */}
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")"}} />
                  </>
                )}

                {/* Coming Soon Badge - Mysterious Style */}
                {service.comingSoon && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="relative">
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/90 to-indigo-500/90 backdrop-blur-xl text-white text-xs font-bold shadow-2xl animate-pulse border border-white/20">
                        Coming Soon
                      </span>
                      <span className="absolute inset-0 rounded-full bg-purple-400/30 opacity-75 animate-ping" />
                    </div>
                  </div>
                )}

                {/* Icon - Mysterious Style */}
                <div className={
                  `relative z-10 flex items-center justify-center w-14 h-14 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ` +
                  (service.comingSoon
                    ? 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-white/10'
                    : 'bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md')
                }>
                  <Icon icon={service.icon} className={service.comingSoon ? "w-7 h-7 text-purple-200 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" : "w-7 h-7 text-white"} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Title */}
                  <div className="mb-3">
                    <h3 className={`text-xl font-semibold ${service.comingSoon ? 'text-white drop-shadow-[0_2px_10px_rgba(139,92,246,0.5)]' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={
                    `text-sm mb-5 leading-relaxed ` +
                    (service.comingSoon ? 'text-gray-300 drop-shadow-md' : 'text-gray-600')
                  }>
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5 flex-1 mb-5">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={
                        `flex items-start text-sm leading-snug ` +
                        (service.comingSoon ? 'text-gray-200/90' : 'text-gray-700')
                      }>
                        <Icon 
                          icon="heroicons:check-circle-solid" 
                          className={
                            `w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ` +
                            (service.comingSoon ? 'text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]' : 'text-yellow-500')
                          } 
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price at Bottom */}
                  <div className={
                    `mt-auto pt-4 border-t ` +
                    (service.comingSoon ? 'border-white/10' : 'border-gray-100')
                  }>
                    <div className="flex items-center justify-between">
                      <span className={
                        `text-xs font-medium ` +
                        (service.comingSoon ? 'text-gray-400' : 'text-gray-500')
                      }>
                        Price
                      </span>
                      <span className={
                        `inline-block px-4 py-1.5 rounded-full text-sm font-bold ` +
                        (service.comingSoon
                          ? 'bg-gradient-to-r from-purple-500/30 to-indigo-500/30 text-purple-200 backdrop-blur-xl shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-white/10'
                          : 'bg-yellow-50 text-yellow-600')
                      }>
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-md border border-gray-200">
            <p className="text-lg text-gray-800 mb-5 font-light max-w-xl leading-relaxed">
              Ready to digitalize your restaurant? Contact us today.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <Icon icon="heroicons:chat-bubble-left-right" className="w-5 h-5 mr-2" />
              Get a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}