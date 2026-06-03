/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Promotion from './components/Promotion';
import WebsiteServices from './components/WebsiteServices';
import WebsiteBenefits from './components/WebsiteBenefits';
import TargetAudience from './components/TargetAudience';
import VideoServices from './components/VideoServices';
import Portfolio from './components/Portfolio';
import Payment from './components/Payment';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Promotion />
      <WebsiteServices />
      <WebsiteBenefits />
      <TargetAudience />
      <VideoServices />
      <Portfolio />
      <Payment />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
