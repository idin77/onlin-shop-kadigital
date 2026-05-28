import {motion} from 'motion/react';

const projects = [
  {name: 'Barbershop', category: 'Agency Profile'},
  {name: 'Furniture Store', category: 'E-Commerce'},
  {name: 'Bakery & Pastry', category: 'E-Commerce'},
  {name: 'Clinic & Health', category: 'Corporate'},
  {name: 'Beauty Salon', category: 'Agency Profile'},
  {name: 'Photography Studio', category: 'Portfolio'},
  {name: 'Coffee Shop', category: 'E-Commerce'},
  {name: 'CleanPro Services', category: 'Agency Profile'},
  {name: 'StyleHub Fashion', category: 'E-Commerce'},
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
            <div className="h-48 bg-slate-950 rounded-xl mb-4 flex items-center justify-center border border-slate-800 text-slate-700 font-bold text-xl group-hover:text-cyan-500 transition-colors">
              {p.name}
            </div>
            <h3 className="font-display text-xl font-bold text-slate-100">{p.name}</h3>
            <p className="text-slate-400">{p.category}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
