'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const footerNavigation = {
  services: [
    { name: 'Website Design', href: '#services' },
    { name: 'Online Ordering', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'Reservation System', href: '#services' }
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Case Studies', href: '#' }
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Industry Guide', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'API Documentation', href: '#' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' }
  ]
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: 'mdi:linkedin'
  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'mdi:twitter'
  },
  {
    name: 'Facebook',
    href: '#',
    icon: 'mdi:facebook'
  },
  {
    name: 'Instagram',
    href: '#',
    icon: 'mdi:instagram'
  }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#') && href !== '#') {
      const sectionId = href.substring(1);
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Icon icon="material-symbols:restaurant" className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-semibold">Click & Serve</span>
              </div>
              <p className="text-gray-300 font-light mb-6 leading-relaxed">
                Transforming restaurants and hotels with professional digital solutions. We specialize in creating stunning websites, online ordering systems, and comprehensive digital marketing strategies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 group"
                  >
                    <Icon icon={social.icon} className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-light text-sm text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleLinkClick(item.href)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-light text-sm text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-light text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-light text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
              <p className="text-gray-300 font-light">
                Get the latest insights on digital trends in the hospitality industry.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-400 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="text-gray-400 text-sm font-light">
            © 2024 Click & Serve. All rights reserved.
          </p>
          <div className="mt-4 lg:mt-0">
            <div className="flex items-center text-gray-400 text-sm">
              <Icon icon="heroicons:heart" className="w-4 h-4 text-red-500 mr-1" />
              <span className="font-light">Made for restaurants & hotels</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}