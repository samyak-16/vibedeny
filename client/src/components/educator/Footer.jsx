import React from 'react';
import { assets } from '../../assets/assets';
import vibedemyLogoSmall from '../../assets/vibedemy_logo_small.svg';
import { Link } from 'react-router-dom';
import {
  FacebookLogo,
  GitBranch,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from 'phosphor-react';
import SocialIcons from '../SocialIcons';

const Footer = () => {
  return (
    <footer className='flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t'>
      <div className='flex items-center gap-4'>
        {/* Logo removed for backend/educator footer as requested */}
        <p className='py-4 text-center text-xs md:text-sm text-gray-500'>
          Made with love by Vibe team
        </p>
      </div>

      {/* SocialIcons removed for rebrand */}
    </footer>
  );
};

export default Footer;
