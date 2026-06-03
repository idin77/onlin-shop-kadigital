import {motion} from 'motion/react';

export default function TargetAudience() {
  const businesses = [
    'Jasa Sedot WC',
    'Barbershop',
    'Laundry',
    'Salon',
    'Konveksi',
    'Klinik',
    'Furniture',
    'Bengkel',
    'Travel',
    'Properti',
    'UMKM Lokal',
    'Personal Brand'
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Promo Ini Cocok Untuk Anda yang Punya Bisnis:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.05}}
              className="bg-slate-900 border border-slate-700/50 p-4 rounded-xl text-slate-200 hover:border-cyan-500 transition-all font-medium"
            >
              {business}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
