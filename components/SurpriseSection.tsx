
import React from 'react';
import { motion } from 'framer-motion';
import { X, Heart } from 'lucide-react';

interface SurpriseSectionProps {
  onClose: () => void;
}

const SurpriseSection: React.FC<SurpriseSectionProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-[#FFF9F5] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 space-y-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.3 }}
            className="w-16 h-16 bg-[#800000] text-white rounded-full flex items-center justify-center mx-auto"
          >
            <Heart fill="white" size={32} />
          </motion.div>

          <h2 className="text-3xl font-cursive font-bold text-[#800000]">Makasih udah ada, ya.</h2>
          
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg text-left italic font-light">
            <p>
              "Waktu kamu nanya “will u be my valentine?” jujur aku seneng banget.  Aku nggak expect kamu bakal nanya itu, dan aku ngerasa spesial banget. Jadi jawabannya jelas ya… iya, aku mau jadi valentine kamu 🤍"
            </p>
            <p>
              "Tapi makin aku pikirin, aku sadar kalau perasaan aku ke kamu tuh nggak cuma buat satu hari doang. Aku nyaman banget sama kamu. Cara kamu cerita, cara kamu ngadepin hidup, bahkan hal-hal kecil dari kamu tuh bikin aku makin jatuh."
            </p>
            <p>
              "Aku nggak mau maksa, aku juga nggak mau bikin semuanya jadi buru-buru. Tapi aku cuma mau jujur… aku suka kamu. Dan aku pengen kita nggak cuma berhenti di kata “valentine”. Kalau kamu juga ngerasa nyaman dan punya rasa yang sama, aku pengen kita coba jalanin ini lebih serius. Pelan-pelan, tapi bareng. Jadi… selain jadi valentine kamu, aku juga pengen jadi orang yang kamu pilih setiap hari 🤍"
            </p>
          </div>

          <div className="pt-8 border-t border-[#FADADD] flex flex-col items-center gap-4">
            <p className="text-sm font-bold text-[#800000] uppercase tracking-widest">I Love You, Wawa.</p>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-[#800000]"
            >
              ❤️
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SurpriseSection;
