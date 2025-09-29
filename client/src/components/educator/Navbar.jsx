import React from 'react';
import { assets, dummyEducatorData } from '../../assets/assets';
import vibedemyLogoSmall from '../../assets/vibedemy_logo_small.svg';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import Logger from '../Logger';
const Navbar = () => {
  const educatorData = dummyEducatorData;
  const { user } = useUser();
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3'>
      <Link to='/'>
        <img
          src={vibedemyLogoSmall}
          alt='Vibedemy Logo'
          className='w-[200px] max-h-10 object-contain'
        />
      </Link>

      <div className='flex items-center gap-5 text-gray-500 relative'>
        <div className='hidden md:block'>
          <Logger />
        </div>
        <p>Hi! {user ? user.fullName : 'Developers'} </p>
        {user ? (
          <UserButton />
        ) : (
          <img className='max-w-8' src={assets.profile_img} alt='profile_img' />
        )}
      </div>
    </div>
  );
};

export default Navbar;
