import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Zap } from 'lucide-react';

const sites = [
  {
    name: 'NeonPoker',
    rating: 4.9,
    colorFrom: 'from-cyan-600/30',
    colorTo: 'to-blue-700/30',
    perks: ['100% up to $1000', 'Fast Withdrawals', 'HUD Friendly'],
    cta: '#',
  },
  {
    name: 'RedAce Rooms',
    rating: 4.8,
    colorFrom: 'from-rose-600/30',
    colorTo: 'to-fuchsia-700/30',
    perks: ['$50 Free Ticket', 'VIP Rakeback', 'Mobile Optimized'],
    cta: '#',
  },
  {
    name: 'Aurora Cards',
    rating: 4.7,
    colorFrom: 'from-amber-500/25',
    colorTo: 'to-rose-600/25',
    perks: ['200% Welcome', '24/7 Support', 'Provably Fair'],
    cta: '#',
  },
];

const bonuses = [
  { title: 'High Roller Boost', front: 'Up to $2,000', back: 'Exclusive bonus for first-time deposits. Unlock elite tables with premium perks.' },
  { title: 'Rakeback Elite', front: '30% Weekly', back: 'Steady cashback on every hand you play. Paid out automatically each week.' },
  { title: 'Ticket Frenzy', front: '$100 in Tickets', back: 'Grab free tournament entries and climb the leaderboards in style.' },
];

function Rating({ value }) {
  const stars = Math.round(value);
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < stars ? 'text-yellow-300 fill-yellow-300' : 'text-slate-500'}`}
        />
      ))}
      <span className="ml-2 text-sm text-slate-300/80">{value.toFixed(1)}</span>
    </div>
  );
}

export default function Showcase() {
  return (
    <section id="top-sites" className="relative w-full bg-[#080a0f] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.1),transparent),radial-gradient(40%_35%_at_90%_20%,rgba(244,63,94,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Top Poker Sites
          </motion.h2>
          <p className="mt-3 text-slate-300/90">Handpicked platforms ranked by safety, speed, and value for the modern grinder.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site, idx) => (
            <motion.div
              key={site.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${site.colorFrom} ${site.colorTo} p-[1px]`}
            >
              <div className="relative h-full rounded-2xl bg-[#0b0f17]/90 p-5 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{site.name}</h3>
                    <div className="mt-2 flex items-center gap-3 text-slate-300/80">
                      <div className="inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200">
                        <Shield className="h-3.5 w-3.5" /> Secured
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-200">
                        <Zap className="h-3.5 w-3.5" /> Fast Payouts
                      </div>
                    </div>
                  </div>
                  <Rating value={site.rating} />
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                  {site.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href={site.cta}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 font-medium text-white shadow-[0_0_20px_rgba(56,189,248,0.35)] transition hover:brightness-110"
                >
                  Join Now
                </a>

                {/* glow border on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-cyan-400/40 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonuses */}
        <div id="bonuses" className="mt-20 grid gap-6 md:grid-cols-3">
          {bonuses.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="[perspective:1200px]"
            >
              <div className="group relative h-56 w-full [transform-style:preserve-3d]">
                <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-[1px] transition-transform duration-700 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                  <div className="h-full rounded-2xl bg-[#0b0f17] p-6">
                    <div className="text-sm text-cyan-300/80">{b.title}</div>
                    <div className="mt-3 text-3xl font-semibold text-white">{b.front}</div>
                    <div className="mt-6 h-0.5 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                    <p className="mt-4 text-sm text-slate-300/90">Hover to reveal details</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-[1px] transition-transform duration-700 [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:[transform:rotateY(360deg)]">
                  <div className="h-full rounded-2xl bg-[#0b0f17] p-6">
                    <div className="text-sm text-cyan-300/80">Details</div>
                    <p className="mt-3 text-slate-200/90">{b.back}</p>
                    <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-sm text-white">
                      Claim Offer
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
