"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, MessageSquare, Heart, Wind, Smile } from "lucide-react";
import { APP_SHOWCASE_DATA } from "@/constants";
import { StoreBadges } from "@/components/ui/StoreBadges";

export function AppShowcase() {
  return (
    <section
      id="app-showcase"
      className="py-24 md:py-32 bg-[#FAF9F6] relative overflow-hidden scroll-mt-20"
    >
      {/* Soft purple and blue ambient brand glow */}
      <div className="absolute top-1/3 right-10 h-[500px] w-[500px] rounded-full bg-primary-100/30 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary-100/40 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-5">
            {/* Playful cursive badge */}
            <div className="inline-flex items-center gap-2 font-handwriting text-2xl text-primary-600 -rotate-3 mb-3">
              <span>Small Steps Big Changes</span>
              <span className="text-rose-400 text-xl">♡</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="block mb-4"
            >
              <span className="inline-flex items-center rounded-full bg-primary-50 px-3.5 py-1 text-xs font-semibold text-primary-600 border border-primary-100">
                {APP_SHOWCASE_DATA.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 leading-[1.15] tracking-tight"
            >
              Tools for every <br className="hidden sm:inline" />
              step of the journey.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-grey-600"
            >
              {APP_SHOWCASE_DATA.description}
            </motion.p>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {APP_SHOWCASE_DATA.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-grey-800">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* App Store & Google Play Store Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-grey-100"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-grey-500 mb-3">
                Download the app for iOS & Android
              </p>
              <StoreBadges className="gap-3.5" />
            </motion.div>
          </div>

          {/* Right Column: Fanned/Layered Phone Mockups Stack */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[660px] h-[580px] flex items-center justify-center">
              {/* Phone 1 (Back Left): Breathing & Mindfulness Exercise */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -12 }}
                whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="absolute -left-2 sm:left-2 top-8 w-[230px] sm:w-[250px] h-[480px] rounded-[36px] bg-grey-950 p-2.5 shadow-2xl border-4 border-grey-800 z-10 hidden sm:block"
              >
                <div className="h-full w-full rounded-[28px] bg-gradient-to-b from-sky-400 via-indigo-500 to-primary-800 p-4 text-white flex flex-col justify-between overflow-hidden relative">
                  <div className="flex justify-between items-center text-[10px] text-white/80">
                    <span>9:41</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full">Mindfulness</span>
                  </div>
                  <div className="text-center my-auto flex flex-col items-center">
                    <div className="h-28 w-28 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center animate-pulse mb-4 shadow-lg shadow-white/10">
                      <Wind className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-serif-heading text-lg font-medium">Breathe with the balloon</h4>
                    <p className="text-xs text-white/80 mt-1">Inhale gently... hold</p>
                  </div>
                  <div className="rounded-xl bg-white/15 backdrop-blur-sm p-2 text-center text-xs">
                    2m 45s session
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 (Center Left): Daily Mood Check-In */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -4 }}
                whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="absolute left-8 sm:left-24 top-4 w-[240px] sm:w-[260px] h-[510px] rounded-[38px] bg-grey-950 p-2.5 shadow-2xl border-4 border-grey-800 z-20"
              >
                <div className="h-full w-full rounded-[30px] bg-white p-4 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-grey-400 mb-3">
                      <span>9:41</span>
                      <span className="font-medium text-primary-500">LYNKFOLK</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-600">
                        M
                      </div>
                      <div>
                        <p className="text-xs font-bold text-grey-900">Hi, Maya</p>
                        <p className="text-[10px] text-grey-400">Daily emotional tracker</p>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-grey-50 p-3 mb-3 border border-grey-100">
                      <p className="text-xs font-medium text-grey-800 mb-2">How are you feeling?</p>
                      <div className="flex justify-between text-lg">
                        <span>😊</span>
                        <span className="scale-125 bg-primary-100 p-1 rounded-full">🙂</span>
                        <span>😐</span>
                        <span>😔</span>
                        <span>😣</span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-emerald-50 p-2.5 border border-emerald-100 text-[11px] text-emerald-800 flex items-center gap-2">
                      <Smile className="h-4 w-4 text-emerald-600" />
                      <span>Feeling calm & connected today</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-bold uppercase text-grey-400 tracking-wider">Quick Actions</p>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] text-grey-700">
                      <div className="rounded-lg bg-grey-50 p-2 border border-grey-100 flex items-center gap-1.5 font-medium">
                        <Heart className="h-3 w-3 text-rose-500" /> Journal
                      </div>
                      <div className="rounded-lg bg-grey-50 p-2 border border-grey-100 flex items-center gap-1.5 font-medium">
                        <Wind className="h-3 w-3 text-sky-500" /> Breathe
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 3 (Center Right - Foreground Hero Phone): AI Support Chat */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative sm:absolute sm:right-28 sm:top-0 w-[250px] sm:w-[275px] h-[530px] rounded-[40px] bg-grey-950 p-2.5 shadow-[0_25px_60px_-15px_rgba(138,44,226,0.3)] border-4 border-grey-800 z-30"
              >
                {/* Dynamic island speaker notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black z-40" />

                <div className="h-full w-full rounded-[32px] bg-white p-4 flex flex-col justify-between overflow-hidden">
                  <div className="pt-5">
                    <div className="flex items-center gap-2 pb-3 border-b border-grey-100">
                      <div className="h-7 w-7 rounded-full bg-primary-500 flex items-center justify-center text-white">
                        <MessageSquare className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-grey-900">AI Family Companion</p>
                        <p className="text-[9px] text-emerald-600 font-medium">● Online · Private space</p>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4 text-xs">
                      {/* AI Bubble */}
                      <div className="bg-primary-50 rounded-2xl rounded-tl-sm p-3 text-grey-800 leading-relaxed border border-primary-100/60">
                        <p className="text-[11px]">
                          I notice you and your dad both felt a bit distant yesterday. Would you like a guided prompt to share how you felt?
                        </p>
                      </div>

                      {/* User Bubble */}
                      <div className="bg-primary-500 text-white rounded-2xl rounded-tr-sm p-2.5 ml-6 text-right text-[11px]">
                        <p>Yes, that would be helpful.</p>
                      </div>

                      {/* AI Action Card */}
                      <div className="bg-grey-50 rounded-2xl p-3 border border-grey-200/80">
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-wide">Suggested Prompt</p>
                        <p className="text-[11px] font-medium text-grey-900 mt-1 italic">
                          &ldquo;What is something you wish I understood better?&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-grey-100 flex items-center justify-between text-grey-400 text-xs">
                    <span className="text-[11px]">Ask anything in confidence...</span>
                    <div className="h-6 w-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-[10px]">
                      ↑
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 4 (Far Right): Shared Moments / Prompts */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -right-4 sm:right-4 top-10 w-[230px] sm:w-[250px] h-[490px] rounded-[36px] bg-grey-950 p-2.5 shadow-xl border-4 border-grey-800 z-20 hidden md:block"
              >
                <div className="h-full w-full rounded-[28px] bg-white p-4 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex justify-between items-center text-[10px] text-grey-400 mb-4">
                      <span>9:41</span>
                      <span className="text-secondary-600 font-semibold">Shared</span>
                    </div>
                    <div className="rounded-2xl bg-secondary-50 p-3.5 border border-secondary-100 mb-3">
                      <span className="text-[10px] font-bold text-secondary-600 uppercase">Today&apos;s Question</span>
                      <p className="font-serif-heading text-xs text-grey-900 font-semibold mt-1">
                        What made you laugh this week?
                      </p>
                    </div>
                    <div className="space-y-2 mt-4">
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-grey-50 border border-grey-100 text-[11px]">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span className="font-medium text-grey-800">Dad answered</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-grey-50 border border-grey-100 text-[11px]">
                        <span className="h-2 w-2 rounded-full bg-primary-500" />
                        <span className="font-medium text-grey-800">Maya answered</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-primary-50 p-2 text-center text-xs text-primary-700 font-medium">
                    2 shared conversations unlocked
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
