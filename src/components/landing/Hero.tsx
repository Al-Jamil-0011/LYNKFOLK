"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { HERO_DATA } from "@/constants";
import { StoreBadges } from "@/components/ui/StoreBadges";

export function Hero() {
  const [selectedMood, setSelectedMood] = useState<number>(0);

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 bg-[#FAF9F6] scroll-mt-24"
    >
      <div id="home" className="absolute -top-24" />
      {/* Soft organic ambient glow blobs matching reference */}
      <div className="absolute top-12 left-1/4 h-[480px] w-[480px] rounded-full bg-primary-100/30 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-24 right-10 h-[500px] w-[500px] rounded-full bg-[#FFE7D1]/40 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-6 h-[400px] w-[400px] rounded-full bg-[#E8F5E9]/50 blur-[100px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Typography, Copy, Store Badges & Trust Card */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center text-left z-10 animate-in fade-in slide-in-from-bottom-3 duration-700">
            {/* Pill Tag with subtle pulse */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700 border border-primary-100/80 shadow-2xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* Headline matching reference: "A calmer way to understand together." */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[66px] font-normal leading-[1.12] tracking-tight text-grey-900">
              A calmer way to <br className="hidden sm:inline" />
              understand{" "}
              <span className="relative inline-block text-primary-600 font-serif italic">
                together.
                {/* Hand-drawn organic curved underline SVG */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full text-secondary-500 overflow-visible"
                  viewBox="0 0 250 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14C50 4 150 2 247 12"
                    stroke="#2ed4ff"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 17C80 9 170 8 235 15"
                    stroke="#8a2ce2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtext from reference */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-grey-600 max-w-xl font-normal">
              {HERO_DATA.description}
            </p>

            {/* App Store & Google Play Badges directly below copy as in reference */}
            <div className="mt-8">
              <StoreBadges className="gap-3.5" />
            </div>

            {/* Privacy Trust Card under store buttons */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-[#E8F5E9]/70 border border-emerald-100/80 px-4 py-2.5 shadow-2xs">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-xs">
                <Shield className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-emerald-950">
                  {HERO_DATA.privacyNotice.title}
                </span>
                <span className="text-[11px] font-medium text-emerald-700">
                  {HERO_DATA.privacyNotice.subtitle}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Family Image in rounded-3xl with Floating Micro-Cards */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0 flex justify-center items-center">
            {/* Ambient soft backlight glow */}
            <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-tr from-primary-400/15 via-[#FFE7D1]/30 to-secondary-300/15 blur-2xl -z-10" />

            {/* Playful cursive sticker accent on top */}
            <div className="absolute -top-10 right-8 z-30 hidden sm:flex items-center gap-1 font-handwriting text-xl text-primary-600 font-bold rotate-6 drop-shadow-xs">
              <span>Better Together ♡</span>
            </div>

            {/* Main Family Image: Warm & authentic in rounded-3xl */}
            <div className="relative w-full max-w-[500px] lg:max-w-[530px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-black/5 animate-in fade-in duration-700">
              <Image
                src="/images/hero-family.jpg"
                alt="Loving family sharing a calm, happy connection"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 530px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Mood Check-in (Top Left / Overlay) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute -top-6 -left-4 sm:-left-8 z-20 rounded-2xl border border-white/90 bg-white/95 p-3.5 sm:p-4 shadow-lg backdrop-blur-md max-w-[230px]"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-grey-900">
                  {HERO_DATA.moodCard.title}
                </span>
              </div>
              <p className="text-[11px] text-grey-500 mb-2.5">
                {HERO_DATA.moodCard.subtitle}
              </p>

              {/* Minimal emoji selector */}
              <div className="flex items-center justify-between gap-1 mb-2">
                {HERO_DATA.moodCard.emojis.map((item, idx) => (
                  <button
                    key={item.mood}
                    type="button"
                    onClick={() => setSelectedMood(idx)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-sm transition-all cursor-pointer ${
                      selectedMood === idx
                        ? "scale-110 ring-2 ring-primary-500 shadow-sm bg-white"
                        : "hover:scale-105 opacity-80"
                    } ${item.color}`}
                    title={item.mood}
                  >
                    {item.emoji}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1 pt-1.5 border-t border-grey-100">
                <CheckCircle2 className="h-3 w-3 text-primary-500" />
                <p className="text-[10px] font-semibold text-primary-600">
                  {HERO_DATA.moodCard.encouragement}
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2: Private AI Support (Top Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.4 }}
              className="hidden sm:flex absolute -top-8 -right-2 sm:-right-6 z-20 items-center gap-3 rounded-2xl border border-white/90 bg-white/95 p-3 shadow-lg backdrop-blur-md max-w-[230px]"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600 border border-secondary-100 shadow-2xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-grey-900">
                  {HERO_DATA.aiCard.title}
                </span>
                <span className="text-[11px] text-grey-500 leading-tight">
                  {HERO_DATA.aiCard.description}
                </span>
              </div>
            </motion.div>

            {/* Floating Card 3: Shared Conversation Prompt (Bottom Right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-8 -right-2 sm:-right-6 z-20 rounded-2xl border border-white/90 bg-white/95 p-3.5 shadow-lg backdrop-blur-md max-w-[270px]"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary-50 text-primary-600">
                    <MessageCircle className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-bold text-grey-900">
                    {HERO_DATA.conversationCard.tag}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-secondary-700 bg-secondary-50 px-2 py-0.5 rounded-full border border-secondary-100">
                  {HERO_DATA.conversationCard.subtext}
                </span>
              </div>

              <p className="text-xs font-medium text-grey-800 leading-snug italic mb-2">
                &ldquo;{HERO_DATA.conversationCard.prompt}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-1.5 border-t border-grey-100 text-[10px] text-grey-600 font-medium">
                <span>Safe family space</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-white shadow-2xs">
                  <ArrowRight className="h-2.5 w-2.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}




