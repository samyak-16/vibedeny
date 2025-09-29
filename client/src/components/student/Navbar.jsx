import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import vibedemyLogoSmall from '../../assets/vibedemy_logo_small.svg';
import { Link, useLocation } from 'react-router-dom';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import Logger from '../Logger';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  const { navigate, isEducator, backendUrl, setIsEducator, getToken } =
    useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }

      const token = await getToken();

      const { data } = await axios.get(
        backendUrl + '/api/educator/update-role',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('educ', data);

      if (data.success) {
        setIsEducator(true);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Navigation links
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Courses', to: '/course-list' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
    { name: 'For Educators', to: '/educator' },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      className='z-50 w-full fixed top-0 left-0 bg-white/80 backdrop-blur-xl shadow-soft border-b border-neutral-200/50'
      style={{
        WebkitBackdropFilter: 'blur(20px)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4'>
        <motion.img
          onClick={() => navigate('/')}
          src={vibedemyLogoSmall}
          alt='Vibedemy Logo'
          className='w-40 h-auto object-contain cursor-pointer drop-shadow-sm hover:scale-105 transition-all duration-300'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
        
        <div className='hidden lg:flex items-center gap-1'>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                location.pathname === link.to 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
              }`}
            >
              {link.name}
              {location.pathname === link.to && (
                <motion.span
                  layoutId='navbar-indicator'
                  className='absolute inset-0 bg-primary-100 rounded-xl -z-10'
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className='hidden lg:flex items-center gap-3'>
          {user && (
            <>
              <motion.button
                onClick={becomeEducator}
                className='px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-soft hover:shadow-medium hover:bg-blue-700 transition-all duration-300'
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEducator ? 'Dashboard' : 'Become Educator'}
              </motion.button>
              <Link
                to='/my-enrollments'
                className='px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-soft hover:shadow-medium hover:bg-blue-700 transition-all duration-300'
              >
                My Courses
              </Link>
            </>
          )}
          
          <div className='flex items-center gap-3'>
            <Logger />
            {user ? (
              <div className='relative'>
                <UserButton 
                  afterSignOutUrl='/' 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 rounded-xl shadow-soft border-2 border-white",
                    }
                  }}
                />
              </div>
            ) : (
              <motion.button
                onClick={() => openSignIn()}
                className='px-6 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300'
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className='lg:hidden flex items-center gap-3'>
          {user && (
            <motion.button
              onClick={becomeEducator}
              className='px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium shadow-soft hover:bg-blue-700 transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isEducator ? 'Dashboard' : 'Educator'}
            </motion.button>
          )}
          
          {user ? (
            <UserButton 
              afterSignOutUrl='/' 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg shadow-soft",
                }
              }}
            />
          ) : (
            <motion.button
              onClick={() => openSignIn()}
              className='px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-lg shadow-soft'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
