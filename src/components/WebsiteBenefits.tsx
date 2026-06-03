import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WebsiteBenefits() {
  const benefits = [
    'Meningkatkan kepercayaan calon pelanggan',
    'Memudahkan promosi',
    'Bisa muncul di Google',
    'Bisa menampilkan portofolio',
    'Bisa dijadikan tujuan iklan',
    'Membantu closing lebih cepat'
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Apa Manfaat Website untuk Bisnis Anda?
        </h2>
        <p className="text-slate-300 text-center mb-12 text-lg">
          Dengan website, bisnis terlihat lebih serius, mudah dibagikan, dan calon pelanggan bisa melihat informasi lengkap tanpa harus bertanya berulang-ulang.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all"
            >
              <CheckCircle className="text-cyan-500 w-6 h-6 flex-shrink-0" />
              <span className="text-slate-100 font-medium">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
