'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type TabId = 'personal' | 'professional'

const TABS: {
  id: TabId
  label: string
  description: string
}[] = [
  {
    id: 'personal',
    label: 'Personal',
    description:
      'An MCA student in the final year building real-world projects.',
  },
  {
    id: 'professional',
    label: 'Professional',
    description:
      'Software Developer turning ideas into real-world projects — one thoughtful commit at a time.',
  },
]

export default function Home() {
  const [active, setActive] = useState<TabId>('personal')
  const current = TABS.find((t) => t.id === active) ?? TABS[0]

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#0b1120] text-white">
      {/* ---------- Looping video background ---------- */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Readability overlays (dark on the left for text, soft vignette) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(7,12,24,0.86) 0%, rgba(7,12,24,0.55) 42%, rgba(7,12,24,0.18) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(7,12,24,0.45) 0%, rgba(7,12,24,0) 26%, rgba(7,12,24,0) 70%, rgba(7,12,24,0.78) 100%)',
        }}
      />
      <div className="vignette pointer-events-none absolute inset-0" />

      {/* ---------- Navbar ---------- */}
      <header className="relative z-20 w-full px-5 py-5 sm:px-8 sm:py-6">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          {/* Small monogram to balance the bar */}
          <a
            href="#"
            className="group flex items-center gap-2.5"
            aria-label="Sahil Mehta — home"
          >
            <span className="font-display flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 text-sm font-semibold tracking-wide text-lantern backdrop-blur-sm transition-colors duration-300 group-hover:border-lantern/60 group-hover:text-lantern">
              SM
            </span>
            <span className="hidden text-sm font-medium tracking-[0.18em] text-white/70 uppercase sm:inline">
              Portfolio
            </span>
          </a>

          {/* Tab switcher */}
          <div
            role="tablist"
            aria-label="View mode"
            className="glass relative flex items-center gap-1 rounded-full p-1"
          >
            {TABS.map((tab) => {
              const isActive = tab.id === active
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className="relative z-10 cursor-pointer rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 sm:px-6 sm:py-2.5 sm:text-[15px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lantern/60"
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-lantern shadow-[0_4px_20px_-4px_rgba(255,209,95,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={
                      isActive
                        ? 'text-stone-900'
                        : 'text-white/75 hover:text-white'
                    }
                  >
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </nav>
      </header>

      {/* ---------- Main content (left aligned) ---------- */}
      <main className="relative z-10 flex flex-1 items-center">
        <div className="w-full px-5 py-10 sm:px-8 sm:py-14 lg:px-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mb-5 flex items-center gap-3 text-xs font-medium tracking-[0.35em] text-lantern/90 uppercase sm:text-sm"
            >
              <span className="h-px w-10 bg-lantern/60" />
              {current.id === 'personal' ? 'Welcome' : 'Developer'}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
              className="font-display text-glow-lantern text-lantern leading-[0.92] font-semibold tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem]"
            >
              SAHIL
              <br />
              MEHTA
            </motion.h1>

            {/* Description (switches with the tab) */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="mt-7 max-w-xl text-base leading-relaxed font-light text-cream/90 sm:mt-8 sm:text-lg md:text-xl"
              >
                {current.description}
              </motion.p>
            </AnimatePresence>

            {/* Subtle accent line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
              className="mt-10 h-px w-28 origin-left bg-gradient-to-r from-lantern/80 to-transparent sm:mt-12 sm:w-40"
            />
          </div>
        </div>
      </main>

      {/* ---------- Footer (sticky to bottom) ---------- */}
      <footer className="relative z-10 mt-auto border-t border-white/10 px-5 py-4 sm:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 text-xs text-white/55 sm:flex-row sm:text-[13px]">
          <p className="tracking-wide">
            © {new Date().getFullYear()} Sahil Mehta
          </p>
          <p className="flex items-center gap-2 tracking-[0.18em] uppercase">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-lantern shadow-[0_0_8px_2px_rgba(255,209,95,0.5)]" />
            MCA · Developer
          </p>
        </div>
      </footer>
    </div>
  )
}
