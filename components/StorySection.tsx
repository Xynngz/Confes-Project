
import React from 'react';
import { motion } from 'framer-motion';

const stories = [
  {
    title: "Awal Mula",
    desc: "Pertama kali liat kamu join di live aku dan jadi viewer aku, seketika aku live akan hampa jika aku tidak melihat nama kamu nonton live aku.",
    emoji: "💌"
  },
  {
    title: "Momen Itu",
    desc: "Waktu kita sadar kalau 'kita' itu lebih dari sekadar temen. Momen kecil yang sebenernya sederhana, tapi ngerubah cara aku ngeliat kamu selamanya.",
    emoji: "✨"
  },
  {
    title: "Perjalanan Kita",
    desc: "Nggak selalu mulus, tapi setiap tantangan justru bikin aku makin yakin kalau kamu adalah orang yang paling sabar dan paling ngertiin aku.",
    emoji: "⛵"
  }
];

const StorySection: React.FC = () => {
  return (
    <section id="story" className="space-y-16">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-cursive font-bold text-[#800000]">Awal Masa Kita...</h2>
        <div className="w-12 h-1 bg-[#FADADD] mx-auto rounded-full"></div>
      </div>

      <div className="relative space-y-24">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#FADADD] -translate-x-1/2 hidden md:block"></div>

        {stories.map((story, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 text-center md:text-right space-y-4">
              {idx % 2 !== 0 ? (
                <div className="text-center md:text-left space-y-4">
                   <h3 className="text-2xl font-bold text-[#800000]">{story.title}</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">{story.desc}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-[#800000]">{story.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{story.desc}</p>
                </>
              )}
            </div>
            
            <div className="relative z-10 w-16 h-16 bg-[#FFF9F5] border-2 border-[#FADADD] rounded-full flex items-center justify-center text-3xl shadow-sm">
              {story.emoji}
            </div>
            
            <div className="flex-1 hidden md:block"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StorySection;
