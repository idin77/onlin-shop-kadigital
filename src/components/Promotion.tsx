import {motion} from 'motion/react';

export default function Promotion() {
  return (
    <motion.section 
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className="py-16 bg-slate-900 border-y border-slate-700 my-12"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">🎁 SLOT TERBATAS HARI INI! 🎁</h2>
        <p className="text-2xl font-bold text-white mb-8">🚀 GRATIS Video Animasi Promosi Senilai Rp499.000!</p>
        <p className="text-lg text-slate-300 mb-8">
          Khusus untuk 10 pelanggan pertama yang memesan jasa pembuatan website di HADIGITAL hari ini.
        </p>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-700 text-left mb-8">
          <h3 className="font-bold text-white mb-4">Apa yang Anda dapatkan?</h3>
          <ul className="space-y-2 text-slate-300">
            <li>✅ Website Profesional & Mobile Friendly</li>
            <li>✅ Desain Modern dan Responsif</li>
            <li>✅ Integrasi WhatsApp</li>
            <li>✅ SEO Friendly</li>
            <li>✅ GRATIS Video Animasi Promosi 60 Detik (Senilai Rp499.000)</li>
          </ul>
        </div>
        
        <p className="text-slate-400 mb-6 italic">
          Website membantu bisnis Anda tampil profesional di Google, sementara video promosi membantu menarik lebih banyak calon pelanggan di media sosial.
        </p>

        <p className="text-yellow-400 font-bold mb-8">⏳ Promo berlaku sampai kuota 10 pelanggan pertama terpenuhi.</p>

        <div className="space-y-4">
          <p className="text-white">Jangan lewatkan kesempatan mendapatkan website profesional sekaligus video marketing keren dalam satu paket!</p>
          <a 
            href="https://wa.me/6285716551653" 
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
          >
            📲 Pesan Online Sekarang
          </a>
        </div>
      </div>
    </motion.section>
  );
}
