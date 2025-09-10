'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const stats = [
  {
    value: '300+',
    label: 'Restaurants & Hotels Served',
    icon: 'material-symbols:restaurant'
  },
  {
    value: '40%',
    label: 'Average Revenue Increase',
    icon: 'material-symbols:trending-up'
  },
  {
    value: '24/7',
    label: 'Customer Support',
    icon: 'material-symbols:support-agent'
  },
  {
    value: '99.9%',
    label: 'Uptime Guarantee',
    icon: 'material-symbols:verified'
  }
];

const benefits = [
  {
    icon: 'material-symbols:trending-up',
    title: 'Increase Revenue',
    description: 'Our digital solutions help restaurants and hotels increase their revenue through better online presence and streamlined ordering systems.'
  },
  {
    icon: 'material-symbols:group',
    title: 'Attract More Customers',
    description: 'Reach a wider audience with professional websites, social media management, and targeted digital marketing campaigns.'
  },
  {
    icon: 'material-symbols:automation',
    title: 'Streamline Operations',
    description: 'Automate reservations, orders, and customer communications to reduce manual work and improve efficiency.'
  },
  {
    icon: 'material-symbols:smartphone',
    title: 'Mobile-First Approach',
    description: 'All our solutions are optimized for mobile devices, ensuring seamless experience for your customers on any device.'
  },
  {
    icon: 'material-symbols:speed',
    title: 'Fast Implementation',
    description: 'Get your digital presence up and running quickly with our streamlined development process and proven frameworks.'
  },
  {
    icon: 'material-symbols:analytics',
    title: 'Data-Driven Insights',
    description: 'Make informed business decisions with comprehensive analytics and reporting on customer behavior and business performance.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Trusted by <span className="text-yellow-500 font-medium">Businesses</span> Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light mb-16">
            We&apos;ve helped hundreds of restaurants and hotels transform their digital presence and achieve remarkable growth.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mx-auto mb-4">
                  <Icon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Why Choose <span className="text-yellow-500 font-medium">Click & Serve</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            We specialize in the hospitality industry and understand the unique challenges restaurants and hotels face in the digital world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mx-auto mb-6 group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
                <Icon icon={benefit.icon} className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 font-light max-w-2xl mx-auto">
              Join hundreds of successful restaurants and hotels that have boosted their revenue with our digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300 transition-colors duration-300"
              >
                Start Your Journey
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Services
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}