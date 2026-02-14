
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Caramu dengerin ceritaku pas aku lagi capek.",
  "Grasak grusuk pas lagi calling.",
  "Tidurnya lucuu ada ngoroknya.",
  "Ketawa kamu yang terrlepas akan hal-hal random yang kita lihat.",
  "Selaluu semangatin aku dan ingatin Tenangin diri Lo!.",
  "Dikirimin pap random yang lucuuu selaluu."
];

const LoveNotes: React.FC = () => {
  return (
    <section id="notes" className="bg-[#FADADD]/30 rounded-3xl p-8 md:p-12 space-y-10">
      <div className="space-y-2">
        <h2 className="text-3xl font-cursive font-bold text-[#800000]">Hal-Hal Kecil Tentangmu...</h2>
        <p className="text-slate-600">Yang lucu dan imut.</p>
      </div>

      <div className="grid gap-4">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mt-1 text-[#800000]">
              <CheckCircle2 size={20} />
            </div>
            <p className="text-slate-700 font-medium">{reason}</p>
          </motion.div>
        ))}
      </div>
      
      <p className="text-center italic text-sm text-slate-400">
        "Dan masih banyak lagi... tapi nanti kepanjangan halamannya :)"
      </p>
    </section>
  );
};

export default LoveNotes;
