import {Smartphone} from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/6285716551653?text=Halo HADIGITAL, saya ingin memesan jasa digital."
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 glow-cyan"
    >
      <Smartphone size={28} />
    </a>
  );
}
