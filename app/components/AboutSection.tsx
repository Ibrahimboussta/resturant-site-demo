'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function AboutSection () {
  return (
    <section id='about' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* About Us Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6'>
            About{' '}
            <span className='text-yellow-500 font-medium'>Click & Serve</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto font-light'>
            We&apos;re passionate about helping restaurants and hotels succeed
            in the digital world. Our team combines deep industry knowledge with
            cutting-edge technology to deliver results that matter.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className='text-2xl md:text-3xl font-light text-gray-900 mb-6'>
              Our Story
            </h3>
            <p className='text-gray-600 mb-6 font-light leading-relaxed'>
              Click & Serve was created with one clear mission: to help
              restaurants and hotels thrive in the digital era. As hospitality
              professionals ourselves, we experienced the daily challenges of
              managing reservations, orders, and customer engagement — and we
              knew there had to be a smarter way.
            </p>
            <p className='text-gray-600 mb-8 font-light leading-relaxed'>
              Today, we’re proud to be the digital partner of choice for{' '}
              <span className='font-semibold'>
                300+ restaurants and hotels worldwide
              </span>
              . Our solutions empower hospitality businesses to increase
              revenue, simplify operations, and deliver unforgettable guest
              experiences both online and offline.
            </p>
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='relative rounded-2xl overflow-hidden shadow-xl'>
              <img
                src='https://images.unsplash.com/photo-1589585021085-62262dffd77e'
                alt='Professional workspace'
                className='w-full h-96 object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100'
            >
              <div className='flex items-center space-x-3'>
                <div className='w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center'>
                  <Icon
                    icon='material-symbols:trending-up'
                    className='w-6 h-6 text-white'
                  />
                </div>
                <div>
                  <div className='text-lg font-semibold text-gray-900'>40%</div>
                  <div className='text-sm text-gray-600'>
                    Avg. Revenue Increase
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
