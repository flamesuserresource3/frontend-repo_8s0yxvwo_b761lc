import React from 'react';
import { Twitter, Youtube, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#06080c] py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="text-xl font-semibold text-white">CyberPoker Affiliate</div>
            <p className="mt-2 max-w-lg text-sm text-slate-400">
              We may receive commissions from partner sites. Please play responsibly. 18+ only.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10"><Youtube className="h-5 w-5" /></a>
            <a href="#" aria-label="Github" className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10"><Github className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} CyberPoker Affiliate. All rights reserved.</div>
      </div>
    </footer>
  );
}
