
import React from 'react';
import { motion } from 'framer-motion';

const moments = [
  { 
    id: 1, 
    title: "Santai di Tepi Pantai", 
    img: "https://images.weserv.nl/?url=https://storage.googleapis.com/static.quickpixel.io/pro/users/1/ai/1739506637_image_0.png", 
    rotation: "-3deg" 
  },
  { 
    id: 2, 
    title: "Si Beruang & Lord of the Sea", 
    img: "https://images.weserv.nl/?url=https://storage.googleapis.com/static.quickpixel.io/pro/users/1/ai/1739506637_image_1.png", 
    rotation: "2deg" 
  },
  { 
    id: 3, 
    title: "Vibes Biru yang Tenang", 
    img: "https://images.weserv.nl/?url=https://storage.googleapis.com/static.quickpixel.io/pro/users/1/ai/1739506638_image_2.png", 
    rotation: "-1deg" 
  },
  { 
    id: 4, 
    title: "Momen Paling Gemas", 
    img: "https://images.weserv.nl/?url=https://storage.googleapis.com/static.quickpixel.io/pro/users/1/ai/1739506639_image_3.png", 
    rotation: "4deg" 
  },
];

const MomentsGrid: React.FC = () => {
  return (
    <section id="moments" className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-cursive font-bold text-[#800000]">Potongan Kenangan</h2>
        <p className="text-slate-500 text-sm">Setiap sudut di Roblox jadi saksi cerita kita.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
        {moments.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, rotate: "0deg" }}
            style={{ rotate: m.rotation }}
            className="bg-white p-4 shadow-xl border border-slate-100 rounded-sm group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-slate-100 mb-6">
              <img 
                src={m.img} 
                alt={m.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="font-cursive text-2xl text-center text-slate-700">{m.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MomentsGrid;
