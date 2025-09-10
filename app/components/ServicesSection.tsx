'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const services = [
  {
    icon: 'material-symbols:web',
    title: 'Website Design & Development',
    description: 'Stunning, mobile-responsive websites that showcase your restaurant or hotel brand and attract more customers.',
    features: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Loading']
  },
  {
    icon: 'material-symbols:shopping-cart',
    title: 'Online Ordering System',
    description: 'Complete online ordering and delivery platform with payment processing and order management.',
    features: ['Menu Management', 'Payment Processing', 'Order Tracking', 'Customer Accounts']
  },
  {
    icon: 'material-symbols:campaign',
    title: 'Digital Marketing',
    description: 'Strategic social media management, SEO, and online advertising to increase your visibility and bookings.',
    features: ['Social Media Management', 'Google Ads', 'SEO Services', 'Content Creation']
  },
  {
    icon: 'material-symbols:calendar-month',
    title: 'Reservation System',
    description: 'Easy-to-use booking system for restaurants and hotels with automated confirmations and reminders.',
    features: ['Table Booking', 'Room Reservations', 'Automated Reminders', 'Calendar Integration']
  },
  {
    icon: 'material-symbols:analytics',
    title: 'Analytics & Insights',
    description: 'Comprehensive analytics to track performance, customer behavior, and business growth opportunities.',
    features: ['Performance Reports', 'Customer Analytics', 'Revenue Tracking', 'Growth Insights']
  },
  {
    icon: 'material-symbols:support-agent',
    title: 'Ongoing Support',
    description: '24/7 technical support and maintenance to ensure your digital presence runs smoothly.',
    features: ['24/7 Support', 'Regular Updates', 'Technical Maintenance', 'Training & Documentation']
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
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 font-light leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Icon icon="heroicons:check" className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              We understand every business is unique. Let&apos;s discuss how we can create a tailored digital solution for your specific needs.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-900 transition-colors duration-300"
            >
              <Icon icon="heroicons:chat-bubble-left-right" className="w-5 h-5 mr-2" />
              Let&apos;s Talk
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}