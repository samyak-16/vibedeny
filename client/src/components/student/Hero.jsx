import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center w-full px-4 text-center relative'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-5xl mx-auto space-y-12'
      >
        {/* Hero Content */}
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-6xl font-display font-bold text-slate-800 leading-tight'>
            Empower your future with the 
            <br />
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              courses designed to fit your choice.
            </span>
          </h1>

          <p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            We bring together world-class instructors, interactive content, and a supportive
            community to help you achieve your personal and professional goals.
          </p>

          <center><SearchBar /></center>
        </div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='space-y-6'
        >
          <p className='text-base text-slate-500'>Trusted by learners from</p>
          <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12'>
            <img src={assets.microsoft_logo} alt="microsoft_logo" className='w-20 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300' />
            <img src={assets.walmart_logo} alt="walmart_logo" className='w-20 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300' />
            <img src={assets.accenture_logo} alt="accenture_logo" className='w-20 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300' />
            <img src={assets.adobe_logo} alt="adobe_logo" className='w-20 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300' />
            <img src={assets.paypal_logo} alt="paypal_logo" className='w-20 md:w-24 opacity-60 hover:opacity-100 transition-opacity duration-300' />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
