
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#FFF9F5]/80 backdrop-blur-md py-4"
    >
      <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-cursive font-bold text-[#800000]">Our Space.</span>
        <div className="flex gap-6 text-sm text-slate-500 font-medium">
          <a href="#story" className="hover:text-[#800000] transition-colors">Cerita</a>
          <a href="#notes" className="hover:text-[#800000] transition-colors">Hal Kecil</a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
