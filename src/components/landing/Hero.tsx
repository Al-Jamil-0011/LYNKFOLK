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
  Heart,
  CheckCircle2,
} from "lucide-react";
import { HERO_DATA } from "@/constants";
import { StoreBadges } from "@/components/ui/StoreBadges";

export function Hero() {
  const [selectedMood, setSelectedMood] = useState<number>(0);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[90vh] lg:min-h-[92vh] flex items-center pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 bg-gradient-to-b from-white via-primary-50/25 to-white"
    >
      {/* Ambient background decorative glow blooms */}
      <div className="absolute top-0 right-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-primary-400/15 via-primary-300/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-4 h-[440px] w-[440px] rounded-full bg-gradient-to-tr from-secondary-400/20 via-secondary-200/15 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 h-[380px] w-[380px] rounded-full bg-primary-100/30 blur-3xl pointer-events-none -z-10" />

      {/* Subtle background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0.8)_100%)] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Bold Typographic Hierarchy & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Pill Tag with pulsing dot */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-primary-50/90 px-4 py-1.5 text-xs font-semibold text-primary-700 border border-primary-200/80 shadow-xs mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span>{HERO_DATA.badge}</span>
              <span className="text-primary-300">•</span>
              <span className="text-primary-600 font-medium">Private & Safe</span>
            </div>

            {/* Headline with dynamic purple-cyan gradient accent */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-normal leading-[1.12] tracking-tight text-grey-900">
              A calmer way to <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent font-medium italic">
                understand
              </span>{" "}
              each other.
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-grey-600 max-w-xl">
              {HERO_DATA.description}
            </p>

            {/* Prominent CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="#get-started"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 w-full sm:w-auto text-center"
              >
                <span>Start Your Family Space</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-grey-200 bg-white/80 backdrop-blur-md px-6 py-4 text-base font-medium text-grey-700 hover:border-primary-300 hover:text-primary-600 hover:bg-white transition-all duration-200 w-full sm:w-auto text-center"
              >
                <span>How It Works</span>
              </Link>
            </div>

            {/* App Store / Google Play Badges */}
            <div className="mt-8">
              <StoreBadges />
            </div>

            {/* Social Proof & Privacy Trust Badges Row */}
            <div className="mt-6 flex flex-wrap items-center gap-5 sm:gap-6 pt-2 border-t border-grey-100 w-full">
              {/* Social Proof Rating */}
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                    <Image
                      src="/images/avatar-parent.jpg"
                      alt="Parent avatar"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                    <Image
                      src="/images/avatar-teen.jpg"
                      alt="Teen avatar"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                    <Image
                      src="/images/avatar-together.jpg"
                      alt="Together avatar"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center text-amber-500 text-xs">
                    {"★".repeat(5)}
                    <span className="ml-1.5 font-bold text-grey-800 text-xs">4.9/5</span>
                  </div>
                  <span className="text-[11px] text-grey-500 font-medium">
                    2,400+ connected families
                  </span>
                </div>
              </div>

              <div className="h-7 w-px bg-grey-200 hidden sm:block" />

              {/* Privacy Trust Card */}
              <div className="inline-flex items-center gap-2.5 text-left">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs">
                  <Shield className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-grey-900">
                    {HERO_DATA.privacyNotice.title}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-medium">
                    Zero data sold • End-to-end encrypted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grand Visual Imagery & Floating Glassmorphic Micro-Cards */}
          <div className="lg:col-span-6 relative mt-10 lg:mt-0 flex justify-center items-center">
            {/* Ambient Backlight Glow behind Image */}
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary-500/20 via-secondary-500/20 to-primary-300/10 blur-2xl -z-10" />

            {/* Main Family Image with High-End Frame */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/90 ring-1 ring-black/5 animate-in fade-in duration-700">
              <Image
                src="/images/hero-family.jpg"
                alt="Father and teenage daughter sharing a happy, calm connection"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-102"
                sizes="(max-width: 768px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Live Connection Pill inside Image (bottom left) */}
              <div className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-white border border-white/20 shadow-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-medium tracking-wide">Family Space Active</span>
              </div>
            </div>

            {/* Floating Micro-Card 1: Interactive Mood Check-in (Top Left) with continuous gentle float */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute -top-8 -left-4 sm:-left-8 z-20 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_15px_35px_rgba(138,44,226,0.14)] backdrop-blur-xl max-w-[250px] transition-all hover:scale-102"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5 text-primary-500 fill-primary-500" />
                  <span className="text-xs font-bold text-grey-900">
                    {HERO_DATA.moodCard.title}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                  Daily
                </span>
              </div>

              <p className="text-[11px] text-grey-500 mb-2.5">
                {HERO_DATA.moodCard.subtitle}
              </p>

              {/* Emojis selector */}
              <div className="flex items-center justify-between gap-1 mb-2.5">
                {HERO_DATA.moodCard.emojis.map((item, idx) => (
                  <button
                    key={item.mood}
                    type="button"
                    onClick={() => setSelectedMood(idx)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-base transition-all cursor-pointer ${
                      selectedMood === idx
                        ? "scale-115 ring-2 ring-primary-500 shadow-md bg-white"
                        : "hover:scale-105 opacity-80"
                    } ${item.color}`}
                    title={item.mood}
                  >
                    {item.emoji}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1.5 pt-1.5 border-t border-grey-100">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary-500" />
                <p className="text-[11px] font-semibold text-primary-600 text-center">
                  {HERO_DATA.moodCard.encouragement}
                </p>
              </div>
            </motion.div>

            {/* Floating Micro-Card 2: Private AI Support (Top Right) with continuous gentle float */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.4 }}
              className="hidden sm:flex absolute -top-10 -right-4 sm:-right-6 z-20 items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-[0_15px_35px_rgba(46,212,255,0.15)] backdrop-blur-xl max-w-[260px] transition-all hover:scale-102"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-400 to-primary-500 text-white shadow-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-grey-900">
                  {HERO_DATA.aiCard.title}
                </span>
                <span className="text-[11px] text-grey-500 leading-snug">
                  {HERO_DATA.aiCard.description}
                </span>
              </div>
            </motion.div>

            {/* Floating Micro-Card 3: Shared Conversation Prompt (Bottom Right) with continuous gentle float */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-10 -right-2 sm:-right-8 z-20 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_45px_rgba(138,44,226,0.16)] backdrop-blur-xl max-w-[290px] transition-all hover:scale-102"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-bold text-grey-900">
                    {HERO_DATA.conversationCard.tag}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-secondary-600 bg-secondary-50 px-2 py-0.5 rounded-full">
                  Guided
                </span>
              </div>

              <p className="text-[10px] font-semibold text-primary-500 uppercase tracking-wider mb-1">
                {HERO_DATA.conversationCard.subtext}
              </p>

              <p className="text-xs font-medium text-grey-800 leading-snug italic mb-2.5">
                &ldquo;{HERO_DATA.conversationCard.prompt}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-grey-100">
                <span className="text-[10px] text-grey-500 font-medium">Safe reply space</span>
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-xs">
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

