import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseCard = ({ course, index = 0 }) => {
  const { currency, calculateRating } = useContext(AppContext);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      whileHover='hover'
      viewport={{ once: true, margin: '-50px' }}
      className='group relative'
    >
      <Link
        to={'/course/' + course._id}
        onClick={() => scrollTo(0, 0)}
        className='block relative bg-white rounded-3xl shadow-soft hover:shadow-large border border-neutral-200/50 overflow-hidden transition-all duration-300 group-hover:border-primary-200'
      >
        {/* Image Container */}
        <div className='relative overflow-hidden'>
          <img
            className='w-full h-48 object-cover transition-all duration-500 group-hover:scale-110'
            src={course.courseThumbnail}
            alt={course.courseTitle}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          
          {/* Badge */}
          <div className='absolute top-4 right-4'>
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-medium backdrop-blur-sm ${
              course.discount > 0 
                ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white' 
                : 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
            }`}>
              {course.discount > 0 ? `-${course.discount}%` : 'New'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className='p-6'>
          <h3 className='text-lg font-bold text-neutral-800 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300 leading-tight'>
            {course.courseTitle}
          </h3>
          
          {/* Rating */}
          <div className='flex items-center gap-2 mb-4'>
            <div className='flex items-center gap-1'>
              <span className='text-sm font-semibold text-neutral-700'>
                {calculateRating(course)}
              </span>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(calculateRating(course))
                        ? 'text-yellow-400'
                        : 'text-neutral-300'
                    }`}
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                ))}
              </div>
            </div>
            <span className='text-xs text-neutral-500 font-medium'>
              ({course.courseRatings.length})
            </span>
          </div>

          {/* Price */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent'>
                {currency}{' '}
                {(
                  course.coursePrice -
                  (course.discount * course.coursePrice) / 100
                ).toFixed(2)}
              </span>
              {course.discount > 0 && (
                <span className='text-sm text-neutral-400 line-through'>
                  {currency} {course.coursePrice.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* View Course Button */}
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center'>
                <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />
      </Link>
    </motion.div>
  );
};

export default CourseCard;
