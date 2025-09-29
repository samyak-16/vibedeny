import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

function getRandomCourse(courses) {
  if (!courses || courses.length === 0) return null;
  return courses[Math.floor(Math.random() * courses.length)];
}

const Landing = () => {
  const { allCourses } = useContext(AppContext);
  const randomCourse = getRandomCourse(allCourses);
  const [openFAQ, setOpenFAQ] = useState(null);

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
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden'>
      {/* Animated Background Text */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* First Row - Moving Right */}
        <div className='absolute top-20 left-0 w-full h-16 flex items-center'>
          <div className='flex whitespace-nowrap animate-marquee-right'>
            <span className='text-6xl md:text-8xl font-black text-white/20 mx-8'>LEARN</span>
            <span className='text-6xl md:text-8xl font-black text-pink-200/20 mx-8'>GROW</span>
            <span className='text-6xl md:text-8xl font-black text-purple-200/20 mx-8'>SUCCEED</span>
            <span className='text-6xl md:text-8xl font-black text-indigo-200/20 mx-8'>INNOVATE</span>
            <span className='text-6xl md:text-8xl font-black text-cyan-200/20 mx-8'>CREATE</span>
            <span className='text-6xl md:text-8xl font-black text-blue-200/20 mx-8'>ACHIEVE</span>
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className='absolute top-40 left-0 w-full h-16 flex items-center'>
          <div className='flex whitespace-nowrap animate-marquee-left'>
            <span className='text-5xl md:text-7xl font-black text-pink-200/15 mx-6'>EDUCATION</span>
            <span className='text-5xl md:text-7xl font-black text-purple-200/15 mx-6'>KNOWLEDGE</span>
            <span className='text-5xl md:text-7xl font-black text-indigo-200/15 mx-6'>SKILLS</span>
            <span className='text-5xl md:text-7xl font-black text-cyan-200/15 mx-6'>EXPERTISE</span>
            <span className='text-5xl md:text-7xl font-black text-blue-200/15 mx-6'>MASTERY</span>
            <span className='text-5xl md:text-7xl font-black text-white/15 mx-6'>EXCELLENCE</span>
          </div>
        </div>

        {/* Third Row - Moving Right */}
        <div className='absolute top-60 left-0 w-full h-16 flex items-center'>
          <div className='flex whitespace-nowrap animate-marquee-right-slow'>
            <span className='text-4xl md:text-6xl font-black text-purple-200/12 mx-4'>ONLINE</span>
            <span className='text-4xl md:text-6xl font-black text-indigo-200/12 mx-4'>COURSES</span>
            <span className='text-4xl md:text-6xl font-black text-cyan-200/12 mx-4'>TUTORIALS</span>
            <span className='text-4xl md:text-6xl font-black text-blue-200/12 mx-4'>TRAINING</span>
            <span className='text-4xl md:text-6xl font-black text-pink-200/12 mx-4'>LEARNING</span>
            <span className='text-4xl md:text-6xl font-black text-white/12 mx-4'>STUDY</span>
          </div>
        </div>

        {/* Fourth Row - Moving Left */}
        <div className='absolute top-80 left-0 w-full h-16 flex items-center'>
          <div className='flex whitespace-nowrap animate-marquee-left-slow'>
            <span className='text-3xl md:text-5xl font-black text-indigo-200/10 mx-3'>DIGITAL</span>
            <span className='text-3xl md:text-5xl font-black text-cyan-200/10 mx-3'>TECHNOLOGY</span>
            <span className='text-3xl md:text-5xl font-black text-blue-200/10 mx-3'>FUTURE</span>
            <span className='text-3xl md:text-5xl font-black text-pink-200/10 mx-3'>INNOVATION</span>
            <span className='text-3xl md:text-5xl font-black text-purple-200/10 mx-3'>PROGRESS</span>
            <span className='text-3xl md:text-5xl font-black text-white/10 mx-3'>ADVANCEMENT</span>
          </div>
        </div>

        {/* Fifth Row - Moving Right */}
        <div className='absolute top-[28rem] left-0 w-full h-16 flex items-center'>
          <div className='flex whitespace-nowrap animate-marquee-right-very-slow'>
            <span className='text-2xl md:text-4xl font-black text-cyan-200/8 mx-2'>PROFESSIONAL</span>
            <span className='text-2xl md:text-4xl font-black text-blue-200/8 mx-2'>DEVELOPMENT</span>
            <span className='text-2xl md:text-4xl font-black text-pink-200/8 mx-2'>CAREER</span>
            <span className='text-2xl md:text-4xl font-black text-purple-200/8 mx-2'>GROWTH</span>
            <span className='text-2xl md:text-4xl font-black text-indigo-200/8 mx-2'>SUCCESS</span>
            <span className='text-2xl md:text-4xl font-black text-white/8 mx-2'>ACHIEVEMENT</span>
          </div>
        </div>

        {/* Sixth Row - Moving Left */}
        <div className='absolute top-[32rem] left-0 w-full h-16 flex items-center'>
          <div className='flex whitespace-nowrap animate-marquee-left-very-slow'>
            <span className='text-xl md:text-3xl font-black text-blue-200/6 mx-1'>INTERACTIVE</span>
            <span className='text-xl md:text-3xl font-black text-pink-200/6 mx-1'>ENGAGING</span>
            <span className='text-xl md:text-3xl font-black text-purple-200/6 mx-1'>DYNAMIC</span>
            <span className='text-xl md:text-3xl font-black text-indigo-200/6 mx-1'>CREATIVE</span>
            <span className='text-xl md:text-3xl font-black text-cyan-200/6 mx-1'>INSPIRING</span>
            <span className='text-xl md:text-3xl font-black text-white/6 mx-1'>MOTIVATING</span>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-float' />
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float' style={{ animationDelay: '2s' }} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-soft' />
        <div className='absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/25 to-blue-500/25 rounded-full blur-2xl animate-float' style={{ animationDelay: '1s' }} />
        <div className='absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-pink-400/25 to-indigo-500/25 rounded-full blur-2xl animate-float' style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center'
      >
        <motion.div variants={itemVariants} className='mb-8'>
          <img
            src={assets.vibedemy_logo_small}
            alt='Vibedemy Logo'
            className='w-48 h-auto drop-shadow-lg animate-fade-in'
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className='text-5xl md:text-7xl lg:text-8xl font-display font-extrabold bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight'
        >
          Unlock Your
          <br />
          <span className='bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent'>
            Learning Potential
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='text-xl md:text-2xl text-white/90 mb-12 max-w-4xl leading-relaxed font-medium'
        >
          Discover, enroll, and master new skills with Vibedemy. Curated
          courses, expert educators, and a vibrant community—all in one place.
        </motion.p>

        <motion.div variants={itemVariants} className='flex flex-col sm:flex-row gap-4'>
          <Link
            to='/courses'
            className='group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-lg font-semibold rounded-2xl shadow-large hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105'
          >
            <span className='relative z-10'>Browse Courses</span>
            <div className='absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </Link>
          <Link
            to='/about'
            className='px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm'
          >
            Learn More
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative z-10 py-24 px-4 w-full'
      >
        <div className='w-full'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16 w-full'
          >
            <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-6'>
              Why Choose <span className='bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent'>Vibedemy?</span>
            </h2>
            <p className='text-xl text-white/80 max-w-3xl mx-auto'>
              Experience the future of online learning with our cutting-edge platform
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto'
          >
            {[
              {
                icon: assets.ai_icon || assets.search_icon,
                title: 'AI-Powered Recommendations',
                description: 'Our advanced AI finds the perfect courses for you, tailored to your interests, goals, and learning style.',
                gradient: 'from-primary-500 to-primary-600',
              },
              {
                icon: assets.lesson_icon,
                title: 'Expert Educators',
                description: 'Learn from industry leaders and passionate teachers with real-world experience and proven track records.',
                gradient: 'from-secondary-500 to-secondary-600',
              },
              {
                icon: assets.time_clock_icon,
                title: 'Flexible & Accessible',
                description: 'Study at your own pace, anytime, anywhere, on any device. Your learning journey, your way.',
                gradient: 'from-accent-500 to-accent-600',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover='hover'
                className='group relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-glass hover:shadow-premium border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden'
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className='w-8 h-8 filter brightness-0 invert'
                  />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300'>
                  {feature.title}
                </h3>
                <p className='text-white/80 leading-relaxed'>
                  {feature.description}
                </p>
                <div className='absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl' />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Course Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative z-10 py-24 px-4 w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm'
      >
        <div className='w-full text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-4xl md:text-5xl font-display font-bold text-white mb-6'
          >
            Our AI finds the <span className='bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent'>best courses</span> for you
          </motion.h2>

          {randomCourse ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='group relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-premium p-8 md:p-12 flex flex-col md:flex-row items-center w-full max-w-4xl mx-auto border border-white/20 hover:border-white/30 hover:shadow-neon transition-all duration-300 overflow-hidden'
            >
              <div className='relative mb-8 md:mb-0 md:mr-8'>
                <img
                  src={randomCourse.courseThumbnail}
                  alt={randomCourse.courseTitle}
                  className='w-64 h-40 object-cover rounded-2xl shadow-medium group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl' />
              </div>
              <div className='flex-1 text-left'>
                <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300'>
                  {randomCourse.courseTitle}
                </h3>
                <p className='text-white/80 mb-6 leading-relaxed text-lg'>
                  {randomCourse.courseDescription?.slice(0, 150)}...
                </p>
                <Link
                  to={`/courses/${randomCourse._id}`}
                  className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-2xl shadow-medium hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105'
                >
                  View Course
                  <svg className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </Link>
              </div>
              <div className='absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl' />
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-xl text-white/60'
            >
              No courses available yet. Check back soon!
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* Advantages & Solutions Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative z-10 py-24 px-4 w-full'
      >
        <div className='w-full max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-6'>
              Why Choose <span className='bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent'>Vibedemy?</span>
            </h2>
            <p className='text-xl text-white/80 max-w-3xl mx-auto'>
              We understand the challenges of online learning and have built solutions for every problem
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12'>
            {/* Advantages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <h3 className='text-3xl font-bold text-white mb-8 flex items-center'>
                <span className='w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                </span>
                Our Advantages
              </h3>
              
              {[
                {
                  title: 'AI-Powered Personalization',
                  description: 'Our advanced AI learns your learning style and recommends the perfect courses for your goals.',
                  icon: '🤖'
                },
                {
                  title: 'Expert-Led Content',
                  description: 'Learn from industry professionals with real-world experience and proven track records.',
                  icon: '👨‍🏫'
                },
                {
                  title: 'Flexible Learning Schedule',
                  description: 'Study at your own pace, anytime, anywhere. No rigid schedules or deadlines.',
                  icon: '⏰'
                },
                {
                  title: 'Interactive Learning Experience',
                  description: 'Engaging content with quizzes, projects, and hands-on exercises.',
                  icon: '🎯'
                },
                {
                  title: 'Community Support',
                  description: 'Connect with fellow learners and get help from instructors and peers.',
                  icon: '👥'
                }
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 shadow-glass hover:shadow-premium'
                >
                  <div className='flex items-start space-x-4'>
                    <div className='text-2xl'>{advantage.icon}</div>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300'>
                        {advantage.title}
                      </h4>
                      <p className='text-white/70 leading-relaxed'>
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.div>
              ))}
            </motion.div>

            {/* Solutions to Common Problems */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <h3 className='text-3xl font-bold text-white mb-8 flex items-center'>
                <span className='w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </span>
                We Solve These Problems
              </h3>
              
              {[
                {
                  problem: 'Overwhelming Course Selection',
                  solution: 'Our AI curates personalized recommendations based on your interests, skill level, and career goals.',
                  icon: '🎯'
                },
                {
                  problem: 'Lack of Motivation',
                  solution: 'Gamified learning with progress tracking, achievements, and community challenges to keep you engaged.',
                  icon: '🏆'
                },
                {
                  problem: 'Poor Quality Content',
                  solution: 'Rigorous vetting process ensures only high-quality, expert-created content makes it to our platform.',
                  icon: '⭐'
                },
                {
                  problem: 'No Personal Support',
                  solution: '24/7 community support, instructor Q&A sessions, and peer study groups for continuous assistance.',
                  icon: '🤝'
                },
                {
                  problem: 'Outdated Information',
                  solution: 'Regular content updates and industry expert reviews ensure you learn the latest skills and trends.',
                  icon: '🔄'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='group relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 shadow-glass hover:shadow-premium'
                >
                  <div className='flex items-start space-x-4'>
                    <div className='text-2xl'>{item.icon}</div>
                    <div>
                      <h4 className='text-lg font-semibold text-red-300 mb-2 group-hover:text-red-200 transition-colors duration-300'>
                        Problem: {item.problem}
                      </h4>
                      <p className='text-white/70 leading-relaxed'>
                        <span className='text-blue-300 font-medium'>Solution: </span>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='relative z-10 py-24 px-4 w-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm'
      >
        <div className='w-full max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-display font-bold text-white mb-6'>
              Frequently Asked <span className='bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent'>Questions</span>
            </h2>
            <p className='text-xl text-white/80 max-w-2xl mx-auto'>
              Everything you need to know about Vibedemy and online learning
            </p>
          </motion.div>

          <div className='space-y-4'>
            {[
              {
                question: 'How does the AI course recommendation work?',
                answer: 'Our AI analyzes your learning preferences, career goals, skill level, and past course performance to recommend the most relevant courses. It continuously learns from your interactions to provide increasingly personalized suggestions.'
              },
              {
                question: 'Can I learn at my own pace?',
                answer: 'Absolutely! All our courses are self-paced. You can start, pause, and resume your learning whenever it suits your schedule. There are no deadlines or time restrictions.'
              },
              {
                question: 'What if I need help during my course?',
                answer: 'We provide multiple support channels: instructor Q&A sessions, community forums, peer study groups, and 24/7 technical support. You\'re never alone in your learning journey.'
              },
              {
                question: 'Are the courses updated regularly?',
                answer: 'Yes! Our content team works with industry experts to ensure all courses reflect the latest trends, tools, and best practices. You\'ll always learn current, relevant skills.'
              },
              {
                question: 'Can I get a certificate after completing a course?',
                answer: 'Upon successful completion of any course, you\'ll receive a verified certificate that you can share on LinkedIn and add to your resume. Our certificates are recognized by industry professionals.'
              },
              {
                question: 'What if I\'m not satisfied with a course?',
                answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with your course, you can request a full refund within 30 days of purchase.'
              },
              {
                question: 'Do you offer group discounts for teams?',
                answer: 'Yes! We offer special pricing for teams and organizations. Contact our sales team to learn about our enterprise packages and group discounts.'
              },
              {
                question: 'How do I track my learning progress?',
                answer: 'Our dashboard provides detailed analytics including course completion percentage, time spent learning, quiz scores, and skill assessments. You can also set learning goals and track your achievements.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-glass hover:shadow-premium'
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className='w-full p-6 text-left flex items-center justify-between focus:outline-none'
                >
                  <h3 className='text-lg font-semibold text-white group-hover:text-pink-300 transition-colors duration-300 pr-4'>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className='flex-shrink-0'
                  >
                    <svg className='w-6 h-6 text-white/70' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className='px-6 pb-6'>
                        <p className='text-white/80 leading-relaxed'>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className='absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Landing;
