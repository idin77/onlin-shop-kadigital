import {motion} from 'motion/react';
import heroBg from '../assets/images/hero_background_1780511849489.png';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})`, opacity: 0.3 }}
      />
      <div className="absolute inset-0 bg-slate-950/80 pointer-events-none" />
      
      <motion.h1 
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="font-display text-4xl md:text-6xl font-bold mb-6 text-slate-100 relative z-10"
      >
        Buat Website Profesional, Gratis Video Iklan 60 Detik Senilai <span className="text-cyan-400">Rp490.000</span>
      </motion.h1>
      
      <motion.p 
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
        className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl relative z-10"
      >
        Tingkatkan kepercayaan bisnis Anda dengan website modern dan video promosi yang siap digunakan untuk Facebook, Instagram, WhatsApp, dan Google Business.
      </motion.p>
      
      <motion.div 
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 0.4}}
        className="flex gap-4 relative z-10"
      >
        <a href="#payment" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          Pesan Sekarang
        </a>
        <a href="#website" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full font-bold transition-all">
          Lihat Paket
        </a>
      </motion.div>
    </section>
  );
}
