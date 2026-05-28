/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import WebsiteServices from './components/WebsiteServices';
import VideoServices from './components/VideoServices';
import Payment from './components/Payment';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <WebsiteServices />
      <VideoServices />
      <Payment />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
