import {motion} from 'motion/react';

const videos = [
  {time: '8 DETIK', price: 'Rp 99.000'},
  {time: '15 DETIK', price: 'Rp 179.000'},
  {time: '30 DETIK', price: 'Rp 299.000'},
  {time: '60 DETIK', price: 'Rp 499.000'},
];

export default function VideoServices() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center mb-16 text-slate-100">
        Jasa <span className="text-cyan-400">Video Animasi Realistis</span>
      </h2>
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {videos.map((v, i) => (
          <motion.div 
            key={i}
            whileHover={{scale: 1.05}}
            className="bg-slate-900/50 backdrop-blur-md border border-cyan-500/30 p-6 rounded-2xl glow-cyan text-center"
          >
            <h3 className="font-display text-lg font-bold text-slate-100 mb-2">{v.time}</h3>
            <p className="text-xl font-bold text-cyan-400">{v.price}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center text-slate-400 space-y-2 mb-12">
        <p>“Lebih dari 1 menit harga bisa nego”</p>
        <p>“Kontrak bulanan untuk order rutin tersedia harga khusus”</p>
      </div>
      
      <div className="bg-slate-900/30 border border-slate-700/50 p-8 rounded-2xl max-w-2xl mx-auto">
        <h4 className="font-bold text-slate-100 mb-4 text-center">FITUR VIDEO SUDAH TERMASUK</h4>
        <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
          <p>• Skrip & Konsep</p>
          <p>• Voice Over</p>
          <p>• Video Sinematik</p>
          <p>• 2 Lagu Tentang Video</p>
          <p className="col-span-2 text-center text-slate-400 italic">Estimasi selesai 1 hari kerja</p>
        </div>
      </div>
    </section>
  );
}
