import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center w-full px-4 py-16'>
      <div className='text-center max-w-4xl mx-auto'>
        <p className='text-lg md:text-xl text-slate-600 mb-12'>Trusted by learners from</p>
        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-16'>
          <img src={assets.microsoft_logo} alt="microsoft_logo" className='w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300' />
          <img src={assets.walmart_logo} alt="walmart_logo" className='w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300' />
          <img src={assets.accenture_logo} alt="accenture_logo" className='w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300' />
          <img src={assets.adobe_logo} alt="adobe_logo" className='w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300' />
          <img src={assets.paypal_logo} alt="paypal_logo" className='w-24 md:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Companies
