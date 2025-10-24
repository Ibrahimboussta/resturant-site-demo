'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface Service {
  id: string;
  title: string;
  price: string;
  icon: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  business: string;
  phone: string;
  message: string;
  service: string;
}

export default function ContactSection() {
  const services: Service[] = [
    {
      id: 'basic',
      title: 'Basic Pack',
      price: '1500 DH',
      icon: 'material-symbols:web',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      id: 'menu',
      title: 'Menu Management',
      price: '1800 DH',
      icon: 'material-symbols:restaurant-menu',
      color: 'from-green-400 to-green-500'
    },
    {
      id: 'pro',
      title: 'Pro Pack',
      price: '2000 DH',
      icon: 'material-symbols:workspace-premium',
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 'qr',
      title: 'QR Code Menu',
      price: 'Custom',
      icon: 'material-symbols:qr-code-2',
      color: 'from-purple-400 to-purple-500'
    }
  ];

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectService = (serviceId: string) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        setFormData({
          name: '',
          email: '',
          business: '',
          phone: '',
          message: '',
          service: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Let&apos;s <span className="text-yellow-500 font-medium">Get Started</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Ready to transform your restaurant or hotel&apos;s digital presence? Get in touch for a free consultation and discover how we can help grow your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex-shrink-0">
                  <Icon icon="heroicons:phone" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600 font-light">+212-634262436</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex-shrink-0">
                  <Icon icon="heroicons:clock" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600 font-light">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600 font-light">Weekend: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">What We Offer</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Icon icon="heroicons:check" className="w-4 h-4 text-yellow-500 mr-2" />
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <Icon icon="heroicons:check" className="w-4 h-4 text-yellow-500 mr-2" />
                  Custom solution proposals
                </li>
                <li className="flex items-center">
                  <Icon icon="heroicons:check" className="w-4 h-4 text-yellow-500 mr-2" />
                  Competitive pricing
                </li>
                <li className="flex items-center">
                  <Icon icon="heroicons:check" className="w-4 h-4 text-yellow-500 mr-2" />
                  Ongoing support & maintenance
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                      required
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your Restaurant/Hotel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                

                <div className="pt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select a Service *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {services.map((service) => (
                      <div 
                        key={service.id}
                        onClick={() => selectService(service.id)}
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          formData.service === service.id 
                            ? 'border-yellow-400 bg-yellow-50' 
                            : 'border-gray-200 hover:border-yellow-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                            <Icon icon={service.icon} className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{service.title}</h4>
                            <p className="text-sm text-gray-600">{service.price}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                {submitStatus !== 'idle' && (
                  <div className={`p-4 rounded-xl ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <div className="flex items-center">
                      <Icon 
                        icon={submitStatus === 'success' ? 'heroicons:check-circle' : 'heroicons:exclamation-triangle'} 
                        className="w-5 h-5 mr-2" 
                      />
                      {statusMessage}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Icon icon="eos-icons:loading" className="w-5 h-5 mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Icon icon="heroicons:paper-airplane" className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}