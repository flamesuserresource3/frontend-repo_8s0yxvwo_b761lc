import React from 'react';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Trust from './components/Trust';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0a0c12] font-['Inter','Manrope','system-ui'] text-slate-200">
      {/* Neon top border */}
      <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_20px_rgba(56,189,248,0.6)]" />

      <Hero />
      <Showcase />
      <Trust />
      <Footer />
    </div>
  );
}
