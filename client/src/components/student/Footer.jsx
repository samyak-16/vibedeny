import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import vibedemyLogoSmall from '../../assets/vibedemy_logo_small.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      console.log('Subscribed with:', subscribeEmail);
      setIsSubscribed(true);
      setSubscribeEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className='relative bg-white border-t border-neutral-200/50 overflow-hidden'
    >
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100/30 to-secondary-100/30 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-100/30 to-primary-100/30 rounded-full blur-3xl' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-16 border-b border-neutral-200/50'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
            {/* Brand Section */}
            <motion.div variants={itemVariants} className='lg:col-span-2'>
              <img
                src={vibedemyLogoSmall}
                alt='Vibedemy Logo'
                className='w-40 h-auto mb-6'
              />
              <p className='text-neutral-600 leading-relaxed mb-6 max-w-md'>
                Vibedemy makes education accessible and engaging, connecting
                students with educators through quality courses, interactive tools,
                and intuitive design.
              </p>
              <div className='flex space-x-4'>
                <SocialIcons />
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h3 className='text-lg font-semibold text-neutral-800 mb-6'>Company</h3>
              <ul className='space-y-3'>
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About us', to: '/about' },
                  { name: 'Contact us', to: '/contact' },
                  { name: 'Privacy policy', to: '/privacy' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className='text-neutral-600 hover:text-primary-600 transition-colors duration-300 text-sm'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div variants={itemVariants}>
              <h3 className='text-lg font-semibold text-neutral-800 mb-6'>
                Stay Updated
              </h3>
              <p className='text-neutral-600 text-sm mb-6 leading-relaxed'>
                Get the latest courses, updates, and learning resources delivered to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className='space-y-4'>
                <div className='relative'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    className='w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-sm'
                    required
                  />
                </div>
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full px-4 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300 text-sm'
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </motion.button>
              </form>

              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-accent-600 text-sm mt-2'
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className='py-6 flex flex-col md:flex-row items-center justify-between'
        >
          <p className='text-neutral-500 text-sm'>
            © 2024 Vibedemy. All rights reserved.
          </p>
          <div className='flex items-center space-x-6 mt-4 md:mt-0'>
            <Link
              to='/terms'
              className='text-neutral-500 hover:text-primary-600 transition-colors duration-300 text-sm'
            >
              Terms of Service
            </Link>
            <Link
              to='/privacy'
              className='text-neutral-500 hover:text-primary-600 transition-colors duration-300 text-sm'
            >
              Privacy Policy
            </Link>
            <Link
              to='/cookies'
              className='text-neutral-500 hover:text-primary-600 transition-colors duration-300 text-sm'
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
