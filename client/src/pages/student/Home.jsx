import React from 'react';
import {
  Search,
  Bot,
  Rocket,
  Star,
  Lightbulb,
  GraduationCap,
} from '../../components/LucideIcons';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import Footer from '../../components/student/Footer';
import Logger from '../../components/Logger';
import { motion } from 'framer-motion';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float' />
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-float' style={{ animationDelay: '2s' }} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse-soft' />
        <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-400/15 to-rose-400/15 rounded-full blur-2xl animate-float' style={{ animationDelay: '1s' }} />
        <div className='absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-emerald-400/15 to-teal-400/15 rounded-full blur-2xl animate-float' style={{ animationDelay: '3s' }} />
      </div>

      <div className='relative z-10'>
        <Hero />
        <div className='block sm:hidden'>
          <Logger />
        </div>

        {/* How It Works Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative z-10 min-h-screen flex items-center w-full px-4'
        >
          <div className='w-full max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6'>
                How It <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Works</span>
              </h2>
              <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
                Get started with Vibedemy in three simple steps
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid md:grid-cols-3 gap-8'
            >
              {[
                {
                  icon: Search,
                  title: 'Discover',
                  description: 'Browse a wide range of courses curated for every learner and every goal.',
                  gradient: 'from-pink-500 to-purple-600',
                  step: '01'
                },
                {
                  icon: Bot,
                  title: 'AI Recommends',
                  description: 'Our AI suggests the best courses for you based on your interests and progress.',
                  gradient: 'from-purple-500 to-indigo-600',
                  step: '02'
                },
                {
                  icon: Rocket,
                  title: 'Start Learning',
                  description: 'Enroll instantly and start learning at your own pace, anytime, anywhere.',
                  gradient: 'from-indigo-500 to-cyan-600',
                  step: '03'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover='hover'
                  className='group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-soft hover:shadow-large border border-white/50 hover:border-blue-200 transition-all duration-300 overflow-hidden'
                >
                  <div className='text-center'>
                    <div className='relative mb-6'>
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon size={40} className='text-white' />
                      </div>
                      <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
                        <span className='text-white text-sm font-bold'>{step.step}</span>
                      </div>
                    </div>
                    <h3 className='text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
                      {step.title}
                    </h3>
                    <p className='text-slate-600 leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative z-10 min-h-screen flex items-center w-full px-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm'
        >
          <div className='w-full max-w-7xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6'>
                Why Choose <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Vibedemy?</span>
              </h2>
              <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
                Experience the difference with our premium learning platform
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='grid md:grid-cols-3 gap-8'
            >
              {[
                {
                  icon: Star,
                  title: 'Top Instructors',
                  description: 'Learn from industry experts and passionate educators with real-world experience.',
                  gradient: 'from-yellow-500 to-orange-600',
                  features: ['Industry Experts', 'Real Projects', 'Mentorship']
                },
                {
                  icon: Lightbulb,
                  title: 'Cutting-Edge Content',
                  description: 'Stay ahead with up-to-date courses and practical projects that matter.',
                  gradient: 'from-cyan-500 to-blue-600',
                  features: ['Latest Trends', 'Hands-on Projects', 'Industry Tools']
                },
                {
                  icon: GraduationCap,
                  title: 'Certifications',
                  description: 'Earn certificates to showcase your skills and boost your career prospects.',
                  gradient: 'from-green-500 to-emerald-600',
                  features: ['Verified Certificates', 'LinkedIn Ready', 'Career Boost']
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover='hover'
                  className='group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-soft hover:shadow-large border border-white/50 hover:border-blue-200 transition-all duration-300 overflow-hidden'
                >
                  <div className='text-center'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon size={32} className='text-white' />
                    </div>
                    <h3 className='text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300'>
                      {feature.title}
                    </h3>
                    <p className='text-slate-600 leading-relaxed mb-6'>
                      {feature.description}
                    </p>
                    <div className='space-y-2'>
                      {feature.features.map((item, idx) => (
                        <div key={idx} className='flex items-center justify-center space-x-2'>
                          <div className='w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full' />
                          <span className='text-slate-500 text-sm'>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <CoursesSection />
        <TestimonialsSection />

        {/* Premium CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='relative z-10 min-h-screen flex items-center w-full px-4'
        >
          <div className='w-full max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='relative bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-large border border-white/50 overflow-hidden'
            >
              <h2 className='text-4xl md:text-5xl font-display font-bold text-slate-800 mb-6'>
                Ready to <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>start learning?</span>
              </h2>
              <p className='text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
                Join Vibedemy today and unlock a world of knowledge, community, and opportunity. Your next skill is just a click away!
              </p>
              <motion.a
                href='/course-list'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-large hover:shadow-glow transition-all duration-300'
              >
                Browse All Courses
                <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </motion.a>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl' />
            </motion.div>
          </div>
        </motion.section>

        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
