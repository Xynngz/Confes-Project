
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';

interface WelcomeProps {
  onEnter: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onEnter }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const checkAccess = () => {
    // A playful check - doesn't actually need to be secure, just adds "mystery"
    // Let's assume the password is "sayang" or something similar, or just allow entry
    if (password.toLowerCase().includes('Fisch') || password === 'Fisch') {
       onEnter();
    } else {
       setError(true);
       setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF9F5] px-6"
    >
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto w-20 h-20 bg-[#FADADD] rounded-full flex items-center justify-center"
        >
          <Heart className="text-[#800000] fill-[#800000]" size={40} />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-[#800000] font-cursive">Halo, Wawa.</h1>
          <p className="text-slate-600 leading-relaxed">
            Aku bikin sesuatu yang kecil... buat kamu yang paling spesial. <br/>
            Cuma kamu yang boleh liat isi dalemnya.
          </p>
        </div>

        <div className="relative group">
          <div className="flex items-center bg-white border border-[#FADADD] rounded-xl overflow-hidden shadow-sm transition-all focus-within:ring-2 focus-within:ring-[#FADADD]">
            <div className="pl-4 text-slate-400">
              <Lock size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Game roblox yang membuat kita bertemu?"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-3 outline-none text-slate-700 bg-transparent"
            />
            <button 
              onClick={checkAccess}
              className="bg-[#800000] text-white px-6 py-4 font-semibold hover:bg-[#600000] transition-colors"
            >
              Masuk
            </button>
          </div>
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-2 absolute w-full"
            >
              Masa lupa sih? Coba lagi deh...
            </motion.p>
          )}
        </div>

        <p className="text-slate-400 text-xs italic">
          Psst... clue nya game yang mancing mancing itu!
        </p>
      </div>
    </motion.div>
  );
};

export default Welcome;
