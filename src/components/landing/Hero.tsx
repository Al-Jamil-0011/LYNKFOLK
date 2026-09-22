"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Star,
} from "lucide-react";
import { HERO_DATA } from "@/constants";

export function Hero() {
  const [selectedMood, setSelectedMood] = useState<number>(0);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 bg-gradient-to-b from-[#FFFDFB] via-[#FAF9F6] to-[#FAF9F6] rounded-b-[36px] sm:rounded-b-[48px] border-b border-grey-200/50 shadow-2xs scroll-mt-24"
    >
      <div id="home" className="absolute -top-24" />
      {/* Soft organic ambient glow blobs matching reference */}
      <div className="absolute top-8 left-1/4 h-[420px] w-[420px] rounded-full bg-primary-100/25 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-16 right-8 h-[450px] w-[450px] rounded-full bg-[#FFE7D1]/35 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute -bottom-8 left-4 h-[350px] w-[350px] rounded-full bg-[#E8F5E9]/40 blur-[90px] pointer-events-none -z-10" />

      {/* Subtle organic bottom-left leaf flourish SVG */}
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-6 w-16 sm:w-24 h-16 sm:h-24 opacity-25 pointer-events-none -z-10">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 80C30 50 60 40 85 25C70 55 55 75 20 80Z" fill="#a8e6cf" />
          <path d="M20 80Q45 60 85 25" stroke="#4db6ac" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-12 items-center">
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

            {/* Action Buttons: "Start Your Family Space" + "How It Works" */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 hover:bg-primary-600 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Start Your Family Space</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full bg-[#F3EAFD]/70 hover:bg-[#F3EAFD] border border-primary-200/80 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-primary-600 hover:text-primary-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>How It Works</span>
              </Link>
            </div>

            {/* Social Proof & Trust Divider Row */}
            <div className="mt-8 pt-6 border-t border-grey-200/70 w-full flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Rating & Connected Families with Overlapping Avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden shadow-2xs bg-grey-100">
                    <Image
                      src="/images/avatar-parent.jpg"
                      alt="Parent user"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden shadow-2xs bg-grey-100">
                    <Image
                      src="/images/avatar-teen.jpg"
                      alt="Teen user"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div className="relative inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden shadow-2xs bg-grey-100">
                    <Image
                      src="/images/avatar-together.jpg"
                      alt="Connected family"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-grey-900">4.9/5</span>
                  </div>
                  <span className="text-[11px] text-grey-500 font-medium">
                    2,400+ families connected
                  </span>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden sm:block h-8 w-px bg-grey-200" />

              {/* Private by Default Block */}
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-500 border border-sky-100/80 shadow-2xs">
                  <Shield className="h-4 w-4 stroke-[2.2]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-grey-900 leading-tight">
                    Private by Default
                  </span>
                  <span className="text-[11px] text-grey-500 leading-tight mt-0.5">
                    Zero data sold &bull; End-to-end encrypted
                  </span>
                </div>
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




