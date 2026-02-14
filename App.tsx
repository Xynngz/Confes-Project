
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Welcome from './components/Welcome';
import StorySection from './components/StorySection';
import LoveNotes from './components/LoveNotes';
import SurpriseSection from './components/SurpriseSection';
import FloatingHearts from './components/FloatingHearts';
import Header from './components/Header';

const App: React.FC = () => {
  const [isEntered, setIsEntered] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  // Handle the mysterious entrance
  const handleEnter = () => {
    setIsEntered(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative text-slate-800">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {!isEntered ? (
          <Welcome key="welcome" onEnter={handleEnter} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="pb-20"
          >
            <Header />
            <main className="max-w-4xl mx-auto px-6 space-y-32 py-20">
              <StorySection />
              <LoveNotes />
              
              <div className="flex flex-col items-center justify-center py-20">
                <p className="text-maroon-800 italic mb-8 text-center max-w-md">
                  "Terakhir...I want to say something for you"
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSurprise(true)}
                  className="bg-[#800000] text-white px-8 py-4 rounded-full shadow-lg font-semibold hover:bg-[#600000] transition-colors"
                >
                  Valentine Letters ❤️
                </motion.button>
              </div>
            </main>

            <AnimatePresence>
              {showSurprise && (
                <SurpriseSection onClose={() => setShowSurprise(false)} />
              )}
            </AnimatePresence>
            
            <footer className="text-center py-10 text-slate-400 text-sm">
              Dibuat dengan seluruh ❤️ untukmu.
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
