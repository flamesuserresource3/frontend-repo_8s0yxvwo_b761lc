import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Crown } from 'lucide-react';

const glowText = 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0a0c12] via-[#0a0c12] to-[#090b10]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <Spline
          scene="https://prod.spline.design/5jv3Jd2kS6bP8f8K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Light streaks and vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(40%_25%_at_80%_20%,rgba(244,63,94,0.1),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0),rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.75))]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 px-4 py-2 text-cyan-200/90 backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-cyan-300" />
          <span className="text-xs tracking-widest">PREMIUM POKER AFFILIATE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className={`mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl ${glowText}`}
        >
          Play Smarter. Earn Bigger.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-base text-slate-300/90 sm:text-lg"
        >
          Discover the top-rated poker platforms with elite bonuses, verified security, and lightning-fast payouts. Designed for serious players who value performance and trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#top-sites"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02] focus:outline-none"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Join Top Sites
          </a>

          <a
            href="#bonuses"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-3 text-slate-200 backdrop-blur transition hover:bg-white/10"
          >
            <Crown className="h-5 w-5 text-yellow-300" />
            Exclusive Bonuses
          </a>
        </motion.div>
      </div>

      {/* Floating chips */}
      <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center gap-8 opacity-90">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ y: 0, rotate: 0, opacity: 0.6 }}
            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
            className="h-10 w-10 rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 shadow-[0_0_20px_rgba(56,189,248,0.35)] backdrop-blur"
          />
        ))}
      </div>
    </section>
  );
}
