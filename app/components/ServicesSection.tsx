'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const services = [
  {
    icon: 'material-symbols:web',
    title: 'Basic Pack',
    price: '1500 DH',
    description: 'Custom Website connected to Google Sheets',
    features: [
      'Online Reservation Form (data saved directly in Google Sheet)',
      'Integrated AI Chatbot Assistant',
      'SEO optimized, mobile responsive, and fast loading',
      'Modern and clean design'
    ]
  },
  {
    icon: 'material-symbols:shopping-cart',
    title: 'Menu Management Pack',
    price: '1800 DH',
    description: 'Includes everything in the Basic Pack',
    features: [
      'Modifiable menu (edit dishes, prices, and categories directly)',
      'Connected to Google Sheets or small admin panel',
      'Real-time updates on website'
    ]
  },
  {
    icon: 'material-symbols:campaign',
    title: 'Pro Pack',
    price: '2000 DH',
    description: 'Includes everything in the Menu Management Pack',
    features: [
      'Telegram notifications for each reservation',
      'Secure and real-time sync',
      'Ideal for restaurants that want instant booking alerts'
    ]
  },
  {
    icon: 'material-symbols:qr-code',
    title: 'QR Code Menu Pack',
    price: 'from 60 DH/table',
    description: 'Full service from design to fabrication',
    features: [
      'Professional menu design',
      'Dynamic QR code linked to online menu',
      'Printing and fabrication of QR cards (ready for tables)',
      'Integration with website for live updates'
    ]
  },
  {
    icon: 'material-symbols:dashboard',
    title: 'Menu Management App',
    price: 'Coming Soon',
    comingSoon: true,
    description: 'Dashboard/app to manage menu, reservations, and analytics',
    features: [
      'Real-time sync with website and Google Sheets',
      'Simple and clean admin interface'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Our <span className="text-yellow-500 font-medium">Digital Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Comprehensive digital solutions designed specifically for restaurants and hotels to enhance customer experience and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={
                `relative overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col ` +
                (service.comingSoon
                  ? 'bg-gradient-to-br from-purple-600 via-indigo-600 to-gray-900 text-white shadow-2xl'
                  : 'bg-white shadow-lg border border-gray-100')
              }>
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-transform duration-300 ${service.comingSoon ? 'bg-white/10' : 'bg-gradient-to-br from-yellow-400 to-yellow-500 group-hover:scale-110'}`}>
                  <Icon icon={service.icon} className={`w-8 h-8 ${service.comingSoon ? 'text-white' : 'text-white'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-semibold ${service.comingSoon ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    {service.comingSoon ? (
                      <div className="relative">
                        <span className="absolute -top-3 -right-3 w-28 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-semibold text-white shadow-md transform rotate-3">
                          Coming Soon
                        </span>
                        <span className="inline-block w-3 h-3 rounded-full bg-white/30 animate-pulse absolute -top-1 -right-1" />
                      </div>
                    ) : (
                      <span className="ml-3 text-sm font-semibold text-yellow-500">{service.price}</span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-6 font-light leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center text-sm ${service.comingSoon ? 'text-white/90' : 'text-gray-600'}`}>
                        <Icon icon="heroicons:check" className={`w-4 h-4 ${service.comingSoon ? 'text-yellow-300' : 'text-yellow-500'} mr-2 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  {!service.comingSoon && (
                    <p className={`text-sm ${service.comingSoon ? 'text-white/80' : 'text-gray-500'}`}>Price: <span className={`font-semibold ${service.comingSoon ? 'text-white' : 'text-gray-900'}`}>{service.price}</span></p>
                  )}
                  {service.comingSoon && (
                    <div className="mt-4 flex">
                      <button className="mr-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition">Notify Me</button>
                      <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-4 py-2 rounded-full bg-yellow-400 text-sm font-semibold text-gray-900 hover:brightness-95 transition">Contact Us</button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-700 mb-4 font-light max-w-xl">
              Ready to digitalize your restaurant? Contact us today for your project.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors duration-300"
            >
              <Icon icon="heroicons:mail" className="w-5 h-5 mr-2" />
              Get a Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}