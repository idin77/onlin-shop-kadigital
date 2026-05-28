export default function Payment() {
  return (
    <section id="payment" className="py-20 px-6 bg-slate-900/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl font-bold mb-12 text-slate-100">Metode Pembayaran</h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-12 mb-8">
          <div className="flex flex-col items-center">
            <img src="/shopeepay-qr.png" alt="ShopeePay QR" className="w-64 h-64 mb-4 rounded-lg bg-slate-800" />
            <p className="font-bold text-slate-300">ShopeePay</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/dana-qr.png" alt="DANA QR" className="w-64 h-64 mb-4 rounded-lg bg-slate-800" />
            <p className="font-bold text-slate-300">DANA</p>
          </div>
        </div>
        
        <p className="text-xl text-slate-400 mb-8">Nomor Pembayaran: <span className="font-bold text-white tracking-widest text-2xl">085716551653</span></p>
        
        <div className="flex gap-4 justify-center">
          <a href="https://wa.me/6285716551653?text=Halo HADIGITAL, saya ingin melakukan pembayaran." className="bg-cyan-500 text-slate-950 px-8 py-3 rounded-full font-bold">Bayar Sekarang</a>
          <a href="https://wa.me/6285716551653?text=Halo HADIGITAL, saya ingin menghubungi admin." className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3 rounded-full">Hubungi Admin</a>
        </div>
      </div>
    </section>
  );
}
