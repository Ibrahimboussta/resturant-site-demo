'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://i.pravatar.cc/400?u=sarah-johnson',
    description: 'Former restaurant owner turned digital strategist with 15+ years in hospitality.'
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: 'https://i.pravatar.cc/400?u=michael-chen',
    description: 'Expert full-stack developer specializing in e-commerce and booking systems.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Specialist',
    image: 'https://i.pravatar.cc/400?u=emily-rodriguez',
    description: 'Digital marketing expert with proven success in hospitality industry campaigns.'
  }
];

const values = [
  {
    icon: 'material-symbols:restaurant',
    title: 'Industry Focused',
    description: 'We exclusively serve restaurants and hotels, understanding your unique challenges and opportunities.'
  },
  {
    icon: 'material-symbols:handshake',
    title: 'Partnership Approach',
    description: 'We work as your digital partner, not just a service provider, committed to your long-term success.'
  },
  {
    icon: 'material-symbols:innovation',
    title: 'Innovation Driven',
    description: 'We stay ahead of digital trends to ensure your business leverages the latest technologies.'
  },
  {
    icon: 'material-symbols:support',
    title: 'Ongoing Support',
    description: 'Our relationship doesn&apos;t end at launch. We provide continuous support and optimization.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            About <span className="text-yellow-500 font-medium">Click & Serve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            We&apos;re passionate about helping restaurants and hotels succeed in the digital world. Our team combines deep industry knowledge with cutting-edge technology to deliver results that matter.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6 font-light leading-relaxed">
              Founded in 2019, Click & Serve was born from a simple observation: most digital agencies don&apos;t understand the unique needs of restaurants and hotels. As former restaurant owners ourselves, we saw the gap between generic web services and what hospitality businesses actually need.
            </p>
            <p className="text-gray-600 mb-8 font-light leading-relaxed">
              Today, we&apos;re proud to be the go-to digital partner for over 300 restaurants and hotels worldwide, helping them increase revenue, streamline operations, and create exceptional customer experiences online.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="text-2xl font-semibold text-yellow-500 mb-2">2019</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <div className="text-2xl font-semibold text-yellow-500 mb-2">300+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1589585021085-62262dffd77e"
                alt="Professional workspace"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Icon icon="material-symbols:trending-up" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">40%</div>
                  <div className="text-sm text-gray-600">Avg. Revenue Increase</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            Our Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            These principles guide everything we do and shape how we work with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon icon={value.icon} className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
            Meet Our Team
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Our diverse team brings together expertise from hospitality, technology, and digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto border-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h4>
              <div className="text-yellow-500 font-medium mb-3">
                {member.role}
              </div>
              <p className="text-gray-600 font-light text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}