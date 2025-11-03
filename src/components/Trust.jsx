import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Trophy, Users } from 'lucide-react';

const features = [
  {
    title: 'Verified & Secure',
    desc: 'Every site is vetted for licensing, encryption, and provable fairness.',
    icon: ShieldCheck,
    color: 'from-emerald-400/20 to-cyan-400/10',
  },
  {
    title: 'Fast Payouts',
    desc: 'Cash out quickly with trusted processors and transparent limits.',
    icon: Clock,
    color: 'from-cyan-400/20 to-blue-400/10',
  },
  {
    title: 'Elite Bonuses',
    desc: 'Exclusive deals negotiated for our community of serious players.',
    icon: Trophy,
    color: 'from-amber-400/20 to-rose-400/10',
  },
  {
    title: 'Player-First Reviews',
    desc: 'Ratings based on real performance, not paid placements.',
    icon: Users,
    color: 'from-fuchsia-400/20 to-violet-400/10',
  },
];

const testimonials = [
  {
    name: 'Alex “RiverKing” S.',
    quote:
      'Switched rooms based on these guides and instantly saw better tables and faster withdrawals. The bonuses are legit.',
  },
  {
    name: 'Maya P.',
    quote:
      'Sleek, informative, and trustworthy. I love the clear comparisons and the exclusive rakeback offers.',
  },
  {
    name: 'Jonas L.',
    quote:
      'Felt like a VIP from day one. The site recommendations and promos are perfect for grinders.',
  },
];

export default function Trust() {
  return (
    <section className="relative w-full bg-[#070a0e] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_15%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(40%_40%_at_85%_20%,rgba(244,63,94,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-white"
            >
              Why Choose Us
            </motion.h3>
            <p className="mt-3 max-w-xl text-slate-300/90">
              We combine rigorous due diligence with insider insights to bring you the most trusted and rewarding poker destinations.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {features.map((f, idx) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${f.color} p-[1px]`}
                >
                  <div className="h-full rounded-2xl bg-[#0b0f17] p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <div className="text-lg font-medium text-white">{f.title}</div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300/90">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-white"
            >
              Success Stories
            </motion.h3>
            <p className="mt-3 max-w-xl text-slate-300/90">
              Real feedback from players who made the switch and never looked back.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-[1px]"
                >
                  <div className="h-full rounded-2xl bg-[#0b0f17] p-5">
                    <p className="text-slate-200/90">“{t.quote}”</p>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-400/50 to-transparent" />
                    <div className="mt-3 text-sm font-medium text-slate-300">{t.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
