export default function Payment() {
  return (
    <section id="payment" className="py-20 px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl font-bold mb-6 text-slate-100">
          Ambil Promo Terbatas!
        </h2>
        
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Promo gratis video iklan 60 detik senilai Rp490.000 ini hanya berlaku untuk pemesanan website dalam periode terbatas. Ambil sekarang sebelum kuota habis.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a                
            href="https://wa.me/6285716551653?text=Halo HADIGITAL, saya ingin mengambil promo Website + Video Iklan." 
            className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all"
          >
            Ambil Promo Hari Ini
          </a>
        </div>
      </div>
    </section>
  );
}
