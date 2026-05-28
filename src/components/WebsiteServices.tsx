import {motion} from 'motion/react';

const websites = [
  {
    title: 'PAKET SILVER', 
    price: 'Rp 700.000', 
    desc: 'Solusi cepat & hemat bagi UMKM untuk mulai online profesional.',
    features: ['Desain modern & responsif', 'Maksimal 5 halaman', 'Domain gratis 1 tahun', 'Hosting 1 tahun', 'SSL Certificate', 'Revisi 2x']
  },
  {
    title: 'PAKET GOLD', 
    price: 'Rp 1.600.000', 
    desc: 'Desain custom premium dengan optimasi konversi penjualan maksimal.',
    features: ['Desain premium & custom', 'Maksimal 10 halaman', 'Domain gratis 1 tahun', 'Hosting 1 tahun', 'SSL Certificate', 'Revisi unlimited', 'Optimasi SEO Dasar', 'Support Integrasi WA Chat']
  },
  {
    title: 'PAKET PLATINUM', 
    price: 'Rp 3.000.000', 
    desc: 'Sistem web tingkat lanjut terintegrasi fitur khusus fungsional.',
    features: ['Desain eksklusif & advanced', 'Unlimited halaman', 'Domain gratis 1 tahun', 'Hosting premium 1 tahun', 'SSL Certificate', 'Maintenance 3 bulan', 'Prioritas Layanan Teknis', 'Garansi Server 99.9% Uptime']
  },
];

export default function WebsiteServices() {
  return (
    <section id="website" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center mb-16 text-slate-100">
        Jasa Pembuatan <span className="text-cyan-400">Website</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {websites.map((w, i) => (
          <motion.div 
            key={i}
            whileHover={{y: -10}}
            className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/20 p-8 rounded-2xl hover:border-cyan-500/50 transition-all flex flex-col"
          >
            <h3 className="font-display text-xl font-bold text-slate-100 mb-2">{w.title}</h3>
            <p className="text-3xl font-bold text-cyan-400 mb-4">{w.price}</p>
            <p className="text-sm text-slate-400 mb-6 flex-grow">{w.desc}</p>
            <ul className="space-y-3 mb-8 text-slate-300">
              {w.features.map(f => <li key={f} className="flex items-start gap-2"><span>✓</span> {f}</li>)}
            </ul>
            <a href="https://wa.me/6285716551653?text=Halo HADIGITAL, saya ingin memesan jasa website." className="block text-center bg-cyan-900/30 border border-cyan-500 text-cyan-400 py-3 rounded-xl hover:bg-cyan-500 hover:text-slate-950 transition-all font-bold">
              Pesan via WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
