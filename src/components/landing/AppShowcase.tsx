"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Info, Sparkles, Shield } from "lucide-react";

export function AppShowcase() {
  return (
    <section
      id="tools-showcase"
      className="py-10 sm:py-14 md:py-18 bg-transparent relative overflow-hidden scroll-mt-24"
    >
      <div id="app-showcase" className="absolute -top-24" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        {/* Expansive Airy Container with Smooth Rounded Border */}
        <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16 border border-grey-200/70 shadow-xl shadow-grey-900/5 bg-[#FAF9F6]">

          {/* Background Image Layer (z-0): Warm Outdoor Scene with delicate blur */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <Image
              src="/images/outdoor-family-showcase.jpg"
              alt="Happy family enjoying outdoor connection"
              fill
              priority
              className="object-cover object-right md:object-center opacity-75 md:opacity-80 blur-[3px] scale-105"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Soft Gradient Overlay Layer (z-[1]): Left Text Contrast & Right Luminous Open */}
          <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/50 to-transparent" />

          {/* Subtle Ambient Light Glows (z-[1]) */}
          <div className="absolute -top-16 -left-16 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-100/30 blur-[90px] pointer-events-none z-[1]" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-amber-100/25 blur-[80px] pointer-events-none z-[1]" />

          {/* Main Content Grid (z-10) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">

            {/* Left Column: Clean Typography & Call to Action */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">

              {/* Pill Badge: THE LYNKFOLK APP */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100/90 text-purple-700 border border-purple-200/80 px-4 py-1.5 text-xs font-semibold tracking-wide shadow-2xs">
                  <Sparkles className="h-3 w-3 text-purple-600" />
                  <span>THE LYNKFOLK APP</span>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-serif-heading text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.15] tracking-tight text-slate-900"
              >
                Tools for every <br className="hidden sm:inline" />
                step of the Journey
              </motion.h2>

              {/* Sub-headline / Copy */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-md"
              >
                from mood check-ins to AI-powered guidance, LYNKFOLK gives families the tools, resources, and clarity they need &mdash; all in one calm place.
              </motion.p>

              {/* Primary Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-7 sm:mt-8"
              >
                <Link
                  href="#download"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#7c28d4] to-[#9d4edd] px-8 py-3.5 text-sm sm:text-base font-medium text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-400 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>Download App</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Trust Subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 text-xs text-slate-600 font-medium flex items-center gap-1.5"
              >
                <Shield className="h-3.5 w-3.5 text-emerald-600" />
                <span>Available for iOS & Android &bull; Private by design</span>
              </motion.p>
            </div>

            {/* Right Column: 4-Phone Staggered Floating Modern Phone Deck */}
            <div className="lg:col-span-7 relative flex justify-center items-center mt-6 lg:mt-0 min-h-[460px] sm:min-h-[520px]">

              {/* Swirling Neon Ribbon & Aurora Light SVGs behind phones */}
              <div className="absolute -bottom-4 left-4 right-8 h-36 pointer-events-none -z-0 overflow-visible hidden sm:block">
                <svg className="w-full h-full" viewBox="0 0 600 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="neon-glow-1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2ed4ff" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="neon-glow-2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8a2ce2" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  {/* Swirling glowing ribbons */}
                  <path
                    d="M30 110C150 40 320 140 540 60"
                    stroke="url(#neon-glow-1)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    filter="url(#glow)"
                  />
                  <path
                    d="M100 125C220 70 380 130 570 85"
                    stroke="url(#neon-glow-2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  {/* Firefly bokeh dots */}
                  <circle cx="510" cy="50" r="3" fill="#fbbf24" filter="url(#glow)" />
                  <circle cx="535" cy="75" r="2.5" fill="#f43f5e" filter="url(#glow)" />
                  <circle cx="485" cy="90" r="2" fill="#2ed4ff" filter="url(#glow)" />
                  <circle cx="560" cy="40" r="2" fill="#fbbf24" />
                </svg>
              </div>

              {/* Botanical Leaf Illustration on the right */}
              <div className="absolute -top-4 right-0 sm:-right-4 w-28 sm:w-36 h-36 sm:h-44 pointer-events-none z-30 select-none opacity-90 drop-shadow-md hidden sm:block">
                <svg viewBox="0 0 140 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40 160C50 120 70 80 110 30"
                    stroke="#5a7a58"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Leaves */}
                  <path d="M70 110C60 95 65 75 85 70C95 85 90 105 70 110Z" fill="#88b584" />
                  <path d="M50 130C35 120 35 100 50 90C65 100 65 120 50 130Z" fill="#9ec99a" />
                  <path d="M85 80C80 60 90 45 110 40C115 60 105 75 85 80Z" fill="#719f6c" />
                  <path d="M100 50C100 30 115 20 130 18C132 35 120 48 100 50Z" fill="#88b584" />
                </svg>
              </div>

              {/* 4 Phones Layered Composition Deck */}
              <div className="relative w-full max-w-[650px] h-[480px] sm:h-[510px] flex items-center justify-center">

                {/* Phone 1 (Left): Maya's Mood Tracking */}
                <motion.div
                  initial={{ opacity: 0, y: 25, rotate: -6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="absolute left-0 sm:left-4 top-10 w-[215px] sm:w-[235px] h-[435px] sm:h-[455px] rounded-[36px] bg-slate-950 p-2 shadow-2xl border-[3px] border-white/80 z-10 hidden sm:block overflow-hidden"
                >
                  <div className="h-full w-full rounded-[28px] bg-white p-3 flex flex-col justify-between overflow-hidden text-[11px]">
                    <div>
                      {/* Top Bar */}
                      <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2">
                        <span>9:41</span>
                        <div className="h-2 w-10 bg-slate-900 rounded-full" />
                      </div>

                      {/* Screen Title */}
                      <div className="flex items-center gap-1.5 mb-1 text-slate-800">
                        <ArrowLeft className="h-3 w-3" />
                        <h4 className="font-bold text-xs">Maya&apos;s mood tracking</h4>
                      </div>
                      <p className="text-[9px] text-slate-400 mb-2.5">Maya is in active flow state</p>

                      {/* Emoji Selector */}
                      <div className="rounded-xl bg-slate-50 p-2 border border-slate-100 mb-3">
                        <div className="flex justify-between text-base px-1">
                          <span className="scale-110">😊</span>
                          <span>🙂</span>
                          <span>😐</span>
                          <span>😔</span>
                          <span>😣</span>
                        </div>
                      </div>

                      {/* Score Overview */}
                      <div className="space-y-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Score Overview</span>
                        <div className="p-2 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-sky-500 text-white flex items-center justify-center text-[10px]">
                            ♥
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 text-[10px]">Daily emotional bond</p>
                            <p className="text-[8px] text-sky-700">Deep resonance &bull; High calm</p>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                            ✓
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 text-[10px]">Morning check-in done</p>
                            <p className="text-[8px] text-emerald-700">Open conversation ready</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-100 p-1.5 text-center text-[9px] text-slate-500 font-medium">
                      Synced with Dad &bull; Private space
                    </div>
                  </div>
                </motion.div>

                {/* Phone 2 (Center Hero Phone): AI Support */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1.04 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-2 w-[240px] sm:w-[260px] h-[465px] sm:h-[490px] rounded-[38px] bg-slate-950 p-2.5 shadow-[0_25px_60px_-10px_rgba(124,40,212,0.35)] border-[3.5px] border-white z-20 overflow-hidden"
                >
                  {/* Dynamic Island Speaker Notch */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 h-3.5 w-18 rounded-full bg-black z-30" />

                  <div className="h-full w-full rounded-[28px] bg-white p-3.5 flex flex-col justify-between overflow-hidden text-xs">
                    <div className="pt-4">
                      {/* Top Bar with AI Support */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 text-slate-800">
                        <div className="flex items-center gap-1.5">
                          <ArrowLeft className="h-3.5 w-3.5 text-slate-600" />
                          <span className="font-bold text-xs">AI Support</span>
                        </div>
                        <Info className="h-3.5 w-3.5 text-slate-400" />
                      </div>

                      {/* Conversation Bubbles */}
                      <div className="space-y-2.5 mt-3">
                        {/* AI Intro Bubble */}
                        <div className="bg-purple-50 text-slate-800 rounded-2xl rounded-tl-xs p-2.5 border border-purple-100/80 text-[11px] leading-relaxed">
                          <p>
                            &ldquo;The best conversations happen in calm moments. Here is an easy way to connect today.&rdquo;
                          </p>
                        </div>

                        {/* Guided Support Card */}
                        <div className="bg-slate-50 rounded-2xl p-2.5 border border-slate-200/80 text-[11px]">
                          <p className="text-[9px] font-bold uppercase tracking-wider text-purple-600">Suggested Action</p>
                          <p className="text-slate-800 mt-0.5 leading-snug">
                            Ask Maya about her favorite part of the afternoon without offering advice right away.
                          </p>
                        </div>

                        {/* User Confirmation */}
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl rounded-tr-xs p-2 text-right ml-4 text-[10px]">
                          <p>Great prompt &mdash; trying it tonight!</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Pill */}
                    <div>
                      <div className="w-full py-2 px-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center font-medium text-[11px] shadow-sm shadow-purple-500/30">
                        Try guided support &rarr;
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone 3 (Middle Peeking Phone): Family Shared Conversation */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="absolute right-12 sm:right-28 top-8 w-[205px] sm:w-[220px] h-[430px] rounded-[34px] bg-slate-950 p-2 shadow-xl border-[2.5px] border-white/70 z-10 hidden md:block overflow-hidden"
                >
                  <div className="h-full w-full rounded-[26px] bg-slate-50 p-3 flex flex-col justify-between overflow-hidden text-[10px]">
                    <div>
                      <div className="flex justify-between items-center text-[9px] text-slate-400 mb-2">
                        <span>9:41</span>
                        <div className="h-1.5 w-8 bg-slate-800 rounded-full" />
                      </div>
                      <p className="font-bold text-xs text-slate-800 mb-1">Family Shared Prompt</p>
                      <p className="text-[9px] text-slate-400 mb-3">Conversation Journal</p>

                      <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs mb-2">
                        <span className="text-[8px] font-bold text-secondary-600 uppercase">Weekly Topic</span>
                        <p className="font-serif-heading font-medium text-[11px] text-slate-900 mt-0.5">
                          What made you feel proud of yourself this week?
                        </p>
                      </div>

                      <div className="bg-purple-100/70 rounded-xl p-2 text-purple-900 text-[9px]">
                        Dad and Maya both responded &bull; 2 answers locked
                      </div>
                    </div>
                    <div className="text-center text-[9px] text-slate-400">
                      End-to-end encrypted
                    </div>
                  </div>
                </motion.div>

                {/* Phone 4 (Right): Parental Insights Dashboard (Dark UI) */}
                <motion.div
                  initial={{ opacity: 0, y: 25, rotate: 6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute right-0 sm:right-4 top-12 w-[215px] sm:w-[235px] h-[435px] sm:h-[455px] rounded-[36px] bg-slate-950 p-2 shadow-2xl border-[3px] border-white/80 z-10 hidden sm:block overflow-hidden"
                >
                  <div className="h-full w-full rounded-[28px] bg-slate-900 text-white p-3 flex flex-col justify-between overflow-hidden text-[11px]">
                    <div>
                      {/* Top Bar */}
                      <div className="flex justify-between items-center text-[10px] text-slate-400 mb-2">
                        <span>9:41</span>
                        <div className="h-2 w-10 bg-slate-700 rounded-full" />
                      </div>

                      <h4 className="font-bold text-xs text-white">Parental Insights Dashboard</h4>
                      <p className="text-[9px] text-slate-400 mb-3">Weekly Family Resonance</p>

                      {/* Metric Badges */}
                      <div className="grid grid-cols-2 gap-1.5 mb-3">
                        <div className="rounded-xl bg-slate-800 p-2 border border-slate-700 text-center">
                          <div className="h-5 w-5 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] mb-1">
                            94%
                          </div>
                          <span className="text-[8px] text-slate-300">Calm Score</span>
                        </div>
                        <div className="rounded-xl bg-slate-800 p-2 border border-slate-700 text-center">
                          <div className="h-5 w-5 mx-auto rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px] mb-1">
                            +18%
                          </div>
                          <span className="text-[8px] text-slate-300">Connection</span>
                        </div>
                      </div>

                      {/* Insight Summary */}
                      <div className="rounded-xl bg-slate-800/80 p-2 border border-slate-700/80 text-[10px] space-y-1">
                        <p className="font-semibold text-purple-300 text-[10px]">Positive Shift Detected</p>
                        <p className="text-slate-300 text-[9px] leading-tight">
                          Maya expressed feeling more heard during evening check-ins.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-slate-800 p-1.5 text-center text-[9px] text-slate-400">
                      Weekly Report &bull; Updated today
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Bottom-Right Script Note: "Small Steps Big Changes ♡♡♡" */}
              <div className="absolute -bottom-3 right-4 sm:right-8 z-30 font-handwriting text-2xl sm:text-3xl text-slate-800 font-bold rotate-6 select-none pointer-events-none drop-shadow-sm flex items-center gap-1">
                <span>Small Steps Big Changes</span>
                <span className="text-rose-500 text-xl sm:text-2xl">♡♡♡</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
