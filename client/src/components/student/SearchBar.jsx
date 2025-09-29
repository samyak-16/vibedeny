import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : '');
  const [isFocused, setIsFocused] = useState(false);

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input);
  };

  return (
    <motion.form
      onSubmit={onSearchHandler}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`max-w-2xl w-full relative group transition-all duration-300 ${
        isFocused ? 'scale-105' : 'scale-100'
      }`}
    >
      <div className={`relative flex items-center bg-white/90 backdrop-blur-sm border-2 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 ${
        isFocused 
          ? 'border-primary-300 shadow-glow' 
          : 'border-neutral-200/50 hover:border-primary-200'
      }`}>
        {/* Search Icon */}
        <div className="pl-6 pr-3">
          <svg 
            className={`w-6 h-6 transition-colors duration-300 ${
              isFocused ? 'text-primary-500' : 'text-neutral-400'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input Field */}
        <input
          onChange={e => setInput(e.target.value)}
          value={input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="text"
          placeholder="Search for courses, skills, or topics..."
          className="flex-1 h-14 px-3 outline-none bg-transparent text-neutral-700 placeholder-neutral-400 text-lg font-medium"
        />

        {/* Search Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="m-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl shadow-medium hover:shadow-large transition-all duration-300"
        >
          <span className="hidden sm:inline">Search</span>
          <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </motion.button>
      </div>

      {/* Focus Ring */}
      {isFocused && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-2xl -z-10 blur-xl"
        />
      )}
    </motion.form>
  );
};

export default SearchBar;
