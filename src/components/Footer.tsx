export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4 font-display">HADIGITAL</h3>
          <p>Digital Solutions & Innovation</p>
          <p>PT HADIGITAL OFFICIAL WEB</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Layanan</h4>
          <ul className="space-y-2">
            <li>Jasa Pembuatan Website</li>
            <li>Video Animasi Realistis</li>
            <li>Branding Digital</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Kontak</h4>
          <p>WhatsApp: 085716551653</p>
        </div>
      </div>
    </footer>
  );
}
