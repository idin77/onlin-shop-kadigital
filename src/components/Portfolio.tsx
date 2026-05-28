import {motion} from 'motion/react';
import azharBarber from '../assets/images/azhar_barbershop_thumb_1780005596524.png';
import furnitureJaya from '../assets/images/furniture_jaya_abadi_thumb_1780005613441.png';
import bakeryNusantara from '../assets/images/bakery_lezat_nusantara_thumb_1780005629537.png';
import klinikSehat from '../assets/images/klinik_sehat_sejahtera_thumb_1780005651685.png';
import salonCantik from '../assets/images/salon_cantik_permata_thumb_1780005666706.png';
import studioFoto from '../assets/images/studio_foto_momen_indah_thumb_1780005683858.png';
import warungKopi from '../assets/images/warung_kopi_nusantara_thumb_1780005707580.png';
import cleanPro from '../assets/images/cleanpro_services_thumb_1780005730401.png';
import styleHub from '../assets/images/stylehub_fashion_thumb_1780005751143.png';

const projects = [
  {name: 'Azhar Barbershop', category: 'Agency Profile', img: azharBarber},
  {name: 'Furniture Jaya Abadi', category: 'E-Commerce', img: furnitureJaya},
  {name: 'Bakery Lezat Nusantara', category: 'E-Commerce', img: bakeryNusantara},
  {name: 'Klinik Sehat Sejahtera', category: 'Corporate', img: klinikSehat},
  {name: 'Salon Cantik Permata', category: 'Agency Profile', img: salonCantik},
  {name: 'Studio Foto Momen Indah', category: 'Portfolio', img: studioFoto},
  {name: 'Warung Kopi Nusantara', category: 'E-Commerce', img: warungKopi},
  {name: 'CleanPro Services', category: 'Agency Profile', img: cleanPro},
  {name: 'StyleHub Fashion', category: 'E-Commerce', img: styleHub},
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="font-display text-4xl font-bold text-center mb-16 text-slate-100">
        Hasil Karya <span className="text-cyan-400">Terbaru</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{y: -10}}
            className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:border-cyan-500/50 transition-all group"
          >
            <div className="h-48 bg-slate-950 rounded-xl mb-4 overflow-hidden border border-slate-800">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-100">{p.name}</h3>
            <p className="text-slate-400">{p.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
